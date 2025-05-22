import React from "react";
import { Undo } from "./Undo";
import "./style.css";

export const UndoScreen = () => {
  return (
    <div className="undo-screen">
      <Undo className="undo-instance" />
    </div>
  );
};
