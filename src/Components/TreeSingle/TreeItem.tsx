import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "./treeItem.css";

const range = function (startAt = 0, endAt = 1, prefix = "") {
  return [...Array(endAt - startAt + 1).keys()].map(
    (i) => prefix + (i + startAt)
  );
};

const concat = (...arrs: (string[] | string)[]) =>
  ([] as string[]).concat(...arrs);

const buildingCodes = ["A", "B", "C", "D", "E", "F", "J", "K"] as const;
const roomCodes = {
  A: concat(
    "1",
    "BOOKSTORE",
    "COMP LAB A",
    range(2, 12),
    "CULINARY",
    range(14, 37),
    "STUDENT STORE",
    range(39, 54)
  ),
  B: concat("ADMIN", "LIBRARY", range(1, 3, "COMP LAB ")),
  C: concat(range(1, 22), "COMP LAB C", range(1, 10, "LAB ")),
  D: concat(
    "GYM",
    "DRAMA",
    "BAND",
    "BOYS LOCKER",
    "GIRLS LOCKER",
    "CHOIR",
    "WEIGHT",
    "JH DANCE",
    "COLLEGE",
    range(1, 4),
    "EQUIPMENT"
  ),
  E: concat("ORCHESTRA", "DANCE", "PAC"),
  F: concat("BOYS LOCKER", "GIRLS LOCKER", "WRESTLING", "WEIGHT", "AUX GYM"),
  J: concat(range(101, 120), "COUNSELOR", range(201, 217)),
  K: concat("BOYS LOCKER", "GIRLS LOCKER", range(1, 2), "K GYM")
} as const;

export type BuildingCode = typeof buildingCodes[number];

export type RoomCode<T extends BuildingCode> = typeof roomCodes[T];

export type LocationInfo<P extends BuildingCode> = {
  building: P;
  room: RoomCode<P>[number];
};

export type TreeItemProps = {
  onSelectLocation: (
    location: LocationInfo<BuildingCode>,
    index: number
  ) => void;
  className?: string;
  location: LocationInfo<BuildingCode>;
  index?: number;
  label: string;
  key?: number;
};

function usePreviousProps(value: TreeItemProps) {
  const ref = useRef<TreeItemProps>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TreeItem: FunctionComponent<TreeItemProps> = function (
  props: TreeItemProps
) {
  return (
    <div className={`${props.className} treeItem`} key={props.key}>
      <div className="itemTitle">
        <span className="expander">–&nbsp;</span>
        <span>{props.label}</span>
      </div>
      <div className="itemContents">
        Location:&nbsp;&nbsp;
        <select
          className="dropdown"
          onChange={(e) => {
            let b = e.target.value as BuildingCode;
            props.onSelectLocation?.(
              {
                building: b,
                room: roomCodes[b][0]
              },
              props.index as number
            );
          }}
        >
          {buildingCodes.map((e, i) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
        </select>
        <select
          className="dropdown long"
          value={
            usePreviousProps(props)?.location.building !==
            props.location.building
              ? roomCodes[props.location.building][0]
              : undefined
          }
          onChange={(e) => {
            props.onSelectLocation(
              {
                ...(props.location as LocationInfo<BuildingCode>),
                room: e.target.value as RoomCode<BuildingCode>[number]
              },
              props.index as number
            );
          }}
        >
          {roomCodes[props.location?.building as BuildingCode].map((e, i) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default TreeItem;
