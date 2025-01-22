
import { CurriculumItem } from '@entities/curriculums';
import { Link, useLoaderData } from 'react-router-dom';
import { Search } from '@shared/ui';
import { useEffect, useState } from 'react';

export function CurriculumList() {
    const curriculums = useLoaderData();
    const [searchKeyword, setSearchKeyword] = useState(""); // 커리큘럼 검색
    const [filterCurriculums, setFilteredCurriculums] = useState(curriculums); // 필터링한 데이터

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
        <div className="p-5">
            <div className="flex items-center mb-5">
                <Search handleInputOnChange={(e) => { setSearchKeyword(e.target.value); }} />
                <Link
                    to="/curriculum/create"
                    className="flex justify-center text-sm p-3 font-semibold text-black border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
                >커리큘럼 등록
                </Link>
            </div>
            {
                filterCurriculums.length > 0 ?
                (
                    <div>
                            {
                            filterCurriculums.map((curriculum) => (
                                <CurriculumItem
                                    key={curriculum.seq}
                                    item={curriculum}
                                    filterCurriculums={filterCurriculums}
                                    setFilteredCurriculums={setFilteredCurriculums}
                                />
                            ))
                        }
                    </div>

                ) : (
                    <div>커리큘럼을 등록해주세요.</div>
                )
            }
        </div>
    );
}

export default CurriculumList;
