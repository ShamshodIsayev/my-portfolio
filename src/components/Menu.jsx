import React from "react";
import "../styles/menu.css";

function Menu({
  menuStatus,
  setStatus,
  setLoadStatus,
  setMenuStatus,
  setPrevTitle,
  setNextTitle,
  status,
}) {
  function handlerMenuBtns(e) {
    setMenuStatus(false);
    setLoadStatus(true);
    setNextTitle(status);
    setPrevTitle(status);
    setTimeout(() => {
      setLoadStatus(false);
    }, 1000);

    setTimeout(() => {
      const targetPage = e.target.textContent;
      setStatus(targetPage);
    }, 500);
  }
  return (
    <ul className={menuStatus ? "menu active" : "menu"}>
      <li className="menu__li" onClick={handlerMenuBtns}>
        Main
      </li>
      <li className="menu__li" onClick={handlerMenuBtns}>
        About
      </li>
      <li className="menu__li" onClick={handlerMenuBtns}>
        Projects
      </li>
      <li className="menu__li" onClick={handlerMenuBtns}>
        Contacts
      </li>
    </ul>
  );
}

export default Menu;

//
