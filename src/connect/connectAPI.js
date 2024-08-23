export async function callAPI(targetURL="info_list", params) {
    var url = "http://localhost:8080/api/v1/" + targetURL;

    if(params == "" || params == {} || params == "undefined") {
        delete params();
    } else {
        const queryString = new URLSearchParams(params).toString();
        url = `${url}?${queryString}`;
        // console.log(url);
    }

    // console.log(url);

    try {
        const res = await fetch(url);

        if(res.ok) {
            return await res.json();
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
export async function findUserOne(id) {
    // console.log(id);
    const params = {
        'id' : id
    };
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
export async function deleteUser(id) {
    const params = {
        'id' : id
    };
    return await callAPI("delete", params);
}

// 사용자 즐겨찾기 true/false
export async function modifyFavorite(params) {
    return await callAPI("modifyFavorite", params);
}

// 사용자 검색
export async function searchUsers(name) {
    const params = {
        "name": name
    };
    return await callAPI("search", params);
}

