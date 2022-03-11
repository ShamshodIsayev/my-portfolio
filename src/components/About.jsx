import React, { useEffect, useState } from "react";
import "../styles/about.css";
import AboutSkills from "./AboutSkills";

function AboutComponent() {
  const [titleHTML, setTitleHTML] = useState("");

  useEffect(() => {
    const title = "About Myself & Skills & Experience";

    let tempForHTML = "";

    for (let letter of title) {
      if (letter === " ") {
        tempForHTML += `<span>&nbsp</span>`;
      } else {
        tempForHTML += `<span>${letter}</span>`;
      }
    }

    const spans = document.querySelectorAll(".about span");

    for (let span of spans) {
      span.addEventListener("mouseenter", () => span.classList.add("active"));

      span.addEventListener("mouseout", () =>
        setTimeout(() => span.classList.remove("active"), 1000)
      );
    }
    const skills = document.querySelector(".skills");

    document.addEventListener("mousemove", (e) => {
      let left = e.pageX / 100;
      let top = e.pageY / 50 - 5;
      skills.style.boxShadow = `${left}px ${top}px 10px 1px white`;

      let rotLeft = (e.clientX - document.body.clientWidth / 2) / 100;
      let rotTop = (e.clientY - document.body.clientHeight / 2) / 100;

      skills.style.transform = `rotateY(${rotLeft}deg)`;
      skills.style.transform = `rotateX(${rotTop}deg) rotateY(${rotLeft}deg)`;
    });

    setTitleHTML(tempForHTML);
  }, [titleHTML]);

  return (
    <div className="about">
      <div className="about__info">
        <p className="about__tag-html">{"<html>"}</p>
        <div className="about__body-info">
          <p className="about__tag">{"<body>"}</p>
          <div className="about__body-info">
            <p className="about__tag">{"<h2>"}</p>
            <h2 dangerouslySetInnerHTML={{ __html: titleHTML }} />
            <p className="about__tag">{"</h2>"}</p>
            <p className="about__tag">{"<div>"}</p>
            <div className="about__des-block">
              <h5>Proweb IT center</h5>
              <p>
                Entered to IT sphere and started taking first steps as a
                Fullstack web developer{" "}
              </p>
              <hr className="about__hr" />
              <h5>Letcop </h5>
              <p>Got experience as a Frontend developer </p>
              <hr className="about__hr" />
              <h5>Rolling Scopes</h5>
              <p className="rs-des">
                Experience in RS which established by EPAM. Learnt & Practised
                in various projects.
              </p>
            </div>
            <p className="about__tag">{"</div>"}</p>
          </div>

          <p className="about__tag">{"</body>"}</p>
        </div>
        <p className="about__tag-html">{"</html>"}</p>
      </div>
      <AboutSkills />
      <h3 className="fixed-logo">SH</h3>
    </div>
  );
}

export default AboutComponent;

//  which were checked by EPAM employees and others.
