import { FC } from "react";
import style from "./Widget.module.css";
import { getNodesCount } from "./utils";

type WidgetProps = {
  title: string;
  value: string;
};

const Widget: FC<WidgetProps> = ({ title, value }) => {
  return (
    <div className={style.widgetContainer}>
      <span className={style.widgetTitle}>{title}</span>
      <span className={style.widgetValue}>{value}</span>
    </div>
  );
};

export default Widget;
