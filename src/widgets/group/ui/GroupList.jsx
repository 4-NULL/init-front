import { useEffect, useState } from "react";

import { GroupItem } from "@entities/group";
import { GroupAddPopup } from "./GroupAddPopup";
import { GroupContents } from "./GroupContents";
import { CurriculumProgressBar } from '@widgets/curriculum';

export function GroupList({ showGroupAddBtn = false, groups = [] }) {
  const [showGroupPopup, setShowGroupPopup] = useState(false);

  const toggleGroupAddPopup = () => {
    setShowGroupPopup(!showGroupPopup);
  };

  return (
    <div>
      { showGroupPopup && <GroupAddPopup handleClose={toggleGroupAddPopup} /> }
      <div className="flex justify-between">
        <h1 className="w-56 font-bold p-2 border border-black rounded-lg">My Group List</h1>
        { showGroupAddBtn && (<div className="w-24 font-bold text-center p-2 border border-black rounded-lg" onClick={toggleGroupAddPopup}>Add</div>) }
      </div>
      
      {/* Home 예시 */}
      <article className="flex gap-4 mt-5">
        <GroupContents title="Group 1"/>
        <GroupContents title="Group 2"/>
        <GroupContents title="Group 3"/>
      </article>
      <article className="flex flex-col mt-5">
        <section className="flex justify-start w-max items-center p-2 border border-black rounded-lg">
          <h1 className="font-bold">Curriculums that : learning</h1>
        </section>
          <CurriculumProgressBar title="1. React course" description="Group 2" progress={75} />
          <CurriculumProgressBar title="Communication" description="Group 1" progress={50} />
      </article>

      <div className="flex gap-2 flex-wrap">
        {groups ? (
          groups.map((item) => <GroupItem key={item.seq} data={item} />)
        ) : (
          <span>아직 가입한 그룹이 없습니다.</span>
        )}
      </div>
    </div>
  );
}
