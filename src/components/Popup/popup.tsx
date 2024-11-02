import React, { FC, useContext, useState } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";
import { ThemeContex } from "../../App";
import { TextModal, Ar, Array } from "../../types/types";
type Props = {
  id: number;
  isModal: boolean;
  onClick: () => void;
};

const Popup: FC<Props> = ({ id, isModal, onClick }) => {
  if (!isModal) {
    return null;
  }

  const current = useContext(ThemeContex);

  const [text, setText] = useState({ item: { name: "", info: "" } }) as
    | TextModal
    | any;
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
    console.log(str1.length);
    if (str1.length > 0 && str2.length > 0) {
      console.log(current?.value2?.initialBeans.items);
      const ar = current!.value2!.initialBeans.items! as Ar;
      const num = id;
      ar[num].flavorName = str1;
      ar[num].dopInfo = str2;
      const arey = { items: [{ ar }] } as unknown as Array;
      current?.value2?.setInitialBeans(arey);
      alert("Отредактировано!");
    } else {
      alert("Заполните все поля!");
    }
  };
  const modalRoot = document.getElementById("modal") as HTMLElement;

  return createPortal(
    <div className={style.popupBox}>
      <div className={style.box}>
        <span className={style.closeIcon} onClick={onClick}>
          x
        </span>
        <div>
          <h1>Редактирование тикета!</h1>
          <br />
          <label htmlFor="title">Напишите название задачи</label>
          <input
            type="text"
            placeholder="Выйти на зарубеж"
            value={text.name}
            onChange={(event) => handleHange(event)}
          />
          <br />
          <label htmlFor="title">Опишите название задачи</label>
          <input
            type="text"
            placeholder="Сначала учиться!"
            value={text.info}
            onChange={(event) => handleHange2(event)}
          />
          <br />
          <button onClick={handleClikc}>Отредактировать</button>
        </div>
      </div>
    </div>,
    //где распологать
    modalRoot
  );
};

export default Popup;
