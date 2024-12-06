import { POST } from "@shared/api";
import { redirect } from 'react-router-dom';

export const login = async ({ request }) => {

    const res = await POST('/auth/login', request)
    
    console.log(res)
    localStorage.setItem("accessToken", res.data.accessToken); // 액세스 토큰
    localStorage.setItem("refreshToken", res.data.refreshToken); // 리프레시 토큰

    return redirect('/');  // 페이지 리로드 없이 클라이언트 측 리다이렉션
}