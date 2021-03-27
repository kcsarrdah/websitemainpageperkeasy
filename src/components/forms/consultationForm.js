import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import Footer from "components/footers/SimpleFiveColumn.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-gray-lightest text-gray-700 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-orange-600 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-orange-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-orange-500 text-gray-100 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-orange-300 hover:text-gray-100 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {
  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Book A Free <span tw = "text-orange-500">Consultation</span> With Us.</h2>
            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">How should we address you?</Label>
                    <Input id="name-input" type="text" name="name"/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">What country do you currently live in?</Label>
                    <Input id="name-input" type="text" name="name" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Phone Number</Label>
                    <Input id="name-input" type="text" name="name" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="message-input">which company do you represent and in what capacity?</Label>
                    <Input id="name-input" type="text" name="text"/>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">What email address can we reach you at?</Label>
                    <Input id="email-input" type="email" name="email"/>
                  </InputContainer>
                </Column>
                <Column>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">Get in touch</SubmitButton>
            </form>
          </div>
        </FormContainer>
      </Content>
      <Footer />
    </Container>
  );
};
