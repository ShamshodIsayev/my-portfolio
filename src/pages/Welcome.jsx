import React, { useEffect, useState } from "react";
import "../styles/welcome.css";

function Welcome({ setStarted }) {
  const [titleBtnStart, setTitleBtnStart] = useState("not");
  const [desBtnStart, setDesBtnStart] = useState("not");

  function handlerWELCOME() {
    const welcome = document.querySelector(".welcome");
    const apps = document.querySelector(".apps");

    setDesBtnStart("finish");
    setTitleBtnStart("finish");

    setTimeout(() => {
      welcome.classList.remove("active");
      apps.classList.add("active");
      setStarted(true);
    }, 500);
    setTimeout(() => {
      document.querySelector(".audio").click();
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      setTitleBtnStart("start");

      setTimeout(() => {
        setDesBtnStart("start");
      }, 1000);
    }, 1500);
  }, []);

  return (
    <div className="welcome active" onClick={handlerWELCOME}>
      <div className="welcome__wrapper">
        <h4
          className={
            titleBtnStart === "start"
              ? "welcome__title started"
              : titleBtnStart === "finish"
              ? "welcome__title finished"
              : "welcome__title"
          }
        >
          WELCOME
        </h4>
        <p
          className={
            desBtnStart === "start"
              ? "welcome__des started"
              : desBtnStart === "finish"
              ? "welcome__des finished"
              : "welcome__des"
          }
        >
          Turn your ideas in to reality
        </p>
        <div className="welcome__blur"></div>
        {desBtnStart === "start" ? (
          <span className="welcome__span"> click to continue</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Welcome;
