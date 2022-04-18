import classNames from "classnames";
import { FC } from "react";
import style from "./FamilyLink.module.css";

type FamilyLinkProps = {
  familyName: string;
  href: string;
};

const FamilyLink: FC<FamilyLinkProps> = ({ familyName, href }) => (
  <div className={style.container}>
    <div className={classNames(style.ball)} />
    <a href={href} className={style.familyLink}>
      {familyName}
    </a>
  </div>
);

export default FamilyLink;
