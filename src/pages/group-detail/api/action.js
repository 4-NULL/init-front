import { POST, PUT, DELETE } from "@shared/api";
import { redirect } from 'react-router-dom';

/**
 * 그룹 등록
 * @param {Object} request - 요청 본문 
 * @returns 
 */
export const createAction = async ({ request }) => {
    const res = await POST(`/groups`, request);
    
    if (res.success) {
        alert(res.message);
        return redirect('/group');
    } else {
        alert("그룹 등록 중 오류발생!");
        return;
    }
}

/**
 * 그룹 변경
 * @param {Object} params - 요청 파라미터
 * @param {Object} request - 요청 본문
 * @returns 
 */
export const editAction = async ({ params, request }) => {
    const { seq } = params;
    
    if (!seq) throw new Error("그룹 번호가 없습니다.");

    const res = await PUT(`/groups/${seq}`, request);
    if (res.success) {
        alert(res.message);
        return redirect('/group');
    } else {
        alert("그룹 변경 중 오류발생!");
        return;
    }
}

/**
 * 그룹 삭제
 * @param {*} seq - 그룹 번호
 * @returns 
*/
export const deleteAction = async (filterGroups, setFilteredGroups, seq) => {
    if (!seq) throw new Error("그룹 번호가 없습니다.");

    const res = await DELETE(`/groups/${seq}`);
    if (res.success) {
        setFilteredGroups(filterGroups.filter((data) => {
            return data.seq !== seq
        }));
    } else {
        alert("그룹 삭제 중 오류발생!");
        return;
    }
}