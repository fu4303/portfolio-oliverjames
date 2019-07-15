import React from "react";
import { graphql } from "gatsby";
import styled from "astroturf";

import SEO from "../components/seo";
import Posts from "../components/Writing";

function Index({ data }) {
  const posts = data.allMdx.edges;
  return (
    <Container>
      <SEO title="Blog" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>Blog</h1>
      <Posts posts={posts} />
    </Container>
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

const Container = styled("main")`
  min-height: 100vh;
  border: 0.5rem solid;
  padding: 2rem;
  background-color: var(--shade-70);
  @media (min-width: 65rem) {
    padding: 3rem;
  }

  & > * + * {
    margin-top: 2rem;
  }
`;
