import React, { Fragment, useState } from "react";
import Toggle from "./../Toggle/Toggle";
import TreeSingle from "../TreeSingle/TreeSingle";
import "./menu.css";
import TreeItem, {
  BuildingCode,
  LocationInfo,
  TreeItemProps
} from "../TreeSingle/TreeItem";
import MainButton from "../MainButton/MainButton";
import generatePath, { PathArray } from "../../GraphAlgs/GenerateShortestPath";

export const periods = [0, 1, 2, 3, 4, 5, 6, 7] as const;

type Props = {
  title: string;
  allowedPeriods: { p0: boolean; p7: boolean };
  locationArr: { [key in typeof periods[number]]: LocationInfo<BuildingCode> };
  setAllowedPeriods: (allowedPeriods: { p0: boolean; p7: boolean }) => void;
  setLocationArr: (
    locationArr: { [key in typeof periods[number]]: LocationInfo<BuildingCode> }
  ) => void;
  drawPaths: (pathArray: [PathArray, PathArray]) => void;
};

export default function Menu(props: Props) {
  const [open, setOpen] = useState(false);

  const handleLocationSelect: TreeItemProps["onSelectLocation"] = (
    location,
    index
  ) => {
    console.log({ ...props.locationArr, [index]: location });
    props.setLocationArr({ ...props.locationArr, [index]: location });
  };

  return (
    <Fragment>
      <div className={`menuBox ${open ? "" : "closed"}`}>
        <div className="menuBoxInner">
          <div className="menuHeader">
            <h2 className="headerTitle">{props.title}</h2>
            <div className="headerCloseBtn" onClick={() => setOpen(false)}>
              <i className="material-icons-outlined">cancel</i>
            </div>
          </div>

          <div className="options">
            <div className="toggleOptions">
              <Toggle
                value={props.allowedPeriods.p0}
                label="Period 0"
                onToggle={(isNowEnabled) => {
                  props.setAllowedPeriods({
                    ...props.allowedPeriods,
                    p0: isNowEnabled
                  });
                }}
              ></Toggle>
              <Toggle
                value={props.allowedPeriods.p7}
                label="Period 7"
                onToggle={(isNowEnabled) => {
                  props.setAllowedPeriods({
                    ...props.allowedPeriods,
                    p7: isNowEnabled
                  });
                }}
              ></Toggle>
            </div>
            <TreeSingle>
              {[...new Array(8)].map((v, i) => {
                return (
                  <TreeItem
                    label={`Period ${i}`}
                    key={i}
                    className={
                      (!props.allowedPeriods.p0 && i === 0) ||
                      (!props.allowedPeriods.p7 && i === 7)
                        ? "hiddenItem"
                        : ""
                    }
                    onSelectLocation={handleLocationSelect}
                    location={props.locationArr[i as typeof periods[number]]}
                  ></TreeItem>
                );
              })}
            </TreeSingle>
          </div>
          <MainButton
            locationArr={props.locationArr}
            allowedPeriods={props.allowedPeriods}
            label="Generate"
            onClick={() => {
              let path = generatePath(props.allowedPeriods, props.locationArr);
              setOpen(false);
              props.drawPaths(path);
            }}
          ></MainButton>
        </div>
      </div>
      <div className="openMenuBtn" onClick={() => setOpen(true)}>
        <i className="material-icons">menu</i>
      </div>
      <div
        className={`clickCapture ${open ? "enabled" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
    </Fragment>
  );
}
