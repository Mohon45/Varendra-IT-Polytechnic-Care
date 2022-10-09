import React from "react";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  return (
    <div style={{ paddingTop: "20%", height: "80vh" }}>
      <HashLoader color="blue" loading={true} css={override} size={50} />
    </div>
  );
};

export default Loader;
