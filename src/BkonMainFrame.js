import React from "react";
import AIVoiceVisualizer from "./AI-voice-visualizer.svg";
import { Details } from "./Details";
import { MainPanel } from "./MainPanel";
import { Redo } from "./Redo";
import { Sidebar } from "./Sidebar";
import { Undo } from "./Undo";
import chosenSectionLine from "./chosen-section-line.svg";
import fileSeparator from "./file-separator.svg";
import moonPhase from "./moon-phase.svg";
import separator from "./separator.svg";
import "./style.css";
import "./styleguide.css";

export const BkonMainFrame = () => {
  return (
    <div className="BKON-MAIN-FRAME">
      <div className="div-2">
        <div className="text-wrapper-43">BÆKON</div>

        <div className="overlap-10">
          <Sidebar />
          <div className="year-button">
            <div className="year">2025</div>
          </div>
        </div>

        <MainPanel />
        <div className="overlap-11">
          <div className="calendar-tab">
            <div className="calendar">CALENDAR</div>
          </div>

          <div className="planner-tab">
            <div className="planner">PLANNER</div>
          </div>

          <img
            className="chosen-section-line"
            alt="Chosen section line"
            src={chosenSectionLine}
          />

          <div className="schedule-section">
            <div className="sched">SCHED</div>
          </div>
        </div>

        <div className="chat-box">
          <div className="overlap-12">
            <div className="chat-text-field">Type command here...</div>

            <img
              className="chat-file-separator"
              alt="Chat file separator"
              src={fileSeparator}
            />

            <div className="upload">+</div>
          </div>
        </div>

        <div className="theme-button">
          <div className="theme">THEME</div>
        </div>

        <div className="chat-log">
          <div className="text-wrapper-44">[chat-log]</div>
        </div>

        <div className="file-storage">
          <div className="files">FILES</div>
        </div>

        <div className="mode-button">
          <div className="mode">MODE</div>
        </div>

        <div className="settings-button">
          <div className="settings">SETTINGS</div>
        </div>

        <div className="history-button">
          <div className="history">HISTORY</div>
        </div>

        <div className="profile-button">
          <div className="profile">PROFILE</div>
        </div>

        <div className="undo-wrapper">
          <Undo className="icon-instance-node" />
        </div>

        <div className="redo-wrapper">
          <Redo className="icon-instance-node" />
        </div>

        <Details />
        <div className="work-section">
          <div className="work">WORK</div>
        </div>

        <div className="life-section">
          <div className="life">LIFE</div>
        </div>

        <div className="clock-panel">
          <div className="time-PH">11:13</div>

          <div className="clock-am-pm-PH">PM</div>

          <div className="temp">
            <div className="overlap-group-4">
              <div className="degree-symbol">°</div>

              <div className="temperature">76</div>
            </div>
          </div>

          <img className="moon-phase" alt="Moon phase" src={moonPhase} />

          <img className="separator-4" alt="Separator" src={separator} />
        </div>

        <img
          className="AI-voice-visualizer"
          alt="Ai voice visualizer"
          src={AIVoiceVisualizer}
        />
      </div>
    </div>
  );
};
