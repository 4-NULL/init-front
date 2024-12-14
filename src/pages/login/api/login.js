import { POST } from "@shared/api";
import { redirect } from 'react-router-dom';

export const login = async ({ request }) => {
    const res = await POST('/auth/login', request)
    
    if (res.success) {
        
        alert(res.message);
        localStorage.setItem("user", JSON.stringify(res.data)); // 사용자 정보 저장
        return redirect('/');  // 페이지 리로드 없이 클라이언트 측 리다이렉션
    } else {
        alert("로그인시 에러가 발생하였습니다.");
        return false;
    }
}