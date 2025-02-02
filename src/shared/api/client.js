import { backendBaseUrl } from "@shared/config";
import { throwError } from "@shared/utils/customError";

const getHeaderToken = () => {
  
  const savedUser = localStorage.getItem("user");
  let accessToken;

  if (savedUser) {
    const info = JSON.parse(savedUser);
    accessToken = info.accessToken;
  }

  return accessToken
    ? {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    : {
      "Content-Type": "application/json",
      };
}

// 공통 fetch 요청
const fetchRequest = async (method, targetURL, bodyData = null) => {
  if (!targetURL) {
    console.error("targetURL이 지정되지 않았습니다.");
    return null;
  }

  const url = backendBaseUrl + targetURL;

  try {
    const options = {
      method,
      headers: getHeaderToken(),
      credentials : 'include' // 쿠키를 포함하도록 설정
    };

    // POST, PUT, PATCH 요청 시
    if (bodyData) {
      let data = {};
      
      if (bodyData instanceof FormData) {
        // bodyData가 'FormData' 인 경우
        bodyData.forEach((value, key) => {
          data[key] = value;
        });

      } else if (bodyData && typeof bodyData.formData === 'function') {
        // bodyData가 'FormData' 객체는 아니지만 'formData' 메서드를 제공하는 객체일때
        const formData = await bodyData.formData();
        for (const [key, value] of formData.entries()) {
          data[key] = value;
        }

      } else {
        // 들어온 객체 그대로 처리
        data = { ...bodyData };
      }

      options.body = JSON.stringify(data);
    }

    const res = await fetch(url, options);
    const resJson = await res.json();

    if (res.ok) {
      // console.log(resJson.message);
      return resJson;
    } else {
      /*
        401 Unauthorized
          - 인증 실패 (인증 정보 유효하지 않음) -> 로그인 유도
        403 Forbidden
          - 권한 없음 (사용자 인증은 받았지만, 권한이 부족) -> 알럿 메시지 노출
        500 Internal Server Error
          - 서버에서 예기치 않은 오류 발생
      */
      throwError(res.status, resJson.message);
    }

  } catch (error) {
    // console.log(`[${method} 요청] -> `, error);
    return {
      'success': false,
      'message': error.message,
      'data': null,
      'code': error.code,
    };
  }
}

// GET 요청 (ex. select)
export const GET = async (targetURL) => {
  return await fetchRequest("GET", targetURL);
}

// POST 요청 (ex. create)
export const POST = async (targetURL, request) => {
  return await fetchRequest("POST", targetURL, request);
}

// PUT 요청 (ex. 전체 update)
export const PUT = async (targetURL, request) => {
  return await fetchRequest("PUT", targetURL, request);
}

// PATCH 요청 (ex. 일부 update)
export const PATCH = async (targetURL, request) => {
  return await fetchRequest("PATCH", targetURL, request);
}
// DELETE 요청 (ex. 삭제)
export const DELETE = async (targetURL) => {
  return await fetchRequest("DELETE", targetURL);
}