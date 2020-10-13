import React, { useState } from "react";
import "./toggle.css";

type Props = {
  label: string;
  onToggle: (isNowAllowed: boolean) => void;
  value: boolean;
};
export default function Toggle(props: Props) {
  return (
    <div>
      <span className="toggleLabel">{props.label}</span>
      <label className="switch">
        <input
          className="toggle"
          type="checkbox"
          checked={props.value}
          onChange={() => {
            props.onToggle(!props.value);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
