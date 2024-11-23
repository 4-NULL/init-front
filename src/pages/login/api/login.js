import { POST } from "@shared/api"


export const login = async ({ request }) => {

    const res = await POST('/member/login', request)
    
    console.log(res)

    if (res.state === 201) {

        alert('로그인에 성공했습니다.')
        // window.location = '/'
    } else 
        alert('로그인에 실패했습니다..')
    return true
}   