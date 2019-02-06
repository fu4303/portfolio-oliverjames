import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "astroturf";

const IMG_SIZE = 48;

export default function About() {
  return (
    <StaticQuery
      query={aboutQuery}
      render={data => {
        return (
          <>
            <TitleWrapper>
              <Title>I design and develop user experiences.</Title>
              <Subtitle>@oliverjam</Subtitle>
              <ImageWrapper>
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  width={IMG_SIZE}
                  height={IMG_SIZE}
                  alt=""
                />
              </ImageWrapper>
            </TitleWrapper>
          </>
        );
      }}
    />
  );
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const TitleWrapper = styled("div")`
  display: grid;
  grid-template-areas: "image subtitle" "title title" "social social";
  grid-template-columns: auto 1fr;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  align-items: center;
`;

const Title = styled("h1")`
  grid-area: title;
  font-size: 3rem;
  line-height: 1.1;
`;

const Subtitle = styled("p")`
  grid-area: subtitle;
  font-size: 1.25rem;
  font-weight: 400;
  /* text-transform: uppercase; */
  /* font-variant-caps: small-caps; */
  letter-spacing: 1px;
`;

const ImageWrapper = styled("div")`
  grid-area: image;
  display: inline-block;
  width: ${IMG_SIZE / 16}rem;
  height: ${IMG_SIZE / 16}rem;
  /* margin-top: 1rem;
  margin-bottom: calc(
    (${IMG_SIZE / 16}rem / 2) + var(--section-padding-v) * -1
  ); */
  border-radius: 50%;
  overflow: hidden;
  @media (--medium-width) {
    margin-bottom: 0;
  }
  @media (--large-width) {
    /* display: none; */
  }
`;
