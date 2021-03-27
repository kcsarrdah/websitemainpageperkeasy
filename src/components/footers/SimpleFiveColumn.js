import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import LogoImage from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/Instagram-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-orange-300 hocus:border-orange-300 pb-1 transition duration-300`;

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
            <Link href= "/"><LogoText>Perkeasy</LogoText></Link>
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/perkeasy" target = "_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/perkeasy" target = "_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com" target = "_blank">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/perkeasy/" target = "_blank">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/perkeasy/about/" target = "_blank">
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/faq">FAQs</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/terms-of-service">Terms Of Service</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>About Perkeasy</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/about-us">About Us</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/blog">Blog</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/careers">Careers</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/contact-us">Contact Us</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
