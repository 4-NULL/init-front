import React from 'react';
import { useParams } from 'react-router-dom';
import LessonDetail from './LessonDetail'; // LessonDetail 컴포넌트 임포트

const LessonDetailView = () => {
    const { seq } = useParams(); // URL에서 seq 가져오기
    console.log("Detail seq : "+seq);

    return (
        <div>
            <h1>레슨 상세 정보</h1>
            <LessonDetail lessonSeq={seq} />
        </div>
    );
};

export default LessonDetailView;
