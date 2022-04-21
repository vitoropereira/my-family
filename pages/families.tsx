import FamilyLink from "@/components/FamilyLink/FamilyLink";
import { getFamiliesArray } from "@/data";
import Tree from "@/styles/Tree.module.css";
import style from "@/styles/FamiliesPage.module.css";
import classNames from "classnames";
import type { NextPage } from "next";
import Image from "next/image";

const FamiliesPage: NextPage = () => {
  const familiesMap = getFamiliesArray();
  return (
    <div className={style.pageContainer}>
      <div className={style.content}>
        <div className={style.descriptionContainer}>
          <div className={classNames(style.titleContainer, style.descriptionItem)}>
            <div className={style.logoContainer}>
              <Image src="/favicon.ico" width={120} height={120} alt="logo tipo do projeto da árvore" />
            </div>
            <span className={style.logoTitle}>FAMÍLIAS NO PROJETO</span>
          </div>
        </div>
        <div className={style.familiesContainer}>
          {familiesMap
            .filter((family) => !family.lastName.startsWith("от ("))
            .map((family, index) => (
              <FamilyLink key={index} href={`/tree?root=${family.id}`} familyName={family.lastName} />
            ))}
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

export default FamiliesPage;
