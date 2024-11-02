import { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import Card from "../Card/Card";
import { ThemeContex } from "../../App";

const SectionList = () => {
  const current = useContext(ThemeContex);
  const [initialBeans] = useState(current!.value2!.initialBeans!);

  useEffect(() => {
    current!.value2!.setInitialBeans(initialBeans);
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

export default SectionList;
