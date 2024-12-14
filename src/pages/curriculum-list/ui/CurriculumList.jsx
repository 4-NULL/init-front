
import { CurriculumItem } from '@entities/curriculums';
import { Link, useLoaderData } from 'react-router-dom';
import { Search } from '@shared/ui';
import { useEffect, useState } from 'react';

export function CurriculumList() {
    const curriculums = useLoaderData();
    const [filterCurriculums, setFilteredCurriculums] = useState(curriculums); // 필터링한 데이터
    const [searchKeyword, setSearchKeyword] = useState(""); // 수업 검색

    // 검색어 변경될 때마다 필터링
    useEffect(() => {
        // 커리큘럼 제목과 일치하는 것만 노출
        setFilteredCurriculums(
            curriculums.filter((item) =>
                item.title?.toLowerCase().includes(searchKeyword.toLowerCase())
            )
        );
    }, [searchKeyword, curriculums]);

    return (
        <div className="mt-6">
            <div className='mt-6'>

                {/* 검색버튼 */}
                <Search handleInputOnChange={(e) => { setSearchKeyword(e.target.value); }} />

                <Link
                    to="/curriculum/create"
                    className="flex justify-center p-3 m-3 text-black border border-blue-300 rounded-lg hover:bg-blue-500 hover:text-white"
                >커리큘럼 등록
                </Link>
                {/* <h1 className="underline border-2 text-center">커리큘럼 리스트</h1> */}
                {
                    filterCurriculums.length > 0 ?
                    (
                        <div>
                            {
                                filterCurriculums.map((curriculum) => (
                                    <CurriculumItem key={curriculum.seq} item={curriculum} />
                                ))
                            }
                        </div>

                    ) : (
                        <div>커리큘럼을 등록해주세요</div>
                    )
                }
            </div>
        </div>
    );
}

export default CurriculumList;
