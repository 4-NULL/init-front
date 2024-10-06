import { isEmpty } from "../common/utils";

// Vite에서 환경 변수 사용
const baseURL = `${import.meta.env.VITE_API_URL}/curriculum` || 'http://localhost:8080/api/v1/curriculum';

console.log(baseURL);

export async function callAPI(targetURL, params) {
    var url = `${baseURL}/curriculum${targetURL}`; // 환경에 따른 URL 사용

    const queryString = new URLSearchParams(params).toString();

    if (!isEmpty(queryString)) {
        url = `${url}?${queryString}`;
    }

    try {
        console.log("url : "+url);
        const res = await fetch(url);

        if (res.ok) {
            // 응답 데이터가 있는 경우에만 JSON으로 파싱
            if (res.headers.get('content-type')?.includes('application/json')) {
                const jsonData = await res.json();
                return jsonData.data || []; // 데이터가 배열인지 확인 후 반환
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

// 커리큘럼 전체 리스트 조회
export async function getCurriculumList(keyword = '') {
    const params = keyword ? { keyword } : {};
    return await callAPI("", params); // ""는 기본 경로로 전체 커리큘럼 조회
}

// export async function getCurriculum(currSeq) {
//     const params = { seq: currSeq }; // 여기에서 keyword 대신 currSeq로 수정
//     return await callAPI("/" + currSeq, params); // ""는 기본 경로로 전체 커리큘럼 조회
// }
