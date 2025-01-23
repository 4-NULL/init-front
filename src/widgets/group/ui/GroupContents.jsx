import PropTypes from "prop-types"

export function GroupContents({ title }) {
    return (
        <section className="flex px-8 py-12 rounded-2xl border-black border-2 cursor-pointer hover:bg-slate-50">
            <div className="font-bold text-lg">{title}</div>
        </section>
    )
}

GroupContents.prototype = {
    title: PropTypes.string

}