import PropTypes from "prop-types"
export function Button({ label, className = "" }) {
    return (
        <button className={className}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
}