import { POST } from "@shared/api";

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
    alert(res.message);
    return false;
  }
};
