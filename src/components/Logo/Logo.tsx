import logo_img from "../../image/favicon.png"
import style from "./style.module.css"
const Logo = () =>{
    return(
    <>
        <div className={style.logo}>
            <a href="/"><img src={logo_img} alt="Logo" /></a>
        </div>
    </>
    )
}

export default Logo