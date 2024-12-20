import { GET } from "@shared/api"

export const loader = async ({ params }) => {
    const { seq } = params;
    try {
        let res;

        if (seq) {
            res = await GET(`/curriculums/${seq}`);
        } else {
            res = await GET("/curriculums");
        }

        if (!res) {
            throw new Error('No data received from server');
        }
        return res.data;
    } catch (error) {
        throw new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            statusText: 'Failed to load curriculums'
        });
    }
}