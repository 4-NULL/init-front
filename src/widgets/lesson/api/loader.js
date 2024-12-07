import { GET } from "@shared/api"

export const loader = async (curriculumSeq) => {
    const res = await GET(`/lessons?curriculum-seq=${curriculumSeq}`)

    return res.data
}