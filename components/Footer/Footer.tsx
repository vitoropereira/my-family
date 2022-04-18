import { FC } from "react";
import style from "./Footer.module.css";

const Footer: FC = () => (
  <footer className={style.footer}>
    <span className={style.footerItem}>VOP WEB</span>
    <span className={style.footerItem}>2022</span>
  </footer>
);

export default Footer;
