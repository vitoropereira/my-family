import React from "react";
import { Connector as ConnectorType } from "../relatives-tree/types";

interface Props {
  connector: ConnectorType;
  width: number;
  height: number;
}

export default React.memo<Props>(function Connector({ connector, width, height }) {
  const [x1, y1, x2, y2] = connector;
  console.log("connector");
  console.log(y1 * height);
  console.log(`translate(${y1 * height}px, ${x1 * width}px)`);
  return (
    <i
      style={{
        position: "absolute",
        width: Math.max(1, (x2 - x1) * width + 1),
        height: Math.max(1, (y2 - y1) * height + 1),
        background: `#999`,
        transform: `translate(${x1 * width}px, ${y1 * height}px)`,
        pointerEvents: "none",
      }}
    />
    // Conector para a árvore horizontal
    // <i
    //   style={{
    //     position: "absolute",
    //     width: Math.max(1, (y2 - y1) * height + 1),
    //     height: Math.max(1, (x2 - x1) * width + 1),
    //     background: `#999`,
    //     transform: `translate(${y1 * height}px, ${x1 * width}px); rotate(180deg)`,
    //     pointerEvents: "none",
    //   }}
    // />
  );
});
