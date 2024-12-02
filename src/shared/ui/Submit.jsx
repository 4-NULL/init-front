import PropTypes from "prop-types"

export function Submit({ type = "submit", label}) {
    return (
        <div className="mt-8">
            <button
                type={type}
                className="w-full bg-indigo-700 text-white p-2 rounded-lg hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                {label}
            </button>
        </div>
    )
}

Submit.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
}