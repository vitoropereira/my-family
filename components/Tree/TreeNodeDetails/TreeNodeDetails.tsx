import { useNodeSelectionContext } from "@/context/tree";
import { CloseIcon } from "@/icons/CloseIcon";
import Image from "next/image";
import { FC, useState } from "react";
import BioLink from "./BioLink/BioLink";
import style from "./TreeNodeDetails.module.css";
import { TreeNodeDetailsBio } from "./TreeNodeDetailsBio/TreeNodeDetailsBio";
import { TreeNodeFamilies } from "./TreeNodeFamilies/TreeNodeFamilies";
import { getTreeNodeDetails } from "./utils";
import avatar from "../../../public/profile_img.png";
import BioNavItem from "./BioNavItem/BioNavItem";

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
        <div>
          <Image
            src={!nodeDetails.image_url ? avatar : nodeDetails.image_url}
            alt={nodeDetails.firstName}
            width="120"
            height="120"
          />
        </div>
        <span className={style.rootItem}>
          Se você gostaria de ajudar e tem fotos que gostaria de adicionar à galeria, por favor,{" "}
          <BioLink
            href="https://wa.me/+5581996733973?text=Olá!%20Escrevendo%20about%20project%20TREE"
            text="escreva para nós"
            newTab={true}
          />
        </span>
      </>
    ) : (
      <TreeNodeFamilies {...nodeDetails} />
    );

  return (
    <div className={style.root}>
      <button className={style.closeButton} onClick={unselectNode}>
        <CloseIcon className={style.closeIcon} />
      </button>
      <div className={style.rootItem}>
        <h2 className={style.name}>{nodeDetails.fullName}</h2>
        {hasSubTree && (
          <span className={style.hasSubTreeNote}>
            Nem todos os ancestrais são visíveis na árvore.
            <br /> Na guia Famílias, você pode ver
            <wbr /> quem vem de {nodeDetails.firstName}.
          </span>
        )}
      </div>
      <nav className={style.rootItem}>
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
