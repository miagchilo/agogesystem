import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">agogesystem logo?</h5>
              <p class="grey-text text-lighten-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                fugit nemo tenetur laboriosam ad praesentium ducimus explicabo
                debitis? Deleniti, magnam ab nulla vitae distinctio soluta?
                Vitae fugiat aut perferendis adipisci.
              </p>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Settings</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    FAQ
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Connect</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    facebook
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Instagram
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Gmail
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            copyright{" "}
            <a
              class="orange-text text-lighten-3"
              href="http://takaktoshiwada.com"
            >
              agogesystem
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
