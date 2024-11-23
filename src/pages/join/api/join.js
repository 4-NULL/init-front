
import { POST } from "@shared/api"

export  const joinRequest = async ({request}) => {
    
    const res = await POST('/member/join', request)
    debugger
    console.log(res)

    if (res.state === 201) {

        alert('회원가입에 성공했습니다.')
        window.location = '/'
    } else 
        return alert('회원가입이 정상적으로 처리되지 않았습니다.')

}