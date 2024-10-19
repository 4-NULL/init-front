
import { useLoaderData } from 'react-router-dom'; // useNavigate 추가

import { LessonList } from './LessonList';


export function CurriculumDetailPage() {

    const curriculumInfo = useLoaderData()

    return (
        <div>

            <div>
                해당 커리큘럼의 상세정보 seq: {curriculumInfo.seq}
            </div>
            {/* 그 커리큘럼에 속한 레슨 리스트 */}
            <LessonList curriculumSeq={curriculumInfo.seq} />
        </div>
    )

}