import { useContext, useEffect, useState } from "react"
import {ThemeContex} from "../../App"
import style from "./style.module.css"

const Nav = () =>{

    const current = useContext(ThemeContex)
    const [dark, setDark] = useState("light")
    console.log(current)

    
    const handleClick = ()=>{
        if(current?.value.theme==="light"){
            current.value.setTheme("dark")
            setDark("dark")
        } else{
            current!.value.setTheme("light")
            setDark("light")
        }
    }
    

    return(
        <>
        <div className={dark == "light" ? style.statelight : style.statedark}>
            <nav className={style.container}>
                <a>Jobs</a>
                <a>Loks</a>
                <a>Love</a>
                <button
                className={dark == "light" ? style.statedark : style.statelight}
                onClick={handleClick}
                >
                    {current?.value.theme}
                </button>
            </nav>
        </div>
        </>
    )
}

export default Nav