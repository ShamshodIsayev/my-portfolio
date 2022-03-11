import React from "react";
import "../styles/loading.css";

function Loading(props) {
  const { loadStatus } = props;
  return (
    <div className={loadStatus ? "loading active" : "loading"}>
      <div className="loading__info">
        <h6 className="loading__title">Loading</h6>
        <div className={loadStatus === true ? "load active" : "load"}></div>
      </div>
      <h3 className="fixed-logo">SH</h3>
    </div>
  );
}

export default Loading;
