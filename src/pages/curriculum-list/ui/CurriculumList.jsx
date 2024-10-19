
import { CurriculumItem } from '@entities/curriculum';
import { useLoaderData } from 'react-router-dom';

export function CurriculumList() {
    const curriculums = useLoaderData();


    return (
        <div>
            <h1>커리큘럼 리스트</h1>

            { curriculums.length > 0
                ?
                <div>
                    {curriculums.map((curriculum) => (
                        <CurriculumItem key={curriculum.seq} item={curriculum} />
                    ))}
                </div>

                :
                <div>데이터 형식 오류: 커리큘럼 데이터가 배열이 아닙니다.</div>
            }
        </div>
    );
}

export default CurriculumList;
