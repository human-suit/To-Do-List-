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
    event: React.MouseEvent<HTMLButtonElement> | any,
  ) => {
    setModal(true);
    setId(event.target.value - 1);
  };

  const current = useContext(ThemeContex);
  console.log(current);

  const handleClikc = (event: React.MouseEvent<HTMLButtonElement> | any) => {
    console.log(current!.value2!.initialBeans.items);
    const ar = current!.value2!.initialBeans.items! as Ar;
    const num = event.target.value;
    ar[num - 1].isWork = true;
    const arey = { items: [{ ar }] } as unknown as Array;
    current?.value2?.setInitialBeans(arey);
  };
  const handleClikcDelit = (
    event: React.MouseEvent<HTMLButtonElement> | any,
  ) => {
    console.log(current?.value2?.initialBeans.items);
    const ar = current!.value2!.initialBeans.items! as Ar;
    const num = event.target.value;
    ar.splice(num - 1, 1);
    const arey = { items: [{ ar }] } as unknown as Array;
    current?.value2?.setInitialBeans(arey);
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
