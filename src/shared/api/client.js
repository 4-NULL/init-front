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

// GET 요청 (ex. select)
export const GET = async (targetURL) => {
  if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")

  const url = backendBaseUrl + targetURL;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: getHeaderToken(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    if (!text) {
      return null;
    }

    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse JSON response:', text);
      throw new Error('Invalid JSON response from server');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

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
    const response = await fetch(url, {
      method: 'POST',
      headers: getHeaderToken(),
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// PUT 요청 (ex. 전체 update)
export const PUT = async (targetURL, data) => {
  if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")
  if(!data) return console.error("request body가 지정되지 않았습니다.")

  const url = backendBaseUrl + targetURL;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: getHeaderToken(),
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// PATCH 요청 (ex. 일부 update)
export const PATCH = async (targetURL, data) => {
  if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")
  if(!data) return console.error("request body가 지정되지 않았습니다.")

  const url = backendBaseUrl + targetURL;

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: getHeaderToken(),
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// DELETE 요청 (ex. 삭제)
export const DELETE = async (targetURL) => {
  if(!targetURL) return console.error("targetURL이 지정되지 않았습니다.")

  const url = backendBaseUrl + targetURL;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: getHeaderToken(),
    });
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};