import React from "react";
import { Link, graphql } from "gatsby";
import styled from "astroturf";

import Bio from "../components/Bio";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Container>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
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
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Container>
    );
  }
}

const Container = styled("main")`
  max-width: 45rem;
  margin: 0 auto;
  padding: 1.5rem;
  font-size: 1.125rem;
  background-color: var(--shade-96);
  box-shadow: 1rem 1rem 0 var(--shade-80);
  @media (--medium-width) {
    margin: 2.5rem auto;
    padding: 3rem;
    font-size: 1.25rem;
  }
`;

const Post = styled("div")`
  margin-top: 1.5rem;
  /* font-family: Georgia, georgia, sans-serif; */
  line-height: 1.5;
  & > * + * {
    margin-top: 1rem;
  }
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin-top: 1.5rem;
    font-family: system-ui;
    @media (--medium-width) {
      margin-top: 2rem;
    }
  }
  & a {
    text-decoration: underline;
    transition: color 0.2s;
    &:hover {
      color: var(--primary);
    }
  }
`;

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
