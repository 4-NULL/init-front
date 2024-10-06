import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurriculumList } from '../connect/curriculum-api'; // API 호출 함수 import

// 개별 커리큘럼 항목을 표시하는 컴포넌트
const CurrItem = ({ item }) => {
    const { seq, title, description } = item; // 커리큘럼의 seq, title, description을 구조 분해 할당

    const navigate = useNavigate()

    return (
        <div
            key={seq}
            style={{
                display: 'inline-block',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                margin: '10px',
                cursor: 'pointer',
            }}
            // 커리큘럼 상세 페이지로 이동하는 함수 추가 (선택사항)
            onClick={() => {
                navigate(`/curriculum/${seq}`)
            }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export function CurriculumList() {
    const [curriculums, setCurriculums] = useState([]);

    useEffect(() => {
        // 비동기 함수 정의
        const fetchCurriculums = async () => {
            try {
                const data = await getCurriculumList(); // 전체 커리큘럼 조회
                console.log("Fetched Data:", data);
                setCurriculums(data); // 데이터를 상태로 설정
            } catch (error) {
                console.error("Failed to fetch curriculums:", error);
            }
        };

        fetchCurriculums(); // 비동기 함수 호출
    }, []); // 빈 배열: 이 effect는 컴포넌트가 처음 마운트될 때만 실행

    if (!Array.isArray(curriculums)) {
        return <div>데이터 형식 오류: 커리큘럼 데이터가 배열이 아닙니다.</div>;
    }

    return (
        <div>
            <h1>커리큘럼 리스트</h1>
            <div>
                {curriculums.map((curriculum) => (
                    <CurrItem key={curriculum.seq} item={curriculum} />
                ))}
            </div>
        </div>
    );
}

export default CurriculumList;
