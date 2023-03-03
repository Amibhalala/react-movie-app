import React from "react"
interface ButtonProps{
    onClick?:()=>void,
    children:string,
    className?:string,
    style?:string
}
export function Button({onClick=()=>{},children,className,style="primary"}:ButtonProps) {
    const onClickHandler = (event:React.MouseEvent<HTMLElement>) =>{
        event.preventDefault();
        onClick();
    }
    return(
       <button className={className} onClick={onClickHandler}>
        {children}
       </button>
    )
}