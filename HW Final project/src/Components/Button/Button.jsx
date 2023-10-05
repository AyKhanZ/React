

function Button({clickHandler,children,class_Name}){
    return(
        <button className={class_Name} onClick={clickHandler}>{children}</button>
    )
}
export default Button;