import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate 추가
import { LessonList } from '../widgets/LessonList';
export default function CurriculumDetailPage() {
    const { seq } = useParams(); // URL에서 seq 가져오기
    const curriculumSeq = parseInt(seq); // 정수로 변환
    const navigate = useNavigate();

    const handleLessonClick = (lessonSeq) => navigate(`/lesson/${lessonSeq}`); // 레슨 상세 페이지로 이동

    return (
        <div>

            <div>
                해당 커리큘럼의 상세정보
            </div>
            {/* 그 커리큘럼에 속한 레슨 리스트 */}
            <LessonList curriculumSeq={seq} onLessonClick={handleLessonClick} />
        </div>
    )

}