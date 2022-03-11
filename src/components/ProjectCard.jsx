import React from "react";
import images from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function ProjectCard(props) {
  const { title, description, stacks, image, name } = props.el;

  const { setCurData } = props;
  const { setCurProject } = props;

  console.log();
  const foundImg = images(name);

  function handlerCardClick() {
    console.log("selected");
    setCurProject(true);
    setCurData(props.el);
  }

  return (
    <figure className="card" onClick={handlerCardClick}>
      <div
        className="card__top"
        style={{
          background: `url(${foundImg}) no-repeat center center`,
        }}
      ></div>

      <div className="card__blur">
        {" "}
        <FontAwesomeIcon className="card__blue-icon" icon={faEye} />
      </div>
    </figure>
  );
}

export default ProjectCard;
