

import { GET } from "@shared/api"

export const loader = async () => {
    const res = await GET("/curriculum")

    return res
}