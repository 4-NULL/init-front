
import { POST } from "@shared/api"
import { redirect } from 'react-router-dom';

export  const joinRequest = async ({request}) => {
    
    const res = await POST('/auth/signup', request)
   
    if (res.success) {
        alert(res.message);
        return redirect('/');  // 페이지 리로드 없이 클라이언트 측 리다이렉션
    } else {
        // 회원가입 중 오류발생
        alert(res.message);
        return false;
    }
}