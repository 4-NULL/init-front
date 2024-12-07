import { POST, PUT, DELETE } from "@shared/api";

export const loader = async ({ params }) => {
    const { actionType, seq } = params || {};

    if (!actionType) {
        throw new Error("actionType이 존재하지 않습니다.");
    }

    try {
        switch (actionType) {
            case "create": {
                const createRes = await POST(`/curriculum`);
                return createRes;
            }
            case "update": {
                if (!seq) {
                    throw new Error("커리큘럼 ID가 없습니다.");
                }

                const updateRes = await PUT(`/curriculum/${seq}`);
                return updateRes;
            }

            case "delete": {
                if (!seq) {
                    throw new Error("커리큘럼 ID가 없습니다.");
                }
                const deleteRes = await DELETE(`/curriculum/${seq}`);
                return deleteRes;
            }

            default: {
                throw new Error("정의되지 않은 actionType입니다.");
            }
        }
    } catch (error) {
        console.error("API 요청 실패: ", error);
        throw error;
    }
}