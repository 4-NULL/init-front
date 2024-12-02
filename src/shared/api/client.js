import { backendBaseUrl } from "@shared/config";

const getHeaderToken = () => {
  const token = localStorage.getItem("accessToken");
  return token
    ? {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }: {
      "Content-Type": "application/json",
    };
}

export const GET = async (targetURL) => {
    if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")

    const url = backendBaseUrl + targetURL;

    try {
      const res = await fetch(url, {
        method: "GET",  // HTTP 요청 메소드를 GET로 지정
        headers: getHeaderToken()
      });

      const resJson = await res.json();
      return resJson.data;
    } catch (error) {
      console.log("API Error", error);
      return [];
    }
}

export const POST = async (targetURL, request) => {
    if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")
      
    const url = backendBaseUrl + targetURL;
    const formData = await request.formData();
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    try {
      const res = await fetch(url, {
        method: 'POST',  // HTTP 요청 메소드를 POST로 지정
        headers: getHeaderToken(),
        body: JSON.stringify(data)
      });

      if (res.ok) {
        //console.log('Success:', res.data);  // 성공적으로 데이터를 받아 처리
        return res.json();  // 응답을 JSON으로 파싱
      } else {
        throw new Error('Network res was not ok');
      }

    } catch (error) {
      console.log("[POST] API Error", error);
      return [];
    }
}

