import { backendBaseUrl } from "@shared/config";

export const GET = async (targetURL) => {
    if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")

    const url = backendBaseUrl + targetURL;

    try {
        const res = await fetch(url);
        const resJson = await res.json()
        return resJson.data;
    } catch (error) {
        console.log("API Error", error);
        return [];
    }
}

