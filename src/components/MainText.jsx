import React, { useEffect, useState } from "react";
import "../styles/main.css";
import AnimationHover from "./AnimationHover";

function MainText({ started }) {
  const [titleHtml, setTitleHtml] = useState("");
  const [letterStatus, setLetterStatus] = useState("notSetted");

  useEffect(() => {
    let letters = "";
    const title = "Hi! I'm Shamshod Isayev, web developer";

    for (let letter of title) {
      if (letter === " ") {
        letters += " ";
      } else if (letter === "!" || letter === ",") {
        letters += `<span className="info__title-letter"><i>${letter}</i></span><br/>`;
      } else {
        letters += `<span className="info__title-letter"><i>${letter}</i></span>`;
      }
    }
    setTitleHtml(letters);
    setLetterStatus("setted");
  }, []);

  useEffect(() => {
    const spans = document.querySelectorAll(".info__title span");

    if (started) {
      if (letterStatus === "setted") {
        for (let i = 0; i < spans.length; i++) {
          // eslint-disable-next-line no-unused-expressions
          i === 0 || i === 1 || i === 2
            ? spans[i].classList.add("animate")
            : "";
          if (spans[i]) {
            setTimeout(() => {
              spans[i].classList.add("active");
            }, Number(`${i}50`));
          }
        }
      }
    }
  }, [letterStatus, started]);

  return (
    <main className="info">
      <p className="info__tag-html">{"<html>"}</p>
      <section className="info__body">
        <p className="info__tag">{"<body>"}</p>
        <p className="info__tag">{"<h1>"}</p>
        <h1
          dangerouslySetInnerHTML={{ __html: titleHtml }}
          className="info__title"
        />
        <p className="info__tag">{"</h1>"}</p>
        <p className="info__tag">{"<p>"}</p>
        <p className="info__des">Front End Developer</p>
        <p className="info__tag">{"</p>"}</p>
        <p className="info__tag">{"</body>"}</p>
      </section>
      <p className="info__tag-html">{"</html>"}</p>
      <AnimationHover />
    </main>
  );
}

export default MainText;
