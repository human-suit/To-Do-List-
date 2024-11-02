import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import Card from "../Card/Card";
import { ThemeContex } from "../../App";

const ListLike = () => {
  const current = useContext(ThemeContex);
  const [initialBeans] = useState(current!.value3!.like!);

  useEffect(() => {
    current!.value3!.setlike(initialBeans);
  }, [current]);
  return (
    <>
      <div id="modal" className={style.container}>
        {initialBeans.items &&
          initialBeans.items.map((bean) => {
            return <Card data={bean} key={bean.beanId} />;
          })}
      </div>
    </>
  );
};

export default ListLike;
