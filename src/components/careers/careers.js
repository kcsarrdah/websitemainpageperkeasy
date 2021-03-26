import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Careers from "components/cards/ThreeColContactDetails.js";

const Position = tw.span`leading-relaxed`;
const Description = tw.span`block`;
const Location = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Careers
        heading = "Positions"
        subheading = "Careers"
        description = "A great workplace combines exceptional colleagues and hard problems."
        cards={[
          {
            title: "Front-End Engineer",
            description: (
              <>
                <Position>
                  <Description>Should be familiar with the following technologies:</Description>
                  <Description>Html,Css,Js,React</Description>
                </Position>
                <Location>Work From home</Location>
              </>
            )
          },
          {
            title: "Backend Engineer",
            description: (
              <>
                <Position>
                  <Description>Should be familiar with the following technologies:</Description>
                  <Description>Django,Node.js</Description>
                </Position>
                <Location>Work From home</Location>
              </>
            )
          },
          {
            title: "Marketng Rep",
            description: (
              <>
                <Position>
                  <Description>Relevent requirements</Description>
                  <Description>Relevent requirements</Description>
                </Position>
                <Location>Work From home</Location>
              </>
            )
          },
          {
            title: "Sales Rep",
            description: (
              <>
                <Position>
                  <Description>Relevent requirements</Description>
                  <Description>Relevent requirements</Description>
                </Position>
                <Location>Work From home</Location>
              </>
            )
          },
          {
            title: "Finance rep",
            description: (
              <>
                <Position>
                  <Description>Relevent requirements</Description>
                  <Description>Relevent requirements</Description>
                </Position>
                <Location>Work From home</Location>
              </>
            )
          },
          {
            title: "HR Manager",
            description: (
              <>
                <Position>
                  <Description>Relevent requirements</Description>
                  <Description>Relevent requirements</Description>
                </Position>
                <Location>Work From home</Location>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
