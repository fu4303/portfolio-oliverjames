import React from "react";
import { Link } from "gatsby";
import styled from "astroturf";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

import Bio from "../components/Bio";
import SEO from "../components/seo";

function BlogPostTemplate({ pageContext }) {
  // const siteTitle = data.site.siteMetadata.title;
  const { body, title, date, excerpt, previous, next } = pageContext;
  return (
    <Container>
      <SEO title={title} description={excerpt} />
      <h1>{title}</h1>
      <p>{date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      <hr />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.slug} rel="next">
              {next.title} →
            </Link>
          )}
        </li>
      </ul>
    </Container>
  );
}

const Container = styled("main")`
  max-width: 45rem;
  margin: 0 auto;
  padding: 1.5rem;
  font-size: 1.125rem;
  background-color: var(--shade-98);
  box-shadow: 1rem 1rem 0 var(--shade-80);
  @media (--medium-width) {
    margin: 2.5rem auto;
    padding: 3rem;
    font-size: 1.25rem;
  }
`;

export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     allMdx(filter: { fields: { slug: { eq: $slug } } }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 160)
//           html
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `;
