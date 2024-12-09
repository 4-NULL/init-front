import { POST, PUT, DELETE } from "@shared/api";
import { redirect } from "react-router-dom";


export const createAction = async ({ request }) => {
    const res = await POST(`/curriculums`, request);
    
    if (res.success) {
        alert(res.message);
        return redirect('/curriculum');
    }
}

export const editAction = async ({ params }) => {
    const { seq } = params;

    // 정보 수정시 seq만 가져옴..왜지?

    
    if (!seq) throw new Error("커리큘럼 번호가 없습니다.");
    const res = await PUT(`/curriculums/${seq}`, params);

    if (res.success) {
        alert(res.message);
        return redirect('/curriculum');
    }
}

export const deleteAction = async ({ params }) => {
    const { seq } = params;
    
    if (!seq) throw new Error("커리큘럼 번호가 없습니다.");

    const res = await DELETE(`/curriculums/${seq}`);
    if (res.success) {
        alert(res.message);
        return redirect('/curriculum');
    }
}