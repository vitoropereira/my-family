import { getTreeNodesMap } from "@/data";
import { RelationInfo, TreeNodeDataWithRelations, TreeNodeRelation } from "@/types/tree";

const nodesMap = getTreeNodesMap();

export const getMonthString = (month: number, day?: number) => {
  return day === undefined ? genitiveCaseMonths[month] : nominativeCaseMonths[month];
};
const nominativeCaseMonths: Record<number, string> = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro",
};
const genitiveCaseMonths: Record<number, string> = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro",
};

export const getDate = (year?: number, month?: number, day?: number) => {
  return year
    ? month
      ? day
        ? `${day} ${getMonthString(month)} ${year}`
        : `${getMonthString(month)} ${year}`
      : `${year}`
    : undefined;
};

const getTreeNodeRelationDetails = (relations: TreeNodeRelation[]): RelationInfo[] => {
  return relations.map((relation) => {
    return {
      id: relation.id,
      fullName: nodesMap[relation.id].data.fullName,
      type: relation.type,
      firstName: nodesMap[relation.id].data.firstName,
    };
  });
};
export const getTreeNodeDetails = (selectedNodeId?: string): TreeNodeDataWithRelations | undefined => {
  if (selectedNodeId === undefined) {
    return;
  }
  const selectedNode = nodesMap[selectedNodeId];
  const parents = getTreeNodeRelationDetails(selectedNode.parents as TreeNodeRelation[]);
  const children = getTreeNodeRelationDetails(selectedNode.children as TreeNodeRelation[]);
  const spouses = getTreeNodeRelationDetails(selectedNode.spouses as TreeNodeRelation[]);
  const siblings = getTreeNodeRelationDetails(selectedNode.siblings as TreeNodeRelation[]);
  return {
    ...selectedNode.data,
    parents,
    children,
    spouses,
    siblings,
  };
};
