import React from "react";
import { LoadingStyle, LoadingLogo } from "./style";

import logo from "../../images/load.png";

const Loading = () => {
  return (
    <div>
      <LoadingStyle>
        <LoadingLogo>
          <img className="responsive-img" src={logo} alt="logo" />
        </LoadingLogo>
      </LoadingStyle>
    </div>
  );
};
export default Loading;
