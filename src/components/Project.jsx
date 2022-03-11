import React from "react";
import images from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Project(props) {
  const { el } = props;
  const { name, title, description, link, codeLink, image, stacks } = el;
  const { status } = props;
  const { setCurProject } = props;
  const foundImage = images(name);

  function handlerCloseBTN() {
    setCurProject(false);
  }
  return (
    <div>
      <div className={status ? "project active" : "project"}>
        <div
          className="project__top"
          style={{ background: `url(${foundImage}) no-repeat center` }}
        >
          <FontAwesomeIcon
            onClick={handlerCloseBTN}
            className="project__close-icon"
            icon={faXmark}
          />
        </div>
        <div className="project__bottom">
          <h2 className="project__bottom-title">{title}</h2>
          {name !== "template" &&
          name !== "template2" &&
          name !== "template3" ? (
            <p className="project__bottom-description">
              {description}
              <a href={codeLink}>
                <br />
                code-link
              </a>
            </p>
          ) : (
            ""
          )}
          <p className="project__bottom-stacks">{stacks}</p>
          <a className="project__bottom-code"></a>

          <div className="project__bottom-btns">
            <button className="project__bottom-btn">
              <a href={link} target="_blank" rel="noreferrer">
                View
              </a>
            </button>
          </div>
        </div>
      </div>
      <div
        className={status ? `blured` : ""}
        onClick={() => setCurProject(false)}
      ></div>
    </div>
  );
}

export default Project;
