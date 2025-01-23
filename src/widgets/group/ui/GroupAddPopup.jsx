import { Form } from "react-router-dom";
import { Input } from "@shared/ui";

import { useUser } from "@shared/context";
import { useEffect } from "react";
export const GroupAddPopup = ({ handleClose }) => {
  const { user } = useUser();

  return (
    <div className="bg-black bg-opacity-30 flex justify-center items-center w-full h-screen fixed left-0 top-0">
      <div className="flex flex-col gap-2 bg-white  shadow-lg text-center rounded-2xl">
        <div className="flex justify-between border-b-2 border-slate-200 p-5">
          <h1>Group Add</h1>
          <span className="float-right cursor-pointer" onClick={handleClose}>
            X
          </span>
        </div>
        <Form className="flex flex-col p-5 " method="post">
          <input type="hidden" name="userSeq" value={String(user.seq)} />
          <div className="flex items-center text-center gap-5">
            <Input
              type="text"
              name="name"
              placeholder="Group Name"
              className="border-2 border-slate-200"
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="flex-1 btn btn-primary">confirm</button>
            <button className="flex-1 btn btn-secondary" onClick={handleClose}>cancel</button>
          </div>
        </Form>
      </div>
    </div>
  );
};
