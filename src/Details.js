import React from "react";
import "./style.css";

export const Details = () => {
  return (
    <div className="details">
      <p className="details-PH-text-sec">
        This is where secondary details will go, extra info, etc. and etc. and
        etc. and etc.
      </p>

      <p className="details-PH-text">
        This is where details of the hour block activities go, as well as for
        the quarter, day, week, month, or year selected. Default on deslct
      </p>

      <div className="details-window" />
    </div>
  );
};
