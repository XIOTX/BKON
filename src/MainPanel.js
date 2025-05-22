import React from "react";
import { ElementAA } from "./ElementAA";
import { ElementPP } from "./ElementPP";
import { ElementAP } from "./ElementAP";
import { ElementPA } from "./ElementPA";
import dateSwitchAccentLines from "./date-switch-accent-lines.svg";
import "./style.css";

export const MainPanel = () => {
  return (
    <div className="main-panel">
      <ElementAP />
      <ElementPP />
      <ElementPA />
      <ElementAA />
      <div className="overlap-9">
        <img
          className="date-switch-accent"
          alt="Date switch accent"
          src={dateSwitchAccentLines}
        />

        <div className="navbar">
          <div className="element-mon-date">3</div>

          <div className="element-nd-mon-date">10</div>

          <div className="element-rd-mon-date">24</div>

          <div className="element-th-mon-date">17</div>

          <div className="element-mon-date-2">31</div>
        </div>

        <div className="date-slot-tue">4</div>

        <div className="date-slot-wed">5</div>

        <div className="date-slot-thu">6</div>

        <div className="date-slot-fri">7</div>

        <div className="date-slot-sat">8</div>

        <div className="date-slot-sun">9</div>

        <div className="monday-tab">
          <div className="text-wrapper-37">Mo</div>
        </div>

        <div className="tuesday-tab">
          <div className="text-wrapper-38">Tu</div>
        </div>

        <div className="wednesday-tab">
          <div className="text-wrapper-37">We</div>
        </div>

        <div className="thursday-tab">
          <div className="text-wrapper-39">Th</div>
        </div>

        <div className="friday-tab">
          <div className="text-wrapper-40">Fr</div>
        </div>

        <div className="saturday-tab">
          <div className="text-wrapper-41">Sa</div>
        </div>

        <div className="sunday-tab">
          <div className="text-wrapper-39">Su</div>
        </div>
      </div>

      <div className="overlap-10">
        <div className="highlights-list">
          Also overrrrrrrrrrrrrrrrrrrrrrrr
          <br />
          Over
          <br />
          Here
          <br />
          Too
          <br />
          Yea
        </div>

        <p className="highlights-list-left">
          This is where bullet point rrrrrrrrr
          <br />
          Highlighted and upcoming events
          <br />
          For the week will show
          <br />
          If there are any
          <br />
          To show
        </p>

        <div className="details-window" />
      </div>
    </div>
  );
};
