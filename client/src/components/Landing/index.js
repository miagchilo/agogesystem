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
            At MusclePharm, we promise to develop and bring to market the
            safest, most effective and rigorously tested nutritional and sports
            supplementation products possible. The purpose of every MusclePharm
            product is to enhance an athletes performance and health - all
            without the use of banned substances. Our team philosophy is We Live
            This. As current and former athletes, we only make products that we
            personally believe in and use every day. Our company values:
          </p>
          <ul>
            <li>BUILD CONFIDENCE</li>
            <li>TRANSPARENCY</li>
            <li>RESILIENCY</li>
            <li>MOTIVATED</li>
          </ul>
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
