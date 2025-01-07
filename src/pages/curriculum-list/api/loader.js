import { GET } from "@shared/api"
import { throwError } from "@shared/utils/customError";

export const loader = async ({ params }) => {
    const { seq } = params;
    try {
        let res;

        if (seq) {
            res = await GET(`/curriculums/${seq}`);
        } else {
            res = await GET("/curriculums");
        }

        if (res.success) {
            return res.data;
        } else {
            throwError(res.code, res.message);
        }

    } catch (error) {
        throw new Response(JSON.stringify({ message: error.message }), {
            status: error.code || 500,
            statusText: 'Failed to load curriculums'
        });
    }
}