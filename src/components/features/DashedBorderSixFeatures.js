import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-orange-300 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-orange-300 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-orange-300`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Works on any device",
      description: "Perkeasy is developed as an easy to use, responsive web-app that can be accessed on any device."
    },
    { imageSrc: SupportIconImage, title: "Remote Friendly",
      description: "There’s something for everyone in our curated global marketplace." },
    { imageSrc: CustomizeIconImage, title: "Setup and let it work its magic",
      description: "Designed to require minimal attention post setup. Save hours managing employee benefits." },
    { imageSrc: ReliableIconImage, title: "Inclusive by design",
      description: "With categories like food, sustainability,‍ mental health, family, fitness etc. There's something for everyone." },
    { imageSrc: FastIconImage, title: "Customizable",
      description: "Brand your programs by adding personal flare, which aligns with your company strategy." },
    { imageSrc: SimpleIconImage, title: "Use multiple integrations",
      description: "Get in-depth insight into your team’s benefit preferences, allowing you to care better and deeper for your employees." }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-orange-300">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
