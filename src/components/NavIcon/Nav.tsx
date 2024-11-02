import style from "./style.module.css";
// import useDeviseType from "../../hooks/useDeviceType";
import { useState } from "react";
import RightMenu from "../RightMenu/Rightmenu";
const NavIcon = () => {
  //popup
  const [isModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  // const windowSize = useDeviseType();

  return (
    <>
      <nav id="menu" className={style.container}>
        <li>
          <a href="#" onClick={handleClick}>
            Menu
          </a>
        </li>
        <RightMenu isModal={isModal} onClick={() => setModal(false)} />
      </nav>
    </>
  );
};

export default NavIcon;
