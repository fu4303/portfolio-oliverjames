import React from "react";
import { graphql, Link } from "gatsby";
import styled from "astroturf";

import SEO from "../components/seo";
import Posts from "../components/Writing";
import Social from "../components/Social";
import { Jamjar } from "../components/Icons";

function Index({ data }) {
  const posts = data.allMdx.edges;
  return (
    <>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Grid>
        <About>
          <Jamjar />
          <Title>I design and develop user experiences.</Title>
          <Social />
        </About>
        <Writing>
          <h2>
            <Link to="/blog">Blog</Link>
          </h2>
          <Posts posts={posts} />
        </Writing>
      </Grid>
    </>
  );
}

export default Index;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 6) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`;

const Grid = styled("main")`
  min-height: 100vh;
  border: 0.5rem solid;
  @media (min-width: 45rem) {
    height: 100vh;
    --cols: 1fr 1.5fr;
    display: grid;
    grid-template-columns: var(--cols);
  }
`;

const About = styled("section")`
  padding-block: var(--section-padding-v);
  padding-inline: var(--section-padding-h);
  border: 0.5rem solid;
  display: grid;
  row-gap: 0.5rem;
  place-items: center;
  place-content: center;
  background-color: var(--primary);
  text-align: center;
  @media (min-width: 45rem) {
    text-align: initial;
    padding-left: 3rem;
    justify-items: start;
  }
`;

const Title = styled("h1")`
  font-size: 3rem;
  line-height: 1.1;
`;

const Writing = styled("section")`
  border: 0.5rem solid;
  padding: 2rem;
  background-color: var(--shade-70);
  @media (min-width: 45rem) {
    overflow-y: scroll;
  }
  @media (min-width: 65rem) {
    padding: 3rem;
  }
`;
