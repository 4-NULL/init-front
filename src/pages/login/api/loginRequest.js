import { POST } from "@shared/api";
import { useUser } from "@shared/context";
export const login = async ({ request }) => {
  try {
    const res = await POST("/auth/login", request);

    if (res.success) {
      return res;
    } else {
      // 로그인 에러
      alert(res.message);
      return false;
    }
  } catch (error) {
    alert("로그인 요청 중 오류가 발생하였습니다.");
    return false;
  }
};
