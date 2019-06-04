import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "astroturf";
import { Twitter, Github, LinkedIn, Mail } from "./Icons";

export default function Social() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { social } = data.site.siteMetadata;
        return (
          <>
            <Container>
              <a
                href={`https://twitter.com/${social.twitter}`}
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href={`https://github.com/${social.github}`}
                aria-label="Github"
              >
                <Github />
              </a>
              <a
                href={`https://linkedin.com/in/${social.linkedIn}`}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </a>
              <Email href="mailto:hello@oliverjam.es">
                <Mail size={24} />
                hello@oliverjam.es
              </Email>
            </Container>
          </>
        );
      }}
    />
  );
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          linkedIn
        }
      }
    }
  }
`;

const Container = styled("div")`
  width: max-content;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

const Email = styled("a")`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: center;
  font-weight: 900;
  transition: color 0.2s;
  &:hover {
    text-decoration: underline;
  }
`;
