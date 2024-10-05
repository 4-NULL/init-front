import { isEmpty } from "../common/utils";
export async function callAPI(targetURL, params) {
    var url = "http://localhost:8080/api/v1/curriculum" + targetURL ;

    const queryString = new URLSearchParams(params).toString();

    if(!isEmpty(queryString)) {
        url = `${url}?${queryString}`;
    }

    try {
        const res = await fetch(url);

        if(res.ok) {
            // 응답 데이터가 있는 경우에만 JSON으로 파싱
            if(res.headers.get('content-type')?.includes('application/json')) {
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
    return await callAPI(null, params); // ""는 기본 경로로 전체 커리큘럼 조회
}

export async function getCurriculum(currSeq) {
    const params = keyword ? { keyword } : {};
    return await callAPI("/"+currSeq, params); // ""는 기본 경로로 전체 커리큘럼 조회
}
