import React from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

function Header({
  menuStatus,
  setMenuStatus,
  setStatus,
  setLoadStatus,
  setPrevTitle,
  setNextTitle,
  status,
}) {
  const handlerMenuBtn = () => setMenuStatus(!menuStatus);

  return (
    <header className="header">
      <Menu
        menuStatus={menuStatus}
        setStatus={setStatus}
        setLoadStatus={setLoadStatus}
        setMenuStatus={setMenuStatus}
        setPrevTitle={setPrevTitle}
        setNextTitle={setNextTitle}
        status={status}
      />{" "}
      :
      <FontAwesomeIcon
        className="hamburger-icon"
        onClick={handlerMenuBtn}
        icon={faBars}
      />
    </header>
  );
}

export default Header;
