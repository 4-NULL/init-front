import { GET } from "@shared/api"

export const loader = async ({ params }) => {
    const res = await GET(`/curriculum/${params.seq}`)

    return res
}