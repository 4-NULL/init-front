import { POST, PUT, PATCH, DELETE } from "@shared/api";

export const curriculumRequest = async ({ params }) => {
    const { actionType, seq } = params || {};

    if (!actionType) {
        throw new Error("actionType이 존재하지 않습니다.");
    }

    try {
        switch (actionType) {
            case "create": {
                // 등록
                return await POST(`/curriculums`, params);
            }

            case "edit": {
                // 전체 업데이트
                if (!seq) throw new Error("커리큘럼 ID가 없습니다.", params);
                return await PUT(`/curriculums/${seq}`, params);
            }
            case "partial-edit": {
                // 부분 업데이트
                if (!seq) throw new Error("커리큘럼 ID가 없습니다.", params);
                return await PATCH(`/curriculums/${seq}`, params);
            }

            case "delete": {
                // 삭제
                if (!seq) {
                    throw new Error("커리큘럼 ID가 없습니다.");
                }
                return await DELETE(`/curriculums/${seq}`);
            }

            default: {
                throw new Error("정의되지 않은 actionType입니다 -> ", actionType);
            }
        }
    } catch (error) {
        console.error("API 요청 실패: ", error);
        throw error;
    }
}