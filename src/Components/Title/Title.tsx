import React from "react";
import "./title.css";
type Props = {
  text: string;
};

export default function Title(props: Props) {
  return (
    <div className="appTitle">
      <img className="appImage" src="/Horseshoe.png" alt="Casteel Colt" />
      <div className="appTextContainer">
        <span className="appText">{props.text}</span>
      </div>
    </div>
  );
}
