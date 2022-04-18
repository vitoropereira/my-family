import TreeNodeDetails from "@/components/Tree/TreeNodeDetails/TreeNodeDetails";
import TreeWithNavigation from "@/components/Tree/TreeWithNavigation/TreeWithNavigation";
import { DEFAULT_ROOT_ID } from "@/constants/tree";
import { NavigationContextProvider } from "@/context/navigation";
import { NodeSelectionContextProvider, useUrlTreeRootId } from "@/context/tree";
import { getFamiliesMap, getTreeNodesMap } from "@/data";
import style from "@/styles/TreePage.module.css";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TreePage: NextPage = () => {
  const [rootName, setRootName] = useState<string>();
  const router = useRouter();
  const { rootId } = useUrlTreeRootId();

  const treeNodesMap = getTreeNodesMap();
  const familiesMap = getFamiliesMap();

  useEffect(() => {
    if (rootId && treeNodesMap[rootId] !== undefined) {
      setRootName(treeNodesMap[rootId].data.fullName);
    } else {
      setRootName(treeNodesMap[1].data.fullName);
    }
  }, [rootId, treeNodesMap]);

  if (rootId && (familiesMap[rootId] === undefined || treeNodesMap[rootId] === undefined)) {
    router.push("./404");
    return null;
  }

  return (
    <NodeSelectionContextProvider>
      <NavigationContextProvider>
        <div className={style.absoluteContainer}>
          <div className={style.treeRootNameContainer}>
            <span className={style.treeRootTitle}>Árvore Raiz</span>
            <span className={style.treeRootName}>{rootName}</span>
          </div>
          {rootId !== DEFAULT_ROOT_ID && (
            <Link href="/tree">
              <a className={style.homeTreeLink}>Voltar para a árvore principal</a>
            </Link>
          )}
        </div>

        <TreeWithNavigation />
        <TreeNodeDetails />
      </NavigationContextProvider>
    </NodeSelectionContextProvider>
  );
};

export default TreePage;
