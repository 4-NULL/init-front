import { Link } from "react-router-dom";

export function CurriculumItem({ item }) {
    const { seq, title, description } = item; // 커리큘럼의 seq, title, description을 구조 분해 할당


    return (
        <Link
            to={`/curriculum/${seq}`}
            key={seq}
            style={{
                display: 'inline-block',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                margin: '10px',
                cursor: 'pointer',
            }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    );
};