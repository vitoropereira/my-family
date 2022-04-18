import { TreeNodeDataWithRelations } from "@/types/tree";
import classNames from "classnames";
import { FC } from "react";
import BioRelationButtons, { RelationType } from "../BioRelationButtons/BioRelationButtons";
import { getDate } from "../utils";
import s from "./TreeNodeDetailsBio.module.css";

type TreeNodeDetailsBioProps = TreeNodeDataWithRelations & {
  onRelationNodeClick: (id: string) => void;
};

export const TreeNodeDetailsBio: FC<TreeNodeDetailsBioProps> = ({
  birthYear,
  birthMonth,
  birthDay,
  deathYear,
  deathMonth,
  deathDay,
  birthPlace,
  deathPlace,
  parents,
  siblings,
  spouses,
  children,
  nationality,
  education,
  occupation,
  rewards,
  bio,
  onRelationNodeClick,
}) => {
  const birthDate = getDate(birthYear, birthMonth, birthDay);
  const deathDate = getDate(deathYear, deathMonth, deathDay);
  return (
    <div className={s.bioContainer}>
      <div className={classNames(s.bioGrid)}>
        {birthDate && (
          <>
            <span className={s.gridItemTitle}>Data de nascimento</span>
            <span className={s.gridItemValue}>{birthDate}</span>
          </>
        )}
        {birthPlace && (
          <>
            <span className={s.gridItemTitle}>Local de nascimento</span>
            <span className={s.gridItemValue}>{birthPlace}</span>
          </>
        )}
        {deathDate && (
          <>
            <span className={s.gridItemTitle}>Data da morte</span>
            <span className={s.gridItemValue}>{deathDate}</span>
          </>
        )}
        {deathPlace && (
          <>
            <span className={s.gridItemTitle}>Lugar da morte</span>
            <span className={s.gridItemValue}>{deathPlace}</span>
          </>
        )}
        {parents && parents.length > 0 && (
          <>
            <span className={s.gridItemTitle}>Pais</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={parents} relationType={RelationType.Parents} />
            </div>
          </>
        )}
        {siblings && siblings.length > 0 && (
          <>
            <span className={s.gridItemTitle}>Irmãos e irmãs</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={siblings} relationType={RelationType.Siblings} />
            </div>
          </>
        )}
        {spouses && spouses.length > 0 && (
          <>
            <span className={s.gridItemTitle}>{spouses.length > 1 ? "Cônjuges" : "Esposo(а)"}</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={spouses} relationType={RelationType.Spouses} />
            </div>
          </>
        )}
        {children && children.length > 0 && (
          <>
            <span className={s.gridItemTitle}>Filhos</span>
            <div className={classNames(s.gridItemValue)}>
              <BioRelationButtons onClick={onRelationNodeClick} items={children} relationType={RelationType.Children} />
            </div>
          </>
        )}
        {nationality && (
          <>
            <span className={s.gridItemTitle}>Nacionalidade</span>
            <span className={s.gridItemValue}>{nationality}</span>
          </>
        )}
        {education && (
          <>
            <span className={s.gridItemTitle}>Educação</span>
            <span className={s.gridItemValue}>{education}</span>
          </>
        )}
        {occupation && (
          <>
            <span className={s.gridItemTitle}>Profissão</span>
            <span className={s.gridItemValue}>{occupation}</span>
          </>
        )}
        {rewards && (
          <>
            <span className={s.gridItemTitle}>Prêmios</span>
            <span className={s.gridItemValue}>{rewards.join(", ")}</span>
          </>
        )}
      </div>
      {bio && <span className={classNames(s.rootItem)}>{bio}</span>}
    </div>
  );
};
