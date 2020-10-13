import React, { ReactElement, useState } from "react";
import { LocationInfo, TreeItemProps } from "./TreeItem";
import "./treeSingle.css";

type Props = {
  children: ReactElement<TreeItemProps>[];
};

export default function TreeSingle(props: Props) {
  let children = React.Children;
  let proppedChildren: ReactElement[] = [];
  children.forEach<ReactElement<TreeItemProps>>(props.children, (child, i) => {
    proppedChildren.push(
      React.cloneElement(child, {
        index: i
      })
    );
  });
  return <div className="treeRoot">{proppedChildren}</div>;
}
