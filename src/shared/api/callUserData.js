import dummy from "../data/dummy";

// 서버에서 사용자 데이터를 가져오는 함수
export const fetchUserData = async () => {
  try {
    // 실제 서버 요청이 필요할 경우 아래 fetch를 활성화하고 URL을 설정
    // const response = await fetch('/api/user');
    // if (!response.ok) throw new Error('Failed to fetch user data');
    // const data = await response.json();

    // 더미 데이터 사용
    const data = dummy;

    return data; // 사용자 데이터 반환
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; // 오류 발생 시 null 반환
  }
};
