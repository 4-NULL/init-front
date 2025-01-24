import PropTypes from "prop-types"

export function Textarea({
    id,
    name,
    rows = 5,
    label,
    minLen = "",
    maxLen = "",
    placeholder = "",
    required = false,
    value,
    onChange
}) {
    return (
        <div className="flex justify-between items-center mb-4">
            { label && <label htmlFor={id} className="w-28 block text-sm font-medium text-gray-700">{label}</label> }
            <textarea
                id={id}
                name={name}
                rows={rows}
                className="w-full placeholder:text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                minLength={minLen}
                maxLength={maxLen}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

Textarea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.string,
    label: PropTypes.string,
    minLen: PropTypes.string,
    maxLen: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func
}