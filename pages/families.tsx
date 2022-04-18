import FamilyLink from "@/components/FamilyLink/FamilyLink";
import { getFamiliesArray } from "@/data";
import ballS from "@/styles/Ball.module.css";
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
              <Image src="/LogoBig.png" width={120} height={110} alt="logo tipo do projeto da árvore" />
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
        <div className={ballS.ball1} />
        <div className={ballS.ball2} />
        <div className={ballS.ball3} />
        <div className={ballS.ball4} />
        <div className={ballS.ball5} />
      </div>
    </div>
  );
};

export default FamiliesPage;
