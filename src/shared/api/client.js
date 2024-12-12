import { backendBaseUrl } from "@shared/config";

const getHeaderToken = () => {
  
  const saveUser = localStorage.getItem("user");
  let accessToken;

  if (saveUser) {
    const info = JSON.parse(saveUser);
    accessToken = info.accessToken;
  }

  return accessToken
    ? {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    }: {
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
    };

    // POST, PUT, PATCH 요청 시
    if (bodyData) {
      const data = {};
      const formData = await bodyData.formData();
      
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      
      options.body = JSON.stringify(data)
    }

    const res = await fetch(url, options);
    if (res.ok) {
      const resJson = await res.json();
      return resJson;
    } else {
      throw new Error(`[${method}] Network res was not ok`);
    }

  } catch (error) {
    console.log(`[${method}][API ERROR] -> `, error);
    return [];
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