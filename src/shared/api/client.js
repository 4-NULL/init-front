import { backendBaseUrl } from "../config";

export const GET = async (targetURL) => {
    if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")

    const url = backendBaseUrl + targetURL;

    try {
        const res = await fetch(url);

        if(res.ok) {
            // 응답 데이터가 있는 경우에만 JSON으로 파싱
            if(res.headers.get('content-type')?.includes('application/json')) {
                return await res.json();
            } else {
                return [];
            }
        } else {
            console.log(`Error: ${res.status} - ${res.statusText}`);
            return [];
        }
    } catch (error) {
        console.log("API Error", error);
        return [];
    }
}

