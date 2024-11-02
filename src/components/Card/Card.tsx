import { FC, useContext, useState } from "react";
import style from "./style.module.css";
import { Bean, Array, Ar } from "../../types/types";
import { ThemeContex } from "../../App";
import Popup from "../Popup/popup";

type Props = {
  data: Bean;
};

const Card: FC<Props> = ({ data }) => {
  //popup
  const [isModal, setModal] = useState(false);

  const [id, setId] = useState(0);

  const handleClickPopup = (
    event: React.MouseEvent<HTMLButtonElement> | any
  ) => {
    setModal(true);
    setId(event.target.value - 1);
  };

  const current = useContext(ThemeContex);
  // console.log(current);

  const handleClikc = (event: React.MouseEvent<HTMLButtonElement> | any) => {
    console.log(current!.value2!.initialBeans.items);
    const ar = current!.value2!.initialBeans.items! as Ar;
    const num = event.target.value;
    const user = ar.findIndex((item) => item.beanId == num);
    const userWork = ar[user];
    userWork!.isWork = true;
    const arey = { items: [{ userWork }] } as unknown as Array;
    current?.value2?.setInitialBeans(arey);
  };
  const handleClikcDelit = (
    event: React.MouseEvent<HTMLButtonElement> | any
  ) => {
    console.log(current?.value2?.initialBeans.items);
    const num = event.target.value;
    const ar = current!.value2!.initialBeans.items as Ar;
    const user = ar.findIndex((item) => item.beanId == num);
    ar.splice(user, 1);
    const arey = { items: [{ ar }] } as unknown as Array;
    current?.value2?.setInitialBeans(arey);
  };
  const handleClikLike = (event: React.MouseEvent<HTMLButtonElement> | any) => {
    const num = event.target.value;
    const ar = current!.value2!.initialBeans.items! as Ar;
    const user = ar.find((item) => item.beanId == num);
    user!.isLike = true;
    // console.log(user);
    current?.value3?.like.items.push(user!);
    const arey: Ar | any = current?.value3?.like;
    console.log(arey);
    current?.value3?.setlike(arey);
    const arey2 = ar as unknown as Array;
    current?.value2?.setInitialBeans(arey2);
  };

  const Buttons = () => {
    return (
      <div className={style.grid}>
        {!data.isWork ? (
          <button
            onClick={(event) => {
              handleClikc(event);
            }}
            value={String(data.beanId)}
          >
            Выполнить!
          </button>
        ) : (
          <button className={style.disab} disabled>
            Выполнено:)
          </button>
        )}
        {!data.isWork ? (
          <button
            onClick={(event) => {
              handleClickPopup(event);
            }}
            value={String(data.beanId)}
          >
            Редактировать
          </button>
        ) : (
          <button className={style.disab} disabled>
            Редактировать
          </button>
        )}

        {!data.isLike ? (
          <button
            onClick={(event) => {
              handleClikLike(event);
            }}
            value={String(data.beanId)}
          >
            В избранное
          </button>
        ) : (
          <button className={style.disab} disabled>
            В избранное
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        id={String(data.beanId)}
        className={!data.isWork ? style.card : style.cardTrue}
      >
        <div className={style.grid}>
          <div className={style.content}>
            <h2>{data.flavorName}</h2>
            <h3>{data.dopInfo}</h3>
          </div>
          <div className={style.but}>
            {Buttons()}

            <button
              onClick={(event) => {
                handleClikcDelit(event);
              }}
              value={String(data.beanId)}
            >
              Удалить
            </button>
          </div>
        </div>
        <Popup id={id} isModal={isModal} onClick={() => setModal(false)} />
      </div>
    </>
  );
};

export default Card;
