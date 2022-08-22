import React, { Fragment, useEffect } from "react";
import QRCodePng from "../img/QRCode.png";

function QRCode() {
  const width = document.body.clientWidth;
  useEffect(() => {
    if (width > 500) alert("为保证浏览效果，请使用手机浏览本页面！");
  }, [width]);
  return (
    <Fragment>
      {width > 500 ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            background: "black",
            opacity: 0.7,
            position: "fixed",
          }}
        >
          <img
            src={QRCodePng}
            alt=""
            style={{
              height: 350,
              width: 350,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default QRCode;
