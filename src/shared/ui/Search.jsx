import PropTypes from "prop-types"

export function Search({
    inputType = "search",
    inputId,
    inputName,
    inputLabel,
    inputMinLen = "",
    inputMaxLen = "",
    inputRequired = false,
    inputValue,
    handleInputOnChange,
}) {
    return (
        <div className="relative mb-6 mt-6 flex gap-2">
            <div className="relative">
                <input
                    type={inputType}
                    id={inputId}
                    name={inputName}
                    className="peer pt-6 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    minLength={inputMinLen}
                    maxLength={inputMaxLen}
                    required={inputRequired}
                    value={inputValue}
                    onChange={handleInputOnChange}
                />
                <label
                    htmlFor={inputId}
                    className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out`}
                >{inputLabel}</label>
            </div>
        </div>
    )
}

Search.propTypes = {
    inputType: PropTypes.string,
    inputId: PropTypes.string,
    inputName: PropTypes.string,
    inputLabel: PropTypes.string,
    inputMinLen: PropTypes.string,
    inputMaxLen: PropTypes.string,
    inputRequired: PropTypes.bool,
    inputValue: PropTypes.string,
    handleInputOnChange: PropTypes.func,
}