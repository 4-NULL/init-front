export async function callAPI(targetURL) {
    if(targetURL == "") {
        targetURL = "userList";
    }

    let CALL_URL = "http://localhost:8080/api/v1/" + targetURL;

    console.log(CALL_URL);

    try {
        const res = await fetch(CALL_URL);

        if(res.ok) {
            return await res.json();

        } else {
            console.log(`Error: ${res.status} - ${res.statusText}`);
            return [];
        }
    } catch (error) {
        console.log("API 연결 에러", error);
        return [];
    }
}