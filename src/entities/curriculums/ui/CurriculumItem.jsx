import { Link } from "react-router-dom";
import { Button } from "@shared/ui";
import { deleteAction } from '@pages/curriculum-action';

export function CurriculumItem({ item }) {
    const { seq, title, description } = item; // 커리큘럼의 seq, title, description을 구조 분해 할당

    return (
        <>
            <div className="inline-block border border-fuchsia-400 m-3 p-3">
                <div className="flex space-x-2 items-center">
                    <Link
                        to={`/curriculum/edit/${seq}`}
                        className="flex px-3 py-2 text-black border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
                    >Edit</Link>
                    <Button
                        onClick={() => { deleteAction(seq) }}
                        className="flex px-3 py-2 text-black border border-red-500 rounded-lg hover:bg-red-500 hover:text-white"
                        label="Del"
                    />
                </div>
                <Link
                    to={`/curriculum/${seq}`}
                    className="inline-block border border-gray-300 rounded-xl m-3 p-3  focus:outline-none focus:ring-2 focus:ring-indigo-200 cursor-pointer hover:bg-indigo-200"
                >
                    <h2 className="bg-fuchsia-300 rounded-xl p-1">{title}</h2>
                    <p>{description}</p>
                </Link>
            </div>
        </>
    );
};