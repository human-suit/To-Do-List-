import style from "./style.module.css"
import Logo from "../../components/Logo/Logo"
import Nav from '../../components/Nav/Nav'
import NavIcon from "../NavIcon/Nav"

const Header = () => {

    return (
      <>
        <div className={style.container}>
          <Logo/>
          <NavIcon/>
          <Nav/>
        </div>
      </>
    )
}
  
  export default Header