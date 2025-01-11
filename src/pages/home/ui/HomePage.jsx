import { useEffect } from "react";

import { GroupList } from "@widgets/group";

import { useLoaderData, useOutletContext } from "react-router-dom";

export function HomePage() {
  const savedUser = localStorage.getItem("user");
  const isLoggedIn = savedUser !== null; // 로그인 여부 확인
  const groups = useLoaderData();

  const { user } = useOutletContext();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        {user ? <GroupList /> : <>logout</>}
      </div>
    </div>
  );
}
