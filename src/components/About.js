import React from "react";
import styled from "astroturf";
import { Jamjar } from "./Icons";

const IMG_SIZE = 48;

export default function About() {
  return (
    <>
      <TitleWrapper>
        <Title>I design and develop user experiences.</Title>
        <Subtitle>@oliverjam</Subtitle>
        <ImageWrapper>
          <Jamjar />
        </ImageWrapper>
      </TitleWrapper>
    </>
  );
}

const TitleWrapper = styled("div")`
  display: grid;
  grid-template-areas: "image subtitle" "title title" "social social";
  grid-template-columns: auto auto;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  align-items: center;
  @media (--medium-width) {
    grid-template-columns: auto 1fr;
  }
`;

const Title = styled("h1")`
  grid-area: title;
  font-size: 3rem;
  line-height: 1.1;
`;

const Subtitle = styled("p")`
  grid-area: subtitle;
  justify-self: start;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const ImageWrapper = styled("div")`
  grid-area: image;
  justify-self: end;
  display: inline-block;
  width: ${IMG_SIZE / 16}rem;
  height: ${IMG_SIZE / 16}rem;
`;
