import React from "react";

function NextPageTitle(props) {
  const { status } = props;
  const { position } = props;

  return (
    <div className={position === "next" ? "next-page" : "prev-page"}>
      {status}
    </div>
  );
}
export default NextPageTitle;
