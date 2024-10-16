export default async function login(id, password) {
    
    const res = await fetch('/join-url', {
        headers: {
            method: 'POST'
        }
    })

    return res;
}