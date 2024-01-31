import {ButtonProps} from "../utils/interfaces.tsx";

function Button ({onClick, className, children}: ButtonProps) {

    return <button onClick={onClick} className={className}>
        {children}
    </button>
}

export default Button