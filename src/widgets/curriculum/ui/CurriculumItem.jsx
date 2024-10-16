import { useNavigate } from "react-router-dom";

export function CurriculumItem({ item }) {
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