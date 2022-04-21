import Button from "@/components/Button/Button";
import style from "@/styles/404.module.css";
import Tree from "@/styles/Tree.module.css";
import classNames from "classnames";
import type { NextPage } from "next";

const ErrorPage: NextPage = () => (
  <div className={style.pageContainer}>
    <div className={style.content}>
      <span className={classNames(style.descriptionItem, style.title)}>Ops! Esta página não foi encontrada</span>
      <div className={style.buttonsContainer}>
        <Button href="/tree" text="Ver Árvore" className={style.descriptionItem} />
        <Button href="/" text="Leia sobre o projeto" className={style.descriptionItem} isSecondary={true} />
      </div>
    </div>
    <div className={style.imageContainer}>
      <div className={Tree.tree1} />
      <div className={Tree.tree2} />
      <div className={Tree.tree3} />
      <div className={Tree.tree4} />
      <div className={Tree.tree5} />
    </div>
  </div>
);

export default ErrorPage;
