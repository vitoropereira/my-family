import classNames from "classnames";
import { FC } from "react";
import style from "./Credit.module.css";

type CreditProps = {
  name: string;
  description?: string;
};

const Credit: FC<CreditProps> = ({ name, description }) => (
  <div className={style.container}>
    <div className={classNames(style.ball)} />
    <span className={style.credit}>{description ? `${name} ${description}` : name}</span>
  </div>
);

export default Credit;
