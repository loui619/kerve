import React from "react";
import './style.css'
let headers = [
    'Politics','Business','Opinion','Health','Entertainment','Style','Travel','Sports','Video'
]
const Header = ()=>{
    const createHeaders = ()=>{
        return headers?.map(item=>{
            return <li className="nav-list">{item}</li>
        })
    }
    return(
        <nav>
         <ul className="nav-container">
            {createHeaders()}
         </ul>
        </nav>
    )
}
export default Header