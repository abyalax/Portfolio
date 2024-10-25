const Button = ({ children, className }: { children: React.ReactNode, className: string }) => {

    return (
        <button className={`px-11 py-3 rounded-md ${className}`} >{children}</button>
    )
};

export default Button;