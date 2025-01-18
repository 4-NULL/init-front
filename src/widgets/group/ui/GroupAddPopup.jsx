export const GroupAddPopup = ({ handleClick }) => {
  return (
    <div className="bg-black bg-opacity-30 flex justify-center items-center w-full h-screen fixed left-0 top-0">
      <div className="flex flex-col gap-2 bg-white  shadow-lg text-center">
        <div className="flex justify-between border-b-2 border-slate-200 p-5">
          <h1>그룹 생성</h1>
          <span className="float-right cursor-pointer" onClick={handleClick}>
            X
          </span>
        </div>
        <div className="flex flex-col gap-2 p-5 ">
          <input
            type="text"
            placeholder="그룹명"
            className="border-2 border-slate-200 p-2"
          />
          <div className="flex gap-2">
            <button className="flex-1 btn btn-primary">만들기</button>
            <button className="flex-1 btn btn-secondary" onClick={handleClick}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
