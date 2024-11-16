import { POST } from "@shared/api"

export  const joinRequest = async ({request}) => {

    
    const res  = POST('/member/join', request)
    console.log(res)
    return true
}