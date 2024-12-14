import PropTypes from "prop-types"
export function Button({ label, className = "", onClick }) {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}