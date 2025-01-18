import { POST } from "@shared/api";
import { redirect } from "react-router-dom";

/**
 * 커리큘럼 등록
 * @param {Object} request - 요청 본문
 * @returns
 */
export const createGroup = async ({ request }) => {
  const res = await POST(`/groups`, request);

  if (res.success) {
    alert(res.message);
    return true;
  } else {
    alert("커리큘럼 등록 중 오류발생!");
    console.error(res);
    return false;
  }
};
