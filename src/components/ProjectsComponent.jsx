import React, { useEffect, useState } from "react";
import "../styles/projects.css";
import Project from "./Project";
import ProjectCard from "./ProjectCard";

function ProjectsComponent() {
  const [title, setTitle] = useState(" ");
  const [statusTitle, setStatusTitle] = useState(false);
  const [curData, setCurData] = useState({});
  const [curProject, setCurProject] = useState(false);

  let resultTitle = "";

  const datas = [
    {
      name: "rslang",
      title: "RS-Language",
      description:
        "Education platform: Improve and enhace your English with RS-lang application",
      stacks:
        "React, React-router, TypeScript, Scss, React-hooks, Font-Awesome, REST-API, interaction Backend Server, TeamWork",
      link: "http://team48rslang.netlify.app",
      image: "../images/rslang.png",
      codeLink: "https://github.com/ray-bang8/rslang",
    },
    {
      name: "christmas-tree",
      title: "Christmas Tree",
      description: "Decorate your Christmas tree and get holiday mood",
      stacks: "JavaScript, TypeScript, Webpack, AJAX, REST-API, Font-Awesome",
      link: "https://rolling-scopes-school.github.io/shamshodisayev-JSFE2021Q3/christmas-task/",
      image: "../images/tree.png",
      codeLink: "https://github.com/ShamshodIsayev/Christmas-tree-Typescript",
    },
    {
      name: "momentum",
      title: "Momentum",
      description: "See weather mood and relax with momentum",
      stacks: "JavaScript, TypeScript, AJAX, REST-API, Font-Awesome ",
      link: "https://rolling-scopes-school.github.io/shamshodisayev-JSFE2021Q3/momentum/",
      image: "../images/momentum.png",
      codeLink:
        "https://github.com/rolling-scopes-school/shamshodisayev-JSFE2021Q3/tree/momentum/momentum",
    },
    {
      name: "art",
      title: "Cars quiz",
      description:
        "Know and check your reference about your favorite car and others",
      stacks: "JavaScript, AJAX, Webpack, REST-API, Font-Awesome ",
      link: "https://rolling-scopes-school.github.io/shamshodisayev-JSFE2021Q3/art/index.html",
      image: "../images/quiz.png",
      codeLink:
        "https://github.com/rolling-scopes-school/shamshodisayev-JSFE2021Q3/tree/art-quiz/art",
    },
    {
      name: "async-race",
      title: "Async Race",
      description: "Play car racing",
      stacks: "JavaScript, TypeScript, Webpack, AJAX, REST-API, Font-Awesome ",
      link: "https://rolling-scopes-school.github.io/shamshodisayev-JSFE2021Q3/async-race/dist/",
      image: "../images/",
      codeLink:
        "https://github.com/rolling-scopes-school/shamshodisayev-JSFE2021Q3/tree/async-race",
    },
  ];

  const datas2 = [
    {
      name: "template",
      title: "Waxom page",
      description: "SPA landing page",
      stacks: "JavaScript, Gulp, Scss, Font-Awesome, Swiper",
      link: "http://shamshod.epizy.com/P-16%20Wancxom%20Homepage/index.html",
      image: "../images/layout.png",
      codeLink: "",
    },
    {
      name: "template2",
      title: "Creativity ",
      description: "SPA landing page",
      stacks: "JavaScript, Gulp, Scss, Font-Awesome, Swiper, Photoshop",
      link: "http://shamshod.epizy.com/P-15%20Creative/index.html",
      image: "../images/layout2.png",
      codeLink: "",
    },
    {
      name: "template3",
      title: "Landing Page",
      description: "SPA landing page",
      stacks: "JavaScript, Gulp, Scss, Font-Awesome, Swiper, Photoshop ",
      link: "http://shamshod.epizy.com/P-17%20Main%20-/build/index.html",
      image: "../images/layout3.png",
      codeLink: "",
    },
  ];

  useEffect(() => {
    const htmlWord = "Projects";

    for (let letter of htmlWord) {
      resultTitle += `<span>${letter}</span>`;
    }

    setTitle(resultTitle);

    const spans = document.querySelectorAll(".projects h2 span");
    for (let span of spans) {
      span.addEventListener("mouseenter", () => span.classList.add("active"));

      span.addEventListener("mouseout", () => {
        setTimeout(() => span.classList.remove("active"), 1000);
      });
    }
    setStatusTitle(true);
  }, [statusTitle]);

  useEffect(() => {}, []);

  return (
    <div className="projects">
      <p className="projects__tag-html">{"<html>"}</p>
      <section className="projects__body">
        <p className="projects__tag">{"<body>"}</p>
        <div className="projects__body">
          <p className="projects__tag">{"<h1>"}</p>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p className="projects__tag">{"</h1>"}</p>
          <p className="projects__tag">{"<div>"}</p>
          <div className="cards">
            {datas.map((el) => {
              return (
                <ProjectCard
                  el={el}
                  setCurData={setCurData}
                  setCurProject={setCurProject}
                  key={`${parseFloat(Math.random() * 250)}`}
                />
              );
            })}

            <h4 className="cards__title">Simple Layouts</h4>
            {datas2.map((el) => {
              return (
                <ProjectCard
                  el={el}
                  setCurData={setCurData}
                  setCurProject={setCurProject}
                  key={`${parseFloat(Math.random() * 250)}`}
                />
              );
            })}
          </div>
          <p className="projects__tag">{"</div>"}</p>
        </div>
        <p className="projects__tag">{"</body>"}</p>
      </section>
      <p className="projects__tag-html">{"</html>"}</p>
      <Project el={curData} status={curProject} setCurProject={setCurProject} />
    </div>
  );
}

export default ProjectsComponent;
