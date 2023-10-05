import "./Button.module.scss"

function Button({clickHandler,children}){
    return(
        <button onClick={clickHandler}>{children}</button>
    )
}
export default Button;