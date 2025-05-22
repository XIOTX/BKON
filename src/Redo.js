import React from "react";
import { Redo } from "./Redo";
import "./style.css";

export const RedoScreen = () => {
  return (
    <div className="redo-screen">
      <Redo className="redo-instance" />
    </div>
  );
};
