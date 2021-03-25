import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import LogoImage from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-orange-500 hocus:border-orange-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-gray-700`;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Perkeasy</LogoText>
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Homepage</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">FAQs</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>About Perkeasy</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Company</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Careers</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Blog</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
