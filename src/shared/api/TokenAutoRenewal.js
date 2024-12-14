import { POST } from "@shared/api";

// 로컬 스토리지에서 사용자 정보 가져오기
const getUserInfo = () => {
    const savedUser = localStorage.getItem("user"); // 로컬 스토리지에 저장된 사용자 정보확인
    
    if (savedUser) {
        return JSON.parse(savedUser);
    } else {
        alert("로그인이 필요합니다.");
        window.location.href = '/login';
        return null;
    }
}

// 액세스 토큰 저장하기
const setAccessToken = (token) => {
    const userInfo = getUserInfo() || {};
    userInfo.accessToken = token;
    localStorage.setItem("user", JSON.stringify(userInfo));
}

// 리프레시 토큰 저장하기
const setRefreshToken = (token) => {
    const userInfo = getUserInfo() || {};
    userInfo.refreshToken = token;
    localStorage.setItem("user", JSON.stringify(userInfo));
}

// 토큰 갱신
export const updateTokenAuto = async () => {
    const userInfo = getUserInfo();
    if (!userInfo) return false;

    const { accessToken, refreshToken, email } = userInfo;

    // 리프레시 토큰이 없다면 로그인 화면으로 이동
    if (!refreshToken) {
        alert("refreshToken이 없습니다. 다시 로그인 해주세요");
        return false;
    }
    
    try {
        const res = await POST(`/auth/token-renewal`, { accessToken, refreshToken, email });
        
        if (res.success) {
            // 갱신완료
            console.log("토큰 갱신이 완료되었습니다.");
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            return true;
        } else {
            // 이미 유효한 토큰
            console.log("[결과] " + res.message);
            return true;
        }
    } catch (error) {
        console.error("토큰 갱신 실패", error);
        return false;
    }
};
