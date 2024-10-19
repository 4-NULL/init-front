import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { loader } from '../api/loader';
// const DUMMY_LESSON_LIST = [
//     [
//         {
//             seq: 1,
//             title: "React 커리큘럼 기본편"
//         }, 
//         {
//             seq: 2,
//             title: "React 커리큘럼 심화편"
//         }
//     ], // curriculum1 - lesson
//     [
//         {
//             seq: 3,
//             title: "JavaScript 커리큘럼 기본편"
//         }, 
//         {
//             seq: 4,
//             title: "JavaScript 커리큘럼 심화편"
//         }
//     ], 
//     [
//         {
//             seq: 5,
//             title: "Node.js와 Express 커리큘럼 기본편"
//         }, 
//         {
//             seq: 6,
//             title: "Node.js와 Express 커리큘럼 심화편"
//         }
//     ]
// ];


export function LessonList() {
    const params = useParams()

    const [lessons, setLesson] = useState([])
    useEffect(() => {
        
        const fetchLessons = async () =>  {
            try {
                const fetchedLessons = await loader(params.seq)
                setLesson(fetchedLessons)
            } catch(err) {
                console.error(err)
            }
        }
        fetchLessons()
    }, [params.seq])

    useEffect(() => console.log(lessons), [lessons])
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                lessons.length > 0 
                    ? lessons.map(lessonItem => (
                        <Link
                            id={`lesson-${lessonItem.seq}`} 
                            to={`/lesson/${lessonItem.seq}`} 
                            key={lessonItem.seq} 
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
                    : <div> 교육 정보가 없습니다. </div>
            }
        </div>
    );
}
