import React from "react";
import Header from "../components/Header";
import ProjectsComponent from "../components/ProjectsComponent";
import Audio from "../components/Audio";

function Projects({
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
      <ProjectsComponent />
    </div>
  );
}

export default Projects;
