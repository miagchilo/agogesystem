import React from "react";
// import { Link } from "react-router-dom";
import { FooterStyle } from "./style";

import logo from "../../images/load.png";

const Footer = () => {
  return (
    <FooterStyle class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <div className="logo-box left">
              <img src={logo} alt="agoge" className="footer_logo" />
            </div>
            <div className="right">
              <p>
                "No man has the right to be an amature in the matter of physical
                training. It is a shame for a man to grow old without seeing the
                beauty and strength of which his body is capable" ~socrates
              </p>
            </div>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Follow us on social media</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  <i class="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  <i class="fab fa-facebook-messenger" />
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  <i class="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2019 Copyright by{" "}
          <a href="http://takatoshiwada.com">Takatoshi Wada</a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
