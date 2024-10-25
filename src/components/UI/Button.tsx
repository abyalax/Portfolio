
interface ButtonProps {
    children : React.ReactNode
    className? : string
    onclick : () => void
}

const Button = ({ children, className, onclick }: ButtonProps) => {

    return (
        <button onClick={onclick} className={`px-11 py-3 rounded-md ${className}`} >{children}</button>
    )
};

export default Button;