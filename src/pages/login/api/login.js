import { POST } from "@shared/api";

export const login = async (request, setUser) => {

    try {
        const res = await POST('/auth/login', request);

        if (res.success) { // 로그인 성공
            alert(res.message);
            localStorage.setItem("user", JSON.stringify(res.data)); // 사용자 정보 저장
            setUser(res.data);
            return true;
        } else { // 로그인 에러
            alert(res.message);
            return false;
        }
    } catch (error) {
        alert("로그인 요청 중 오류가 발생하였습니다.");
        return false;
    }
}