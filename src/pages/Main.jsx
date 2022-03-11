import React from "react";
import Header from "../components/Header";
import MainText from "../components/MainText";
import Audio from "../components/Audio.jsx";
import "../styles/main.css";
import ResumeBtn from "../components/ResumeBtn";

function Main({
  started,
  menuStatus,
  setMenuStatus,
  setStatus,
  setLoadStatus,
  setPrevTitle,
  setNextTitle,
  played,
  setPlayed,
  audioStatus,
  setAudioStatus,
  status,
  sound,
}) {
  return (
    <div className="main">
      <Header
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
        setStatus={setStatus}
        setLoadStatus={setLoadStatus}
        setPrevTitle={setPrevTitle}
        setNextTitle={setNextTitle}
        status={status}
      />
      <MainText started={started} />
      <Audio
        played={played}
        setPlayed={setPlayed}
        audioStatus={audioStatus}
        setAudioStatus={setAudioStatus}
        sound={sound}
      />
      <ResumeBtn />
      <h3 className="fixed-logo">SH</h3>
    </div>
  );
}

export default Main;
