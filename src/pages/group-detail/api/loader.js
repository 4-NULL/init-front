import { GET } from "@shared/api";

export const loader = async ({ params }) => {
  const res = await GET(`/groups/${params.seq}`);

  return res.data;
};
