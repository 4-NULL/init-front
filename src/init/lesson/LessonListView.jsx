import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가
import { LessonList } from './LessonList';

const LessonListView = () => {
    const { seq } = useParams(); // URL에서 seq 가져오기
    const curriculumSeq = parseInt(seq); // 정수로 변환
    const navigate = useNavigate();

    const handleLessonClick = (lessonSeq) => {
        navigate(`/lesson/${lessonSeq}`); // 레슨 상세 페이지로 이동
    };

    return (
        <div>
            <h1>레슨 목록</h1>
            <LessonList curriculumSeq={curriculumSeq} onLessonClick={handleLessonClick} />
        </div>
    );
};

export default LessonListView;
