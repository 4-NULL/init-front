import { backendBaseUrl } from "@shared/config";
import { request } from "express";

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

// GET 요청 (ex. select)
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

// POST 요청 (ex. create)
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
    console.error("[POST] API Error", error);
    alert("API 요청 중 에러발생")
    return [];
  }
}

// PUT 요청 (ex. 전체 update)
export const PUT = async (targetURL, request) => {
  if (!targetURL) return console.error("targetURL이 지정되지 않았습니다.")
    
  console.log("[PUT][seq] => " + request.seq);
  const url = `${backendBaseUrl}${targetURL}/${request.seq}`;
  const formData = await request.formData();
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  try {
    const res = await fetch(url, {
      method: 'PUT',  // HTTP 요청 메소드를 PUT로 지정
      headers: getHeaderToken(),
      body: JSON.stringify(data)
    });
  
    if (res.ok) {
      return res.json();  // 응답을 JSON으로 파싱
    } else {
      throw new Error('Network res was not ok');
    }
  
  } catch (error) {
    console.log("[PUT] API Error", error);
    return [];
  }
}

// PATCH 요청 (ex. 일부 update)
export const PATCH = async (targetURL, request) => {
  if (!targetURL) return console.error("targetURL이 지정되지 않았습니다.")
    
  console.log("[PATCH][seq] => " + request.seq);
  const url = `${backendBaseUrl}${targetURL}/${request.seq}`;
  const formData = await request.formData();
  const data = {};
  
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  try {
    const res = await fetch(url, {
      method: 'PATCH',  // HTTP 요청 메소드를 PATCH로 지정
      headers: getHeaderToken(),
      body: JSON.stringify(data)
    });
  
    if (res.ok) {
      return res.json();  // 응답을 JSON으로 파싱
    } else {
      throw new Error('Network res was not ok');
    }
  
  } catch (error) {
    console.log("[PUT] API Error", error);
    return [];
  }
}

// DELETE 요청 (ex. 삭제)
export const DELETE = async (targetURL, seq) => {
  if (!targetURL) return console.error("targetURL이 지정되지 않았습니다.")
  if (!seq) return console.error("seq이 없습니다.")
    
  console.log("[DELETE][seq] => " + request.seq);
  
  const url = `${backendBaseUrl}${targetURL}/${seq}`;
  
  try {
    const res = await fetch(url, {
      method: 'DELETE',  // HTTP 요청 메소드를 DELETE로 지정
      headers: getHeaderToken()
    });
  
    if (res.ok) {
      return res.json();  // 응답을 JSON으로 파싱
    } else {
      throw new Error('Network res was not ok');
    }
  
  } catch (error) {
    console.log("[DELETE] API Error", error);
    return [];
  }
}