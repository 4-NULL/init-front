

import { GET } from "@shared/api"

export const loader = async () => {
    const res = await GET("/groups")

    return res.data
}