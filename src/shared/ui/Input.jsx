import PropTypes from "prop-types"

export function Input({
    type = "text",
    id,
    name,
    label,
    minLen = "",
    maxLen = "",
    placeholder = "",
    value = null,
    onChange = function() {},
    required = false
}) {
    return (
        <div className="mb-6">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                minLength={minLen}
                maxLength={maxLen}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    minLen: PropTypes.string,
    maxLen: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool
}