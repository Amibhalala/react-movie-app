import {ReactNode} from "react";
interface CardProps{
    children:ReactNode
}
export function Card({children}:CardProps) {
    return(
        <div>
            <div className="card">
                {children}
            </div>
        </div>
    )
}