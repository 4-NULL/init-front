import { useState } from "react";

import { GroupItem } from "@entities/group";
import { GroupAddPopup } from "./GroupAddPopup";
export function GroupList({ showGroupAddBtn = false, groups = [] }) {
  const [showGroupPopup, setShowGroupPopup] = useState(false);

  const toggleGroupAddPopup = () => {
    setShowGroupPopup(!showGroupPopup);
  };

  return (
    <div>
      {showGroupPopup && <GroupAddPopup handleClose={toggleGroupAddPopup} />}
      <div className="flex justify-between">
        <h1>내 그룹 리스트</h1>
        {showGroupAddBtn && (
          <div
            className="flex gap-2 p-2 btn btn-primary"
            onClick={toggleGroupAddPopup}
          >
            그룹 생성
          </div>
        )}
      </div>
      <div className="flex gap-2 flex-wrap">
        {groups.map((item) => (
          <GroupItem key={item.seq} data={item} />
        ))}
      </div>
    </div>
  );
}
