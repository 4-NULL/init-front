import React from 'react';
import { useParams } from 'react-router-dom';

export const LessonDetailView = () => {
    const { seq } = useParams(); // URL에서 seq 가져오기
    console.log("Detail seq : "+seq);

    return (
        <div>
            <h1>레슨 상세 정보</h1>
            {/* <LessonDetail lessonSeq={seq} /> */}
        </div>
    );
};


