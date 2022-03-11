import "./App.css";
import About from "./pages/About";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import { Howl } from "howler";
import NextPageTitle from "./components/NextPageTitle";
import Contacts from "./pages/Contacts";
const aud = require("./audio/tech.mp3");

function App() {
  const [status, setStatus] = useState("Main");
  const [loadStatus, setLoadStatus] = useState(false);
  const [nextTitle, setNextTitle] = useState("About");
  const [prevTitle, setPrevTitle] = useState("");
  const [started, setStarted] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const [played, setPlayed] = useState("pause");
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState({});

  const menus = ["Main", "About", "Projects", "Contacts"];

  function handlerRightClick() {
    setLoadStatus(true);
    setTimeout(() => {
      setLoadStatus(false);
    }, 1000);
    setTimeout(() => {
      if (status === "Main") setStatus("About");
      if (status === "About") setStatus("Projects");
      if (status === "Projects") setStatus("Contacts");
      setNextTitle(getNextTitle(status));
      setPrevTitle(status);
    }, 500);
  }

  function handlerLeftClick() {
    setLoadStatus(true);
    setTimeout(() => {
      setLoadStatus(false);
    }, 1000);
    setTimeout(() => {
      if (status === "Contacts") setStatus("Projects");
      if (status === "Projects") setStatus("About");
      if (status === "About") setStatus("Main");
    }, 500);

    setPrevTitle(status);
    setNextTitle(getNextTitle(status));
  }

  const getNextTitle = (status) => {
    const curPage =
      status === "Main"
        ? "About"
        : status === "About"
        ? "Projects"
        : status === "Projects"
        ? "Contacts"
        : "";
    const index = menus.indexOf(curPage);
    console.log(index, menus[index + 1]);
    return menus[index + 1];
  };

  const getPrevTitle = (status) => {
    const curPage =
      status === "Projects"
        ? "About"
        : status === "About"
        ? "Main"
        : status === "Contacts"
        ? "Projects"
        : "";
    const index = menus.indexOf(curPage);
    console.log(index, menus[index - 1]);
    return menus[index + 1];
  };

  useEffect(() => {
    setSound(
      new Howl({
        src: [aud],
        html5: true,
        loop: true,
      })
    );
  }, []);

  return (
    <div className="App">
      <Welcome setStarted={setStarted} />
      <div className="apps">
        {status !== "Main" && !loadStatus ? (
          <div className="left-side-icon" onClick={handlerLeftClick}>
            <div style={{ position: `relative` }}>
              <FontAwesomeIcon
                className="chevron-btn left-btn"
                icon={faChevronLeft}
              />
              <NextPageTitle position={"prev"} status={prevTitle} />
            </div>
          </div>
        ) : (
          ""
        )}
        {status === "Main" ? (
          <Main
            started={started}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            setStatus={setStatus}
            setLoadStatus={setLoadStatus}
            setPrevTitle={setPrevTitle}
            setNextTitle={setNextTitle}
            status={status}
            played={played}
            setPlayed={setPlayed}
            audioStatus={audioStatus}
            setAudioStatus={setAudioStatus}
            sound={sound}
          />
        ) : (
          ""
        )}
        {status === "About" ? (
          <About
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            setStatus={setStatus}
            setLoadStatus={setLoadStatus}
            setPrevTitle={setPrevTitle}
            setNextTitle={setNextTitle}
            status={status}
            played={played}
            setPlayed={setPlayed}
            audioStatus={audioStatus}
            setAudioStatus={setAudioStatus}
            sound={sound}
          />
        ) : (
          ""
        )}
        {status === "Projects" ? (
          <Projects
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            setStatus={setStatus}
            setLoadStatus={setLoadStatus}
            setPrevTitle={setPrevTitle}
            setNextTitle={setNextTitle}
            status={status}
            played={played}
            setPlayed={setPlayed}
            audioStatus={audioStatus}
            setAudioStatus={setAudioStatus}
            sound={sound}
          />
        ) : (
          ""
        )}

        {status === "Contacts" ? (
          <Contacts
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            setStatus={setStatus}
            setLoadStatus={setLoadStatus}
            setPrevTitle={setPrevTitle}
            setNextTitle={setNextTitle}
            status={status}
            played={played}
            setPlayed={setPlayed}
            audioStatus={audioStatus}
            setAudioStatus={setAudioStatus}
            sound={sound}
          />
        ) : (
          ""
        )}

        {status !== "Contacts" && !loadStatus ? (
          <div className="right-side-icon" onClick={handlerRightClick}>
            <div style={{ position: `relative` }}>
              <FontAwesomeIcon
                className="chevron-btn right-btn"
                icon={faChevronRight}
              />
              <NextPageTitle position={"next"} status={nextTitle} />
            </div>
          </div>
        ) : (
          ""
        )}

        <Loading loadStatus={loadStatus} />
      </div>
    </div>
  );
}

export default App;
