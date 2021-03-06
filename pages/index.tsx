import Button from "@/components/Button/Button";
import { getFamiliesCount, getNodesCount, getTreeDepth } from "@/components/Widget/utils";
import Widget from "@/components/Widget/Widget";
import Tree from "@/styles/Tree.module.css";
import style from "@/styles/HomePage.module.css";
import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";
import BioLink from "@/components/Tree/TreeNodeDetails/BioLink/BioLink";

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
            Eu Vitor Pereira, desenvolvi este site de árvore genealógica com o intuito de apresentar um modelo viável de
            visualização de dados de uma família.
          </span>
          <span className={classNames(style.description, style.descriptionItem)}>
            Utilizei Next.js, com Typescript, como framework para a criação do site. Criei uma página{" "}
            <BioLink href="./faq" text="Saiba Mais" newTab={true} /> onde coloquei algumas perguntas com suas
            respectivas respostas.
          </span>
          <span className={classNames(style.description, style.descriptionItem)}>
            O código-fonte está disponível no repositório do projeto.{" "}
            <BioLink href="https://github.com/vitoropereira/my-family" text="Acesse aqui." newTab={true} />
          </span>
          <div className={style.buttonsContainer}>
            <Button href="/tree" text="Visualizar árvore" className={style.descriptionItem} />
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
          <Widget title="Total de Pessoas" value={nodesCount.toString()} />
          <Widget title="Gerações em uma árvore" value={treeDepth.toString()} />
          <Widget title="Famílias diferentes" value={familiesCount.toString()} />
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
};

export default HomePage;
