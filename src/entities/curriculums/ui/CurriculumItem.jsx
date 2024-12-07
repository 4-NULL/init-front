import { Link } from "react-router-dom";

export function CurriculumItem({ item }) {
    const { id, title, description } = item; // 커리큘럼의 id, title, description을 구조 분해 할당


    return (
        <Link
            to={`/curriculum/${id}`}
            className="inline-block border border-gray-300 rounded-xl m-3 p-3  focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer hover:bg-indigo-300 hover:text-white"
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    );
};