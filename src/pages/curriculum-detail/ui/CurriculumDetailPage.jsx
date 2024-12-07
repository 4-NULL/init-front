
import { useLoaderData } from 'react-router-dom'; // useNavigate 추가
import { LessonList } from '@widgets/lesson';


export function CurriculumDetailPage() {

    const curriculumInfo = useLoaderData()

    return (
        <div className="bg-gray-50 flex justify-center min-h-screen">
            <div className='mt-6'>
                <div>해당 커리큘럼의 상세정보 seq: {curriculumInfo.id}</div>
                {/* 그 커리큘럼에 속한 레슨 리스트 */}
                <LessonList curriculumSeq={curriculumInfo.id} />
                
            </div>
        </div>
    )
}