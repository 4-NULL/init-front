
import { Link, useLoaderData } from 'react-router-dom'; // useNavigate 추가
import { LessonList } from '@widgets/lesson';


export function CurriculumDetailPage() {

    const { seq } = useLoaderData()

    return (
        <div className="bg-gray-50 flex justify-center min-h-screen">
            <div className='mt-6'>
                <div><strong>[{ seq }]</strong>의 커리큘럼</div>
                <Link
                    to={`/lesson/create/${seq}`}
                    className="flex px-3 py-2 mt-3 mb-3 text-black border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
                >수업 등록</Link>
                {/* 그 커리큘럼에 속한 레슨 리스트 */}
                <LessonList curriculumSeq={seq} />
            </div>
        </div>
    )
}