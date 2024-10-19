import { GET } from "@shared/api"

export const loader = async ({ params }) => {
    const res = await GET(`/lesson/${params.seq}`)

    return res
}