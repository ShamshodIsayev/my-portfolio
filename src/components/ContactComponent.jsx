import React, { useEffect, useState } from "react";
import "../styles/contacts.css";
import pic from "../images/pic.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function ContactComponent() {
  const [titleHTML, setTitleHTML] = useState("");

  useEffect(() => {
    const title = "Contacts";

    let tempForHTML = "";

    for (let letter of title) {
      if (letter === " ") {
        tempForHTML += `<span>&nbsp</span>`;
      } else {
        tempForHTML += `<span>${letter}</span>`;
      }
    }

    setTitleHTML(tempForHTML);

    const spans = document.querySelectorAll(".contacts span");

    for (let span of spans) {
      span.addEventListener("mouseenter", () => span.classList.add("active"));

      span.addEventListener("mouseout", () =>
        setTimeout(() => span.classList.remove("active"), 1000)
      );
    }
  }, [titleHTML]);

  useEffect(() => {}, []);

  return (
    <div className="contacts">
      <div className="contacts__wrapper">
        <p className="contacts__tag-html">{"<html>"}</p>
        <section className="contacts__body">
          <p className="contacts__tag">{"<body>"}</p>
          <div className="contacts__body">
            <p className="contacts__tag">{"<h1>"}</p>
            <h2
              className="contacts__title"
              dangerouslySetInnerHTML={{ __html: titleHTML }}
            ></h2>
            <p className="contacts__tag">{"</h1>"}</p>
            <p className="contacts__tag">{"<div>"}</p>
            <ul className="contacts__ul">
              <li className="contacts__ul-li">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPVrPqMMlTPVWtzLgxbsJDWDrwsvdgxZFvqksKQTBvtCMcFfkzspjLnkwBMRmfCxsWswxL">
                  <FontAwesomeIcon
                    className="contacts__icon icon-gm"
                    icon={faEnvelope}
                  />
                </a>
              </li>
              <li className="contacts__ul-li">
                <a href="https://t.me/alwaystrybest">
                  <FontAwesomeIcon
                    className="contacts__icon icon-tg"
                    icon={faTelegram}
                  />
                </a>
              </li>
              <li className="contacts__ul-li">
                <a href="https://www.linkedin.com/in/shamshod-isayev-b58391215/">
                  {" "}
                  <FontAwesomeIcon
                    className="contacts__icon icon-in"
                    icon={faLinkedin}
                  />
                </a>
              </li>
              <li className="contacts__ul-li">
                <a href="https://www.facebook.com/shamshod.isayev">
                  {" "}
                  <FontAwesomeIcon
                    className="contacts__icon icon-fb"
                    icon={faFacebook}
                  />
                </a>
              </li>
            </ul>
            <p className="contacts__tag">{"</div>"}</p>
          </div>
          <p className="contacts__tag">{"</body>"}</p>
        </section>
        <p className="contacts__tag-html">{"</html>"}</p>
      </div>
    </div>
  );
}

export default ContactComponent;
