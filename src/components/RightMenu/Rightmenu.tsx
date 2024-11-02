import React, { FC, useContext, useState } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";
import { Ar, TextModal } from "../../types/types";
import { ThemeContex } from "../../App";
type Props = {
  isModal: boolean;
  onClick: () => void;
};
const RightMenu: FC<Props> = ({ isModal, onClick }) => {
  if (!isModal) {
    return null;
  }

  const [text, setText] = useState({ item: { name: "", info: "" } }) as
    | TextModal
    | any;

  const current = useContext(ThemeContex);

  const modalRoot = document.getElementById("menu") as HTMLElement;

  const handleHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const obj = {
      item: { name: event.target.value, info: text.item.info },
    } as TextModal;
    setText(obj);
    // console.log(obj)
  };
  const handleHange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const obj = {
      item: { name: text.item.name, info: event.target.value },
    } as TextModal;
    setText(obj);
    // console.log(obj)
  };

  const handleClikc = () => {
    const str1 = text.item.name;
    const str2 = text.item.info;
    // console.log(str1.length);
    if (str1.length > 0 && str2.length > 0) {
      const num: number | any = current?.value2?.initialBeans.items.length;
      const ar = {
        beanId: num + 1,
        flavorName: str1,
        dopInfo: str2,
        isWork: false,
        isLike: false,
      };
      current?.value2?.initialBeans.items.push(ar);
      const arey: Ar | any = current?.value2?.initialBeans.items;
      current?.value2?.setInitialBeans(arey);
      alert("Добавлено!");
    } else {
      alert("Заполните все поля!");
    }
  };

  return createPortal(
    <div className={style.popupBox}>
      <div className={style.box}>
        <span className={style.closeIcon} onClick={onClick}></span>
        <div>
          <h1>Добавить Задачу</h1>
          <br />
          <label htmlFor="title">Напишите название задачи</label>
          <input
            type="text"
            placeholder="Пример: Выйти на зарубеж"
            value={text.name}
            onChange={(event) => handleHange(event)}
          />
          <br />
          <label htmlFor="title">Опишите название задачи</label>
          <input
            type="text"
            placeholder="Пример: Сначала учиться!"
            value={text.info}
            onChange={(event) => handleHange2(event)}
          />
          <br />
          <button onClick={handleClikc}>Добавить</button>
        </div>
      </div>
    </div>,
    //где распологать
    modalRoot
  );
};

export default RightMenu;
