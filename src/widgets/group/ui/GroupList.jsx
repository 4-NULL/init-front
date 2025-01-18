import { useState } from "react";

import { GroupItem } from "@entities/group";
import { GroupAddPopup } from "./GroupAddPopup";
const CONST_GROUP_LIST = [
  { name: "group1", seq: 1 },
  { name: "group2", seq: 2 },
  { name: "group3", seq: 3 },
];

export function GroupList({ isShowGroupAddBtn = false }) {
  const [showGroupPopup, setShowGroupPopup] = useState(false);

  const toggleGroupAddPopup = () => {
    setShowGroupPopup(!showGroupPopup);
  };

  return (
    <div>
      {showGroupPopup && <GroupAddPopup handleClick={toggleGroupAddPopup} />}
      <div className="flex justify-between">
        <h1>내 그룹 리스트</h1>
        <div
          className="flex gap-2 p-2 btn btn-primary"
          onClick={toggleGroupAddPopup}
        >
          그룹 생성
        </div>
      </div>
      <div className="flex gap-2">
        {CONST_GROUP_LIST.map((item) => (
          <GroupItem key={item.seq} data={item} />
        ))}
      </div>
    </div>
  );
}
