import { Link } from "react-router-dom";
import { Button } from "@shared/ui";
import { deleteAction } from '@pages/curriculum-detail';

export function CurriculumItem({ item, filterCurriculums, setFilteredCurriculums }) {
    const { seq, title, description } = item; // 커리큘럼의 seq, title, description을 구조 분해 할당

    // 커리큘럼 삭제 핸들러
    const handleCurriculumDelete = (seq) => {
        if (confirm("정말로 삭제하시겠습니까?")) {
            deleteAction(filterCurriculums, setFilteredCurriculums, seq);
        }
    }

    return (
        <>
            <div className="inline-block border border-fuchsia-400 m-3 px-5 py-5 w-72 h-72 ">
                <div className="flex justify-center space-x-2 items-center">
                    <Link
                        to={`/curriculum/${seq}/edit`}
                        className="flex px-3 py-2 text-black border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
                    >Edit</Link>
                    <Button
                        onClick={() => { handleCurriculumDelete(seq) }}
                        className="flex px-3 py-2 text-black border border-red-500 rounded-lg hover:bg-red-500 hover:text-white"
                        label="Del"
                    />
                </div>
                <div className="flex justify-center">
                    <Link
                        to={`/curriculum/${seq}`}
                        className="flex flex-col w-48 h-48 rounded-xl m-3 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 cursor-pointer hover:bg-indigo-200"
                    >
                        <h2 className="bg-fuchsia-300 rounded-xl p-1 text-center overflow-hidden text-ellipsis">{title}</h2>
                        <p className="overflow-hidden text-ellipsis">{description}</p>
                    </Link>
                </div>
            </div>
        </>
    );
};