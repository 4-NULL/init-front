import { POST } from "@shared/api";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@shared/context";

export const useTokenRefresh = (intervalTime = 10 * 60 * 1000) => {
    const { logout } = useUser();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const goPage = (page = "/login") => {
        if (page == "/login") {
            // 로그인 이동할 경우 로컬 스토리에 사용자 정보 삭제
            logout();
        }

        navigate(page);
    }

    /**
     * 로컬 스토리지에서 사용자 정보 가져오기
     * @returns
     */
    const getUserInfo = () => {
        const savedUser = localStorage.getItem("user"); // 로컬 스토리지에 저장된 사용자 정보확인

        if (savedUser) {
            return JSON.parse(savedUser);
        } else {
            goPage("/login");
            return null;
        }
    }

    /**
     * 액세스 토큰 저장
     * @param {*} token
     */
    const setAccessToken = (token) => {
        const userInfo = getUserInfo() || {};
        userInfo.accessToken = token;
        localStorage.setItem("user", JSON.stringify(userInfo));
    }

    /**
     * 토큰 갱신
     */
    const refreshToken = useCallback(async () => {
        const userInfo = getUserInfo();

        if (loading) {
            return;
        }

        try {
            setLoading(true);
            const { accessToken } = userInfo;
            const res = await POST('/auth/token-renewal', { accessToken });

            if (res.success) {
                // 토큰 갱신완료
                setAccessToken(res.data.accessToken);
            } else if ([401, 403].includes(res.code)) {
                // 토큰 만료
                alert(res.message)
                goPage("/login");
            } else {
                // 그 외 에러
                console.log(res.message);
            }

        } catch (error) {
            // 토큰 갱신 실패
            console.error(error.message || "토큰 갱신에 실패하였습니다. 다시 로그인해주세요.");
            goPage("/login");

        } finally {
            setLoading(false);
        }
    }, [loading]);

    const startTokenRefresh = () => {
        const interval = setInterval(() => {
            console.log("token update process...");
            refreshToken();
        }, intervalTime); // n분마다 갱신 (default: 10분)

        return () => clearInterval(interval);
    }

    return {
        loading,
        setAccessToken,
        startTokenRefresh,
    };
}