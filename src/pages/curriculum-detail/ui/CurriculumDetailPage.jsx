
import { Link, useLoaderData } from 'react-router-dom'; // useNavigate 추가
import { LessonList } from '@widgets/lesson';
import { Search } from '@shared/ui';
import { useState } from 'react';


export function CurriculumDetailPage() {
    const lessons = useLoaderData(); // 커리큘럼의 번호 (현재 수업 기반)
    const [searchKeyword, setSearchKeyword] = useState(""); // 수업 검색

    const seq = lessons.seq;

    return (
        <div className="bg-gray-50 flex justify-center min-h-screen">
            <div className='mt-6'>
                <div className='mb-6'><strong>[{seq}]</strong>의 커리큘럼</div>
                <div className="flex items-center space-x-4 mb-6 text-sm font-medium">
                    <Search handleInputOnChange={(e) => { setSearchKeyword(e.target.value); }} />
                    <Link
                        to={`/lesson/${seq}/create`}
                        className="flex justify-center p-3 px-6 font-semibold text-black border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
                    >수업 등록</Link>
                </div>

                {/* 그 커리큘럼에 속한 레슨 리스트 */}
                <LessonList
                    item={lessons}
                    keyword={searchKeyword}
                />
            </div>
        </div>
    )
}