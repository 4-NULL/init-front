import { GET } from "@shared/api"

export const loader = async () => {
    try {
        const res = await GET("/curriculums");
        if (!res) {
            throw new Error('No data received from server');
        }
        return res;
    } catch (error) {
        throw new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            statusText: 'Failed to load curriculums'
        });
    }
}