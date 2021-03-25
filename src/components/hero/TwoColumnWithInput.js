import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import prototypeIllustrationImageSrc from "../../images/prototype-illustration.svg";
import StatsIllustrationSrc from "../../images/stats-illustration.svg";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const imageSrc = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80";

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-orange-300 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-orange-300 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-orange-500 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center py-20 lg:justify-end items-center`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;


export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn tw = "px-10">
            <Heading>
              Flexible perks your employees would love.
            </Heading>
            <Paragraph>
              Perkeasy is the easiest way to give every employee their own personalised benefits plan.
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>SignUp for Beta</button>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>

        <TwoColumn>
          <LeftColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={prototypeIllustrationImageSrc} alt="Design Illustration" />
            </IllustrationContainer>
          </LeftColumn>
          <RightColumn tw = "px-10">
            <Heading>
              Better People leadership.
            </Heading>
            <Paragraph>
              Make data-driven decisions, ensure everyone is happy, and add hours back to your week by consolidating your perks management.
            </Paragraph>
          </RightColumn>
        </TwoColumn>

        <TwoColumn>
          <LeftColumn tw = "px-10">
            <Heading>
              Great for Diverse, Modern Teams
            </Heading>
            <Paragraph>
              Whether you're remote, a new parent, a recent grad, a pet owner or a fitness buff you're empowered to choose the perks that matter to you. Set yourself up for success and bring your best self to work.
            </Paragraph>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={imageSrc} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>

        <TwoColumn>
          <LeftColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={StatsIllustrationSrc} alt="Design Illustration" />
            </IllustrationContainer>
          </LeftColumn>
          <RightColumn tw= "px-20"styles="padding-left:50px;">
            <Heading>
              Your finance team will thank you.
            </Heading>
            <Paragraph>
              Replace the painful, error-prone reimbursement processes with a cost-effective, high ROI perk program.
            </Paragraph>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
