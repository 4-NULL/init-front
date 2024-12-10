import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '@shared/api';
export function LessonList({ curriculumSeq }) {

    const [lessons, setLessons] = useState([]);

    const fetchLessons = async () => {
        const res = await GET(`/lessons/search?curriculum-seq=${curriculumSeq}`)
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
                            className="border border-gray-300 rounded-lg p-2.5 w-48 shadow-sm cursor-pointer"
                            key={lessonItem.seq} 
                        >
                            <h3>{lessonItem.title}</h3>
                        </Link>
                    ))
                    : <div> 교육 정보가 없습니다. </div>
            }
        </div>
    );
}
