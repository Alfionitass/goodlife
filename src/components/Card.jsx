export const CardContent = ({ children, className, key }) => {
    return (
        <div key={key} className={`relative flex flex-col bg-clip-border rounded-xl shadow-md w-full ${className}`}>
            {children}
        </div>
    )
}

export const CardHeader = ({ children, className }) => {
    return (
        <div className={`relative justify-items-center mx-6 overflow-hidden ${className}`}>
            {children}
        </div>
    )
}

export const CardBody = ({ children, className }) => {
    return (
        <div className={`p-6 ${className}`}>
            {children}
        </div>
    )
}

export const CardFooter = ({ children, className }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}