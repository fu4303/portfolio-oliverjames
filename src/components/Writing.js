import React from "react";
import styled from "astroturf";
import { StaticQuery, graphql } from "gatsby";
import Time from "./Time";

export function Post({ title, href, children, date, ...rest }) {
  return (
    <Link href={href} {...rest}>
      <Article>
        <Title>{title}</Title>
        <Body>{children}</Body>
        <Footer>
          <Time>{date}</Time>
        </Footer>
      </Article>
    </Link>
  );
}

export default function Writing() {
  return (
    <>
      <h2>Writing</h2>
      <StaticQuery
        query={postsQuery}
        render={data => {
          const posts = data.allMarkdownRemark.edges;
          return (
            <Carousel>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <Post
                    key={node.fields.slug}
                    title={title}
                    date={node.frontmatter.date}
                    href={node.fields.slug}
                  >
                    {node.excerpt}
                  </Post>
                );
              })}
            </Carousel>
          );
        }}
      />
    </>
  );
}

const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

export const Carousel = styled("div")`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  padding-bottom: 0.5rem;
`;

const Link = styled("a")`
  display: block;
  min-width: 12rem;
  background-color: var(--bg-light);
  box-shadow: 0.25rem 0.25rem 0 var(--shade-80);
  &:focus {
    background-color: var(--shade-96);
  }
  &:hover {
    cursor: pointer;
  }
  &:hover h3,
  &:focus h3 {
    text-decoration: underline;
  }
`;

const Article = styled("article")`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
  padding: 1rem;
`;

const Title = styled("h3")`
  font-weight: 900;
`;

const Body = styled("p")``;

const Footer = styled("footer")`
  justify-self: end;
`;
