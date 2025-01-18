import { useEffect } from "react";

import { GroupList } from "@widgets/group";

import { useLoaderData, useOutletContext } from "react-router-dom";

export function HomePage() {
  const groups = useLoaderData();

  const { user } = useOutletContext();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        {user ? <GroupList showGroupAddBtn groups={groups} /> : <>logout</>}
      </div>
    </div>
  );
}
