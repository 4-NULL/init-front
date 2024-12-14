import { POST, PUT, DELETE } from "@shared/api";
import { redirect } from 'react-router-dom';

/**
 * 커리큘럼 등록
 * @param {Object} request - 요청 본문 
 * @returns 
 */
export const createAction = async ({ request }) => {
    const res = await POST(`/curriculums`, request);
    
    if (res.success) {
        alert(res.message);
        return redirect('/curriculum');
    } else {
        alert("커리큘럼 등록 중 오류발생!");
        return;
    }
}

/**
 * 커리큘럼 변경
 * @param {Object} params - 요청 파라미터
 * @param {Object} request - 요청 본문
 * @returns 
 */
export const editAction = async ({ params, request }) => {
    const { seq } = params;
    
    if (!seq) throw new Error("커리큘럼 번호가 없습니다.");

    const res = await PUT(`/curriculums/${seq}`, request);
    if (res.success) {
        alert(res.message);
        return redirect('/curriculum');
    } else {
        alert("커리큘럼 변경 중 오류발생!");
        return;
    }
}

/**
 * 커리큘럼 삭제
 * @param {*} seq - 커리큘럼 번호
 * @returns 
*/
export const deleteAction = async (seq) => {
    if (!seq) throw new Error("커리큘럼 번호가 없습니다.");

    const res = await DELETE(`/curriculums/${seq}`);
    if (res.success) {
        alert("커리큘럼 삭제가 완료되었습니다.");
        return redirect('/curriculum');
    } else {
        alert("커리큘럼 삭제 중 오류발생!");
        return;
    }
}