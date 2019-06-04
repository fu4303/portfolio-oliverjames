import React from "react";
import { Link } from "gatsby";
import styled from "astroturf";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { Jamjar } from "../components/Icons";

// import Bio from "../components/Bio";
import SEO from "../components/seo";

function BlogPostTemplate({ pageContext }) {
  // const siteTitle = data.site.siteMetadata.title;
  const {
    body,
    excerpt,
    frontmatter,
    timeToRead,
    previous,
    next,
  } = pageContext;
  const { title, date, readableDate, tags } = frontmatter;
  return (
    <Layout>
      <Center>
        <PostContainer>
          <Link to="/" aria-label="Back to home page">
            <Jamjar />
          </Link>
          <SEO title={title} description={excerpt} keywords={tags} />
          <h1>{title}</h1>
          <Metadata>
            <time dateTime={date}>{readableDate}</time>
            <span aria-hidden="true">•</span>
            <span>{timeToRead} minute read</span>
          </Metadata>
          <MDXRenderer>{body}</MDXRenderer>
          {/* <Bio /> */}
        </PostContainer>
        <RelatedContainer>
          {next && (
            <li>
              <RelatedLink to={next.slug} rel="next" aria-label="Next post">
                ← {next.frontmatter.title}
              </RelatedLink>
            </li>
          )}

          {previous && (
            <li>
              <RelatedLink
                to={previous.slug}
                rel="prev"
                aria-label="Previous post"
              >
                {previous.frontmatter.title} →
              </RelatedLink>
            </li>
          )}
        </RelatedContainer>
      </Center>
    </Layout>
  );
}

const Layout = styled.div`
  padding-bottom: 2rem;
`;

const Center = styled.div`
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 50rem) {
    margin-top: 2rem;
  }
`;

const PostContainer = styled("main")`
  box-shadow: 0.5rem 0.5rem 0 var(--shade-60);
  border: 0.5rem solid;
  padding: 1.5rem;
  font-size: 1.125rem;
  background-color: var(--shade-98);
  @media (min-width: 40rem) {
    box-shadow: 1rem 1rem 0 var(--shade-60);
    border: 1rem solid;
    padding: 2.5rem;
    font-size: 1.25rem;
  }
  @media (min-width: 50rem) {
    margin: 2.5rem auto;
    padding: 4rem;
    font-size: 1.375rem;
  }
`;

const Metadata = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 0.5rem;
`;

const RelatedContainer = styled("ul")`
  margin: 2rem 1rem 0;
  display: grid;
  gap: 1.5rem;
  padding: 0;
  list-style: none;
  font-size: 1.25rem;
  @media (min-width: 50rem) {
    margin: 2rem 0;
    grid-template-columns: 1fr 1fr;
    & > *:last-child {
      grid-column: 2 / 3;
    }
  }
`;

const RelatedLink = styled(Link)`
  display: block;
  padding: 1rem;
  border: 0.5rem solid;
  box-shadow: 0.5rem 0.5rem 0 var(--shade-60);
  background-color: var(--shade-98);
  font-weight: 900;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 40rem) {
    border: 1rem solid;
    box-shadow: 1rem 1rem 0 var(--shade-60);
  }
`;
export default BlogPostTemplate;
