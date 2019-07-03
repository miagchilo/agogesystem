import React from "react";
import {
  HeroStyle,
  VideoStyle,
  TextBox,
  HeadingPrimary,
  HeadMain,
  HeadSub,
  MainContent,
  SectionClient,
  Client,
  SectionPricing
} from "./style";
import { Btn } from "../../styles/Buttons";
import video from "../../images/video.mp4";
import Typer from "../Typer";
const Landing = () => {
  return (
    <div>
      <HeroStyle>
        <VideoStyle autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </VideoStyle>
        <TextBox>
          <div className="row center">
            <HeadingPrimary>
              <HeadMain className="header col s12 light center-align hide-on-small-only">
                Calisthenics Journey Starts Here
              </HeadMain>
              <HeadSub className="header col s12 light center-align">
                unleash your full potential
              </HeadSub>
            </HeadingPrimary>
          </div>
          <div className="row center">
            <Btn
              white
              href="https://tattp://materializecss.com/getting-started.html"
              id="download-button"
            >
              Get Started
            </Btn>
          </div>
        </TextBox>
      </HeroStyle>
      {/* <blockquote>
        A lot of [newbies and enthusiasts] fail their fitness journey. Why?
        Simple. They don't know where and how to start. There are a lot of
        "gurus" out there shouting different strategies and it's overwhelming to
        even know where to start. With Agoge System, You'll go through a 14-Week
        Program that cuts through the noise and provides you a step by step
        roadmap with all the support you need to finally achieve the results you
        want. (Obviously, you have to do the work).
      </blockquote> */}
      <MainContent>
        <section className="container">
          <h2 className="center-align">the agogesystem promise</h2>
          <p className="flow-text center-align">
            At Agoge System, we promise that you will be coached by
            Practitioners of the as well. Not just businessmen who want to earn
            money. You will be treated as part of our tribe, not just a single
            transaction. We want to see you grow into the best version of
            yourself, not just forget about you after providing you a plan. We
            promise ro provide you with good programming to give you the most
            improvements in a smart and pratical way. We don't believe in the
            motto "No Pain No GAIN" instead we believe in "No Brain No Gain".
          </p>
          <Typer
            className="center-align"
            heading={"You will"}
            dataText={["Learn", "Master", "Implement"]}
          />
        </section>
      </MainContent>
      {/* section */}
      <SectionClient>
        <div className="row">
          <div className="col l4 s12 box">
            <Client>
              <div className="img-circle dan" />
              <h3>Dan</h3>
              <p className="flow-text">
                "I used to do weight training 4 years ago, I consistently hit a
                plateau in my training and frustrated. I was desperate for help
                in my training and then my friend introduce me to the agoge
                system I never been happier on my progress! Thank you agoge
                system! "
              </p>
              <a href="http://takatoshiwada.com/blog">Read More</a>
            </Client>
          </div>
          <div className="col l4 s12 box">
            <Client>
              <div className="img-circle ryan" />
              <h3>Ryan</h3>
              <p className="flow-text">
                "Since I joined agogesystem I never dreamnt of having the body
                I've always wanted, do yourself a favor be part of the family! "
              </p>
              <a href="http://takatoshiwada.com/blog">Read More</a>
            </Client>
          </div>
          <div className="col l4 s12 box">
            <Client>
              <div className="img-circle reichmond" />
              <h3>Reichmond</h3>
              <p className="flow-text">
                "I'm a family man a middle-aged father of 3, working 50+hours a
                a week and manages a personal business, I gave up the of
                becoming fit because of the lack of time and energy. but Agoge
                system proved me wrong and believed in me to my fullest
                potential, if there's a will, there's a way! Thank you, agoge
                family!"
              </p>
              <a href="http://takatoshiwada.com/blog">Read More</a>
            </Client>
          </div>
        </div>
      </SectionClient>
      {/* about us */}
      <SectionPricing>
        {/* <h2 className="center-align">the agogesystem promise</h2>
        <div className="row">
          <div className="story">TEXT</div>
        </div> */}
      </SectionPricing>
      {/* end of about us */}
    </div>
  );
};

export default Landing;
