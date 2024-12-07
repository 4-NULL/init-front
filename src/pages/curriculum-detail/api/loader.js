import { GET } from "@shared/api"

export const loader = async ({ params }) => {
    const res = await GET(`/curriculums/${params.seq}`)

    return res.data
}