
import { POST } from "@shared/api"
import { redirect } from 'react-router-dom';

export  const joinRequest = async ({request}) => {
    
    const res = await POST('/auth/join', request)
    
    console.log(res)

    if (res.state === 201) {
        alert('회원가입에 성공했습니다.')
        return redirect('/');  // 페이지 리로드 없이 클라이언트 측 리다이렉션
        
    } else  {
        alert(res.message);
        return false
    }

}