import React from "react";
import { periods } from "../Menu/Menu";
import { BuildingCode, LocationInfo } from "../TreeSingle/TreeItem";
import "./mainButton.css";

type Props = {
  label: string;
  allowedPeriods: { p0: boolean; p7: boolean };
  locationArr: { [key in typeof periods[number]]: LocationInfo<BuildingCode> };
  onClick: (
    allowedPeriods: { p0: boolean; p7: boolean },
    locationArr: { [key in typeof periods[number]]: LocationInfo<BuildingCode> }
  ) => void;
};

export default function MainButton(props: Props) {
  return (
    <div
      className="bigButton"
      onClick={() => props.onClick(props.allowedPeriods, props.locationArr)}
    >
      <span className="buttonLabel">{props.label}</span>
    </div>
  );
}
