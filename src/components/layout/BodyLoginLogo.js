import React from "react";
import { ReactComponent as Logo } from "./logoMarket.svg";
function BodyLoginLogo() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>
      <Logo width="40%" height="200px" style={{ margin: 6 }} />
      <p style={{ width: "40%" }}>
        This market helps you shared your product with other people in
        your life
      </p>
    </div>
  );
}

export default BodyLoginLogo;
