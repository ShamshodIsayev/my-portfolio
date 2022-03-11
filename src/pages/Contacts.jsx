import React from "react";
import ContactComponent from "../components/ContactComponent";
import Header from "../components/Header";
import Audio from "../components/Audio";

function Contacts({
  menuStatus,
  setMenuStatus,
  setStatus,
  setLoadStatus,
  setPrevTitle,
  setNextTitle,
  status,
  played,
  setPlayed,
  audioStatus,
  setAudioStatus,
  sound,
}) {
  return (
    <div>
      <Header
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
        setStatus={setStatus}
        setLoadStatus={setLoadStatus}
        setPrevTitle={setPrevTitle}
        setNextTitle={setNextTitle}
        status={status}
      />
      <Audio
        played={played}
        setPlayed={setPlayed}
        audioStatus={audioStatus}
        setAudioStatus={setAudioStatus}
        sound={sound}
      />
      <ContactComponent />
    </div>
  );
}

export default Contacts;
