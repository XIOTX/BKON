import React from "react";
import dateSwitchAccentLines from "./date-switch-accent-lines.svg";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <img
        className="date-switch-accent"
        alt="Date switch accent"
        src={dateSwitchAccentLines}
      />
    </div>
  );
};
