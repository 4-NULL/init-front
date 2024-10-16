export default async function login(id, password) {
    
    const res = await fetch('/login-url', {
        headers: {
            method: 'POST'
        }
    })

    return res;
}