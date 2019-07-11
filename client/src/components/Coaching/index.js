import React from "react";
import { Btn } from "../../styles/Buttons";
import {
  CoachingStyle,
  CoachingIntro,
  TextBox,
  HeadingPrimary,
  HeadSub
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
      </CoachingStyle>
    </React.Fragment>
  );
};

export default Coaching;
