import { TreeExternalNode } from "@/types/tree";
import classNames from "classnames";
import Image from "next/image";
import { FC, memo, useState } from "react";
import style from "./TreeNode.module.css";
import { TreeNodeYears } from "./TreeNodeYears";
import { getTreeNodeStyleTransform } from "./utils";
import avatar from "../../../public/profile_img.png";

interface TreeNodeProps {
  width: number;
  height: number;
  isSelected: boolean;
  node: TreeExternalNode;
  onClick: (id: string, hasSubTree?: boolean) => void;
}

const TreeNode: FC<TreeNodeProps> = ({ isSelected, node, onClick, width, height }) => {
  const { data, gender } = node;
  const { firstName, lastName, birthYear, deathYear, image_url } = data;

  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div
      style={{
        width: width,
        height: height,
        transform: getTreeNodeStyleTransform(node, width, height),
        zIndex: isSelected ? 1 : 0,
      }}
      className={style.root}
    >
      <div
        className={classNames(style.scalingWrapper, {
          [style.selected]: isSelected,
        })}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <button
          onClick={() => {
            onClick(node.id, node.hasSubTree);
          }}
          className={classNames(style.inner, style[gender], {
            [style.animated]: isSelected || isMouseOver,
            [style.hasSubtree]: node.hasSubTree,
          })}
        >
          <Image
            className={classNames(style.imageAvatar)}
            src={!image_url ? avatar : image_url}
            width="85"
            height="85"
            alt="Avatar"
          />

          <div className={style.fullName}>
            <span className={style.firstName}>
              {firstName} {lastName}
            </span>
            <span className={style.lastName}></span>
            <TreeNodeYears birthYear={birthYear} deathYear={deathYear} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default memo(TreeNode);
