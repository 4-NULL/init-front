import { POST } from "@shared/api";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useTokenRefresh = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const goPage = (page = "/login") => {
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
     * 리프레시 토큰 저장
     * @param {*} token
     */
    const setRefreshToken = (token) => {
        const userInfo = getUserInfo() || {};
        userInfo.refreshToken = token;
        localStorage.setItem("user", JSON.stringify(userInfo));
    }

    /**
     * 토큰 갱신
     */
    const refreshToken = useCallback(async () => {
        const userInfo = getUserInfo();

        if (!userInfo) {
            // 로그인 정보 없음 -> 로그인 화면으로 이동
            goPage("/login");
            return;
        }

        if (loading) {
            return;
        }

        
        try {
            setLoading(true);
            const { accessToken, refreshToken, email } = userInfo;
            const res = await POST(`/auth/token-renewal`, { accessToken, refreshToken, email });

            if (res.success) {
                // 토큰 갱신완료
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
            } else {
                // 이미 유효한 토큰 또는 에러
                console.log(res.message);
            }
        } catch (error) {
            // 토큰 갱신 실패
            alert(error.message || "토큰 갱신에 실패하였습니다. 재로그인이 필요합니다.");
            goPage("/login");
        } finally {
            setLoading(false);
        }
    }, [loading]);

    // 10분마다 토큰 갱신
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("token update process...");
            refreshToken();
        }, 1 * 60 * 1000); // 10분마다 갱신

        return () => clearInterval(interval);
    }, [refreshToken]);

    return {
        loading,
        setAccessToken,
        setRefreshToken,
    };
}