import React from "react";
import { LoadingStyle, DesktopLoading, MobileLoading } from "./style";

import logo from "../../images/load.png";

const Loading = () => {
  return (
    <div>
      <LoadingStyle>
        <DesktopLoading className="hide-on-small-only">
          <img className="responsive-img" src={logo} alt="logo" />
        </DesktopLoading>
        <MobileLoading className="hide-on-med-and-up">
          <img className="responsive-img" src={logo} alt="logo" />
        </MobileLoading>
      </LoadingStyle>
    </div>
  );
};
export default Loading;
