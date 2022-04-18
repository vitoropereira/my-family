import Button from "@/components/Button/Button";
import { getFamiliesCount, getNodesCount, getTreeDepth } from "@/components/Widget/utils";
import Widget from "@/components/Widget/Widget";
import ballS from "@/styles/Ball.module.css";
import style from "@/styles/HomePage.module.css";
import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";

const HomePage: NextPage = () => {
  const nodesCount = getNodesCount();
  const treeDepth = getTreeDepth();
  const familiesCount = getFamiliesCount();

  return (
    <div className={style.pageContainer}>
      <div className={style.content}>
        <div className={style.descriptionContainer}>
          <div className={classNames(style.logoContainer, style.descriptionItem)}>
            <Image src="/favicon.ico" width={120} height={120} alt="logotipo do projeto da árvore" />
            <span className={style.logoTitle}>
              Minha <br /> Árvore Genealógica
            </span>
          </div>
          <span className={classNames(style.description, style.descriptionItem)}>
            Esta árvore genealógica foi desenvolvida com o intuito de apresentar um modelo de viável de visualização de
            dados de uma família.
          </span>
          <span className={classNames(style.description, style.descriptionItem)}>
            Utilizei Next.js como framework para a criação do site.
          </span>
          <span className={classNames(style.description, style.descriptionItem)}>
            O código-fonte está disponível no repositório do projeto.
          </span>
          <div className={style.buttonsContainer}>
            <Button href="/tree" text="ver árvore" className={style.descriptionItem} />
            <Button
              href="https://wa.me/+5581996733973?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20site%20da%20sua%20árvore%20genealógica."
              text="Entrar em contato"
              className={style.descriptionItem}
              isSecondary={true}
              newTab={true}
            />
          </div>
        </div>
        <div className={style.widgets}>
          <Widget title="Total de Pessoa" value={nodesCount.toString()} />
          <Widget title="Gerações em uma árvore" value={treeDepth.toString()} />
          <Widget title="Famílias diferentes" value={familiesCount.toString()} />
        </div>
      </div>
      <div className={style.imageContainer}>
        <div className={ballS.ball1} />
        <div className={ballS.ball2} />
        <div className={ballS.ball3} />
        <div className={ballS.ball4} />
        <div className={ballS.ball5} />
      </div>
    </div>
  );
};

export default HomePage;
