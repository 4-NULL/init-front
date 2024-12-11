import { Link, useLoaderData, useNavigate  } from "react-router-dom";
import { Button } from "@shared/ui";
import { deleteAction } from '@pages/lesson-detail';

export function LessonDetailPage () {
    const navigate  = useNavigate();
    const lessonInfo = useLoaderData();
    const { seq } = lessonInfo;
    
    if (!lessonInfo) {
        return <div>레슨을 찾을 수 없습니다.</div>;
    }

    // 수업 삭제 핸들러
    const handleLessonDelete = (seq) => {
        if (confirm("정말로 삭제하시겠습니까?")) {
            deleteAction(seq);
            navigate (-1); // 삭제 후 뒤로가기
        }
    }

    return (
        <div className="bg-gray-50 flex justify-center min-h-screen">
            <div className="flex space-x-2 items-center">
                <Link
                    to={`/lesson/${seq}/edit`}
                    className="flex px-3 py-2 text-black border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
                >Edit</Link>
                <Button
                    onClick={() => { handleLessonDelete(seq) }}
                    className="flex px-3 py-2 text-black border border-red-500 rounded-lg hover:bg-red-500 hover:text-white"
                    label="Del"
                />
            </div>
            <div className='mt-6'>
                <div><strong>[{lessonInfo.seq}]</strong>의 수업 상세정보</div>
                <div className="mt-6">
                    <h1 className="font-bold text-3xl text-red-400 underline mb-5">{lessonInfo.title}</h1>
                    <p className="text-xl">{lessonInfo.content}</p>
                </div>
            </div>
        </div>
    );
}