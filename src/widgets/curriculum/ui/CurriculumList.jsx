import { CurriculumItem } from '@widgets/curriculum';
import { useEffect, useState } from 'react';
import fetchCurriculums from '../api/fetchCurriculums'; // API 호출 함수 import
// 개별 커리큘럼 항목을 표시하는 컴포넌트


export function CurriculumList() {
    const [curriculums, setCurriculums] = useState([]);

    useEffect(() => setCurriculums(fetchCurriculums()), []); 

    if (!Array.isArray(curriculums)) {
        return <div>데이터 형식 오류: 커리큘럼 데이터가 배열이 아닙니다.</div>;
    }

    return (
        <div>
            <h1>커리큘럼 리스트</h1>
            <div>
                {curriculums.map((curriculum) => (
                    <CurriculumItem key={curriculum.seq} item={curriculum} />
                ))}
            </div>
        </div>
    );
}

export default CurriculumList;
