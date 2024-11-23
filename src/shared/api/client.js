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

export const POST = async (targetURL, request) => {

    const formData = await request.formData();
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    

    const url = backendBaseUrl + targetURL;
    const res = await fetch(url, {
        method: 'POST',  // HTTP 요청 메소드를 POST로 지정
        headers: {
          'Content-Type': 'application/json'  // 요청의 본문이 JSON 형식임을 명시
        },
        body: JSON.stringify(data)
    })

    if (res.ok) {
      if (!res.ok) {
        throw new Error('Network res was not ok');
      }
      console.log('Success:', res.data);  // 성공적으로 데이터를 받아 처리
      return res.json();  // 응답을 JSON으로 파싱

    }
    else {
      console.error('Error:', res);  // 오류 처리
    }
      
}

