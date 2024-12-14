import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '@shared/api';
export function LessonList({ curriculumSeq }) {

    const [lessons, setLessons] = useState([]);

    const fetchLessons = async () => {
        const res = await GET(`/lessons?curriculum-seq=${curriculumSeq}`)
        setLessons(res.data);
    }
    useEffect(() => { 
        fetchLessons()
    }, [])
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
