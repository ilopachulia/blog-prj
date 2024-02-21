import {ButtonProps} from "../utils/interfaces.tsx";

function Button({onClick, type, children}: ButtonProps) {

    if (type === "primary") {
        return (
            <button onClick={onClick}
                    className="bg-orange-200 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-300 transition-colors duration-500">
                {children}
            </button>
        )
    }
    if (type === "secondary") {
        return (
            <button onClick={onClick}
                    className="dark:bg-gray-300 dark:hover:bg-gray-500 dark:border-none hover:bg-orange-200 border-2 border-orange-300 px-4 py-1 rounded-md transition-colors duration-500">
                {children}
            </button>
        )
    }

    if (type === "submit") {
        return (
            <button onClick={onClick}
                    type="submit"
                    className="bg-orange-200 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-300 transition-colors duration-500">
                {children}
            </button>
        )
    }

    return (
        <button onClick={onClick}>
         {children}
        </button>
    )
}

export default Button