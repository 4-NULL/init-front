export async function callAPI(targetURL="info_list", params) {
    var url = "http://localhost:8080/api/v1/" + targetURL;

    const queryString = new URLSearchParams(params).toString();

    // 검색어가 있을 경우에만 요청 URL에 추가할 수 있도록 변경
    if(queryString != "") {
        url = `${url}?${queryString}`;
    }

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

// 단건 사용자 조회
export async function findUserOne(params) {
    return await callAPI("info_one", params);
}

// 다건 사용자 조회
export async function findUserAll() {
    return await callAPI("info_list");
}

// 사용자 정보 등록/수정
export async function modifyUser(params) {
    return await callAPI("modify", params);
}

// 사용자 정보 삭제
export async function deleteUser(params) {
    return await callAPI("delete", params);
}

// 사용자 즐겨찾기 true/false
export async function modifyFavorite(params) {
    return await callAPI("modify_favorite", params);
}

// 사용자 검색
export async function searchUsers(params) {
    return await callAPI("search", params);
}

