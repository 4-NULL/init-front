import { GroupList } from "@widgets/group";

import { useLoaderData } from "react-router-dom";

import { useUser } from "@shared/context";

export function HomePage() {
  const groups = useLoaderData();
  const { user } = useUser();

  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        {user ? <GroupList showGroupAddBtn groups={groups} /> : <>logout</>}
      </div>
    </div>
  );
}
