import PropTypes from 'prop-types';

export function GroupContents({ contents = [] }) {
    return (
        <article className="flex gap-4 mt-5">
            {
                contents ? (
                    contents.map((list) => {
                        return (
                            <section key={list.seq} className="flex px-8 py-12 rounded-2xl border-black border-2 cursor-pointer hover:bg-slate-50">
                                <div className="font-bold text-lg">{list.title}</div>
                            </section>
                        )
                    })
                ) : (
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