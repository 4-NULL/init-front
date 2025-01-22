import { Link } from "react-router-dom";
import { Button } from "@shared/ui";
import { deleteAction } from '@pages/curriculum-detail';

export function CurriculumItem({ item, filterCurriculums, setFilteredCurriculums }) {
    const { seq, title, description } = item; // 커리큘럼의 seq, title, description을 구조 분해 할당

    // 커리큘럼 삭제 핸들러
    const handleCurriculumDelete = (seq, e) => {
        e.preventDefault(); // 기존 이벤트 동작 막음

        if (confirm("정말로 삭제하시겠습니까?")) {
            deleteAction(filterCurriculums, setFilteredCurriculums, seq);
        }
    }

    return (
        <div className="inline-block m-3 px-7 w-56 h-56">
            <Link
                to={`/curriculum/${seq}`}
                className="flex flex-col w-56 h-56 rounded-xl m-3 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 cursor-pointer hover:bg-indigo-200"
            >
                <div className="space-x-2 flex justify-end px-1 pb-3">
                    <Link
                        to={`/curriculum/${seq}/edit`}
                        className="px-2 text-black rounded-lg hover:bg-green-500 hover:text-white"
                        >+</Link>
                    <Button
                        onClick={(e) => { handleCurriculumDelete(seq, e) }}
                        className="px-2 text-black rounded-lg hover:bg-red-500 hover:text-white"
                        label="×"
                        />
                </div>
                <h2 className="bg-slate-300 rounded-t-xl p-1 text-ellipsis overflow-hidden text-center">{title}</h2>
                <p className="bg-slate-100 pb-20 rounded-b-xl p-1 text-ellipsis overflow-hidden">{description}</p>
            </Link>
        </div>
    );
}