
import { Link, useLoaderData } from 'react-router-dom'; // useNavigate 추가
import { LessonList } from '@widgets/lesson';
import { Search } from '@shared/ui';
import { useState } from 'react';


export function CurriculumDetailPage() {
    const { seq } = useLoaderData(); // 커리큘럼의 번호 (현재 수업 기반)
    const [searchKeyword, setSearchKeyword] = useState(""); // 수업 검색
    let timeout;
   
    return (
        <div className="bg-gray-50 flex justify-center min-h-screen">
            <div className='mt-6'>
                <div><strong>[{seq}]</strong>의 커리큘럼</div>

                <Search
                    inputId="c-search"
                    inputName="c-search"
                    inputLabel="Search"
                    handleInputOnChange={(e) => {
                        console.log("검색중...");
                        clearTimeout(timeout);
                        timeout = setTimeout(() => {
                            setSearchKeyword(e.target.value); // 검색 데이터 업데이트
                        }, 1000); // 실시간 서버 통신하면 과부하? 올거 같아서 타이머 추가함
                    }}
                />
                <Link
                    to={`/lesson/${seq}/create`}
                    className="flex px-3 py-2 mt-3 mb-3 text-black border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
                >수업 등록</Link>

                {/* 그 커리큘럼에 속한 레슨 리스트 */}
                <LessonList
                    curriculumSeq={seq}
                    keyword={searchKeyword}
                />
            </div>
        </div>
    )
}