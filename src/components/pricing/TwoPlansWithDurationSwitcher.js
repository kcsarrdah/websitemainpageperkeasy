import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Heading = tw(SectionHeading)`w-full`;


const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const Plan = styled.div`
  ${tw`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`}

  ${props =>
    props.featured &&
    css`
      ${tw`border-2 border-gray-200 shadow-none`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-100 rounded-t-lg`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .slash {
    ${tw`text-xl text-gray-500`}
  }
  .duration {
    ${tw`lowercase text-gray-500 font-medium tracking-widest`}
  }
  .mainFeature {
    ${tw`text-gray-500 text-sm font-medium tracking-wide`}
  }
`;



const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-300`}
`;

export default ({
  heading = "Pricing",
  plans = null,
}) => {
  const defaultPlans = [
    {
      name: "Startup",
      durationPrices: ["$0", "$0"],
      mainFeature: `Free for first 5 users,
      $2/month/user afterwards.
      Analytics and Reporting support.
      Email/Chat support access.`,
      features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
    },
    {
      name: "Enterprise",
      durationPrices: ["$49", "$499"],
      mainFeature: `Reach out for pricing and custom quote.
      Priority support access.
      Dedicated Relationship manager.`,
      features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance", "Lifetime Updates"],
      featured: true
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>{heading}</Heading>
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan tw = "m-20" key={index} featured={plan.featured}>
              <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </PlanHeader>
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
