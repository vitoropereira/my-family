import { useUrlTreeRootId } from "@/context/tree";
import { TreeNodeDataWithRelations } from "@/types/tree";
import classNames from "classnames";
import { FC } from "react";
import styles from "./TreeNodeFamilies.module.css";

type TreeNodeFamiliesProps = TreeNodeDataWithRelations;

export const TreeNodeFamilies: FC<TreeNodeFamiliesProps> = ({ families, fullName }) => {
  const { rootId } = useUrlTreeRootId();

  return families.length > 0 ? (
    <>
      <span className={styles.familyLinksTitle}>{`${fullName} является потомком семей:`}</span>
      <div className={styles.familyLinksContainer}>
        {families.map((family) => {
          if (rootId === family.id) {
            return (
              <span
                key={family.id}
                className={classNames(styles.selectedFamily, styles.familyItem)}
              >{`${family.lastName} – abra agora`}</span>
            );
          } else {
            return (
              <a
                key={family.id}
                href={`/tree?root=${family.id}`}
                className={classNames(styles.familyLink, styles.familyItem)}
              >
                {family.lastName}
              </a>
            );
          }
        })}
      </div>
    </>
  ) : (
    <span className={styles.familyLinksTitle}>{`${fullName} é uma raiz e não tem outros ramos.`}</span>
  );
};
