import PropTypes from 'prop-types';

export function GroupContents({ contents = [] }) {
    return (
        <article className="flex flex-wrap gap-6 mt-5">
            {
                contents ? (
                    contents.map((list) => {

                        return (
                            <section key={list.seq} className="p-10 rounded-2xl border-black border cursor-pointer hover:bg-slate-100">
                                <p className="font-bold text-center text-lg">{list.name}</p>
                                <div className="">
                                    <p className="w-32 text-xs font-semibold text-yellow-700 text-ellipsis overflow-hidden">{list.description}</p>
                                </div>
                            </section>
                        )
                    })
                ) : (
                    // TODO: 그룹 추천 컴포넌트 OR 그룹 페이지로 이동 버튼 추가
                    <section className="flex px-8 py-12 rounded-2xl border-black border-2 cursor-pointer hover:bg-slate-50">
                        <div className="font-bold text-lg">내용이 없습니다.</div>
                    </section>
                )
            }
        </article>
    )
}

GroupContents.propTypes = {
    contents: PropTypes.array
};