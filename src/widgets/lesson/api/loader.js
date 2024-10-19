import { GET } from "@shared/api"

export const loader = async (curriculumSeq) => {
    const res = await GET(`/lesson?curriculum-seq=${curriculumSeq}`)

    return res
}