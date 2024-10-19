import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DUMMY_LESSON_LIST = [
    [
        {
            seq: 1,
            title: "React 커리큘럼 기본편"
        }, 
        {
            seq: 2,
            title: "React 커리큘럼 심화편"
        }
    ], // curriculum1 - lesson
    [
        {
            seq: 3,
            title: "JavaScript 커리큘럼 기본편"
        }, 
        {
            seq: 4,
            title: "JavaScript 커리큘럼 심화편"
        }
    ], 
    [
        {
            seq: 5,
            title: "Node.js와 Express 커리큘럼 기본편"
        }, 
        {
            seq: 6,
            title: "Node.js와 Express 커리큘럼 심화편"
        }
    ]
];

LessonList.propTypes = {
    curriculumSeq: PropTypes.number.isRequred
};

export function LessonList({ curriculumSeq }) {
    const lessons = DUMMY_LESSON_LIST[curriculumSeq - 1] || [];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                lessons.map(lessonItem => (
                    <Link
                        to={`/lesson/${lessonItem.seq}`} 
                        key={lessonItem.seq} 
                        id={`lesson-${lessonItem.seq}`} 
                        style={{ 
                            border: '1px solid #ccc', 
                            borderRadius: '8px', 
                            padding: '10px', 
                            width: '200px', 
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                            cursor: 'pointer' 
                        }}
                        
                    >
                        <h3>{lessonItem.title}</h3>
                    </Link>
                ))
            }
        </div>
    );
}
