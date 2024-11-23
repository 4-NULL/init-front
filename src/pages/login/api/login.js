import { POST } from "@shared/api"


export const login = async ({ request }) => {

    const res = await POST('/member/login', request)
    
    console.log(res)

    if (res.state === 201) {
        alert('로그인에 성공했습니다.')
        localStorage.setItem("accessToken", res.data.accessToken); // 액세스 토큰
        localStorage.setItem("refreshToken", res.data.refreshToken); // 리프레시 토큰
        // window.location = '/'
    } else
        alert('로그인에 실패했습니다..')
    return true
}