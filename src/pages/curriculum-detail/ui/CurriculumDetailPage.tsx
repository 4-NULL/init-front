import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate 추가

import type { Curriculum } from '@shared/api';
import { LessonList } from '@widgets/lesson';

interface CurriculumProps {
    curriculum: Curriculum;
}

export function CurriculumDetailPage({curriculum}: CurriculumProps) {
    const { seq } = useParams(); // URL에서 seq 가져오기

    const navigate = useNavigate();

    const handleLessonClick = (lessonSeq) => navigate(`/lesson/${lessonSeq}`); // 레슨 상세 페이지로 이동

    return (
        <div>

            <div>
                해당 커리큘럼의 상세정보 seq: {}
            </div>
            {/* 그 커리큘럼에 속한 레슨 리스트 */}
            <LessonList curriculumSeq={seq} onLessonClick={handleLessonClick} />
        </div>
    )

}