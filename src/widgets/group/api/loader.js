// src/widgets/group/api/loader.js
import { GET } from "@shared/api";
import { withUser } from "@shared/utils";

const groupLoader = async ({ user }) => {
  // debugger;
  const res = await GET(`/groups?member-seq=${user.seq}`);
  return res.data;
};

export const loader = withUser(groupLoader);
