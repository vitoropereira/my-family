import { useNodeSelectionContext } from "@/context/tree";
import { CloseIcon } from "@/icons/CloseIcon";
import { FC, useState } from "react";
import BioLink from "./BioLink/BioLink";
import BioNavItem from "./BioNavItem/BioNavItem";
import s from "./TreeNodeDetails.module.css";
import { TreeNodeDetailsBio } from "./TreeNodeDetailsBio/TreeNodeDetailsBio";
import { TreeNodeFamilies } from "./TreeNodeFamilies/TreeNodeFamilies";
import { getTreeNodeDetails } from "./utils";

const navigation = [
  { id: 1, title: "Biografia" },
  { id: 2, title: "Galeria" },
  { id: 3, title: "Famílias" },
];

const TreeNodeDetails: FC = () => {
  const { hasSubTree, selectedNodeId, unselectNode, selectNode } = useNodeSelectionContext();
  const [selectedNavId, setSelectedNavId] = useState<number>(1);
  const nodeDetails = getTreeNodeDetails(selectedNodeId);

  if (!nodeDetails) return null;

  const tabContent =
    selectedNavId === 1 ? (
      <TreeNodeDetailsBio {...nodeDetails} onRelationNodeClick={(id) => selectNode(id)} />
    ) : selectedNavId === 2 ? (
      <>
        <span className={s.rootItem}>Infelizmente ainda não temos fotos dessa pessoa.</span>
        <span className={s.rootItem}>
          Se você gostaria de ajudar e tem fotos que gostaria de adicionar à galeria, por favor,{" "}
          <BioLink
            href="https://wa.me/+5581996733973?text=Olá!%20Escrevendo%20about%20project%20TREE"
            text="escreva para nós"
            newTab={true}
          />
          .
        </span>
      </>
    ) : (
      <TreeNodeFamilies {...nodeDetails} />
    );

  return (
    <div className={s.root}>
      <button className={s.closeButton} onClick={unselectNode}>
        <CloseIcon className={s.closeIcon} />
      </button>
      <div className={s.rootItem}>
        <h2 className={s.name}>{nodeDetails.fullName}</h2>
        {hasSubTree && (
          <span className={s.hasSubTreeNote}>
            Nem todos os ancestrais são visíveis na árvore.
            <br /> Na guia Famílias, você pode ver
            <wbr /> quem vem de {nodeDetails.firstName}.
          </span>
        )}
      </div>
      <nav className={s.rootItem}>
        {navigation.map((item, index) => (
          <BioNavItem
            key={index}
            id={item.id}
            text={item.title}
            isSelected={item.id === selectedNavId}
            onClick={setSelectedNavId}
          />
        ))}
      </nav>
      {tabContent}
    </div>
  );
};

export default TreeNodeDetails;
