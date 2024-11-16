import PropTypes from "prop-types"

Button.protoTypes = {
    label: PropTypes.string
}

export function Button({ label = "button" }) {
    <button>
        {label}
    </button>
}