import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '@shared/api';

export function LessonList({ item, keyword = "" }) {
    const { seq, title, description } = item;
    const [lessons, setLessons] = useState([]); // 전체 데이터
    const [filterLessons, setFilteredLessons] = useState([]); // 필터린한 데이터 저장

    const fetchLessons = async () => {
        const res = await GET(`/lessons/search?curriculum-seq=${seq}`)
        setLessons(res.data);
    }

    // 커리큘럼 코드가 변경할 때 마다 실행
    useEffect(() => {
        fetchLessons();
    }, [seq]);

    // 검색어 변경될 때마다 필터링
    useEffect(() => {
        if (keyword.trim() === "") {
            setFilteredLessons(lessons);
        } else {
            setFilteredLessons(
                lessons.filter((data) =>
                    data.title?.toLowerCase().includes(keyword.toLowerCase())
                )
            )
        }
    }, [keyword, lessons]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {
                filterLessons.length > 0 ?
                    filterLessons.map(lessonItem => (
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
