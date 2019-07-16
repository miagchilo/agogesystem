import React from "react";
import { Btn } from "../../styles/Buttons";
import {
  CoachingStyle,
  CoachingIntro,
  TextBox,
  Banner,
  Section
} from "./style";
import { Highlight, Underline } from "../../styles/Theme";
import animateScrollTo from "animated-scroll-to";
const Coaching = () => {
  return (
    <React.Fragment>
      <CoachingStyle>
        <CoachingIntro>
          <div className="hero">
            <TextBox className="col s12 m12 l12">
              <p className="head center-align">
                <Highlight red>HUGH OPPORTUNITY</Highlight>
              </p>
              <p className="sub center-align">
                ( ONLY 2 SPOTS LEFT! )
                <br />
                (This is an “Action-based” transformation and only 2 spots
                remain)
              </p>

              <p className="desc">
                <Highlight red>14-Week Body Transformation </Highlight>for xxx
                eager to lose fat, gain muscle, and build a well-balanced &
                functional physique!
              </p>
              <p className="desc-sub">
                We are looking for 10 xxx to be their best version ever with our
                14-Week Program to achieve your dream body, change your mindset
                and go beyond plus ultra!
              </p>
              <a
                href="#introducing"
                onClick={() => {
                  animateScrollTo(700);
                }}
                className="btn-floating pulse scroll center-align"
              >
                <i className="material-icons">arrow_drop_down</i>
              </a>
            </TextBox>
          </div>
        </CoachingIntro>
        <Banner className="col s12 m12 l12">
          <div className="center-align">
            <p className="bannerP">
              Let us help free you from the start and stop bullshit cycle/s
            </p>
            <Btn
              white
              href="/coaching"
              className="waves-effect waves-light btn pulse center-align"
            >
              Train with us now
            </Btn>
          </div>
        </Banner>
        <Section className="container">
          <h1 className="center-align">
            <Underline>IF YOU ARE </Underline>
          </h1>
          <ul>
            <li className="secP">
              <i className="icon fas fa-check" />
              struggling with achieving results in your fitness journey in the
              past.
            </li>
            <li className="secP">
              <i className="icon fas fa-check" />
              Tried different programs and latest fads recommendation yet
              nothing seems to work.
            </li>
            <li className="secP">
              <i className="icon fas fa-check" />
              Wanted to lose unwanted fat, gain muscle and finally get the body
              you've always dreamed of.
            </li>
          </ul>
          <h4 className="secP center-align">
            <Underline>
              If that's the case - finally, you're in the right place.
            </Underline>
          </h4>
          <div className="secBottom">
            <span className="agoge center-align">Agoge System </span>
            <p className="secP center-align">
              was built to help people just like you. It's our mission to
              completely transform the lives of xxx to help them achieve results
              and live a healthier life.
            </p>
            <p className="secP center-align">
              Click below to take part in the 14-week program
              <br />
              <Btn
                red
                href="/coaching"
                className="waves-effect waves-light btn pulse center-align"
              >
                Train with us now
              </Btn>
            </p>
          </div>
        </Section>
      </CoachingStyle>
    </React.Fragment>
  );
};

export default Coaching;
