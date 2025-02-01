import PropTypes from "prop-types";

import { ProgressBar } from "@shared/ui";
import { useState } from "react";
import { GroupAddPopup } from "./GroupAddPopup";
import { GroupContents } from "./GroupContents";

export function GroupList({ showGroupAddBtn = false, groups = [] }) {
  const [showGroupPopup, setShowGroupPopup] = useState(false);

  const toggleGroupAddPopup = () => {
    setShowGroupPopup(!showGroupPopup);
  };


  return (
    <>
      { showGroupPopup && <GroupAddPopup handleClose={toggleGroupAddPopup} /> }
      <div className="flex justify-between">
        <h1 className="w-max font-bold p-2 border border-black rounded-lg">My Group List</h1>
        { showGroupAddBtn && (<div className="w-24 font-bold text-center p-2 border border-black rounded-lg" onClick={toggleGroupAddPopup}>Add</div>) }
      </div>

      {groups 
        ? <GroupContents contents={groups} /> 
        : <span>아직 가입한 그룹이 없습니다.</span>
      }

      <article className="mt-5">
        <section className="flex justify-start w-max items-center p-2 border border-black rounded-lg">
          <h1 className="font-bold">Curriculums that : learning</h1>
        </section>
        <ProgressBar title="1. React course" description="Group 2" progress={75} />
        <ProgressBar title="Communication" description="Group 1" progress={50} />
      </article>

    </>
  );
}


GroupList.propTypes = {
  showGroupAddBtn: PropTypes.bool,
  groups: PropTypes.array
};