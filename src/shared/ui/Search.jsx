import PropTypes from "prop-types"

export function Search({
    inputType = "search",
    inputLabel,
    inputMinLen = "",
    inputMaxLen = "",
    handleInputOnChange,
}) {
    return (
        <div className="relative mb-6 mt-6 flex gap-2">
            <div className="relative">
                <input
                    type={inputType}
                    className="peer pt-6 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    minLength={inputMinLen}
                    maxLength={inputMaxLen}
                    onChange={handleInputOnChange}
                />
                <label
                    className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out`}
                >{inputLabel}</label>
            </div>
        </div>
    )
}

Search.propTypes = {
    inputType: PropTypes.string,
    inputLabel: PropTypes.string,
    inputMinLen: PropTypes.string,
    inputMaxLen: PropTypes.string,
    handleInputOnChange: PropTypes.func,
}