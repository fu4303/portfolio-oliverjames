import React from "react";
import styled from "astroturf";
import { Link as GatsbyLink } from "gatsby";
import Time from "./Time";
import Hidden from "./Hidden";

export function Post({ title, href, children, date, ...rest }) {
  return (
    <Link to={href} {...rest}>
      <Article>
        <h3>{title}</h3>
        <Body>{children}</Body>
        <Footer>
          <Time>{date}</Time>
        </Footer>
      </Article>
    </Link>
  );
}

export default function Writing({ posts }) {
  return (
    <PostGrid>
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
    </PostGrid>
  );
}

export const PostGrid = styled("div")`
  display: grid;
  gap: 1rem;
  @media (min-width: 65rem) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  }
`;

const Link = styled(GatsbyLink)`
  display: block;
  min-width: 12rem;
  background-color: var(--bg-light);
  border: 0.25rem solid;
  box-shadow: 0.5rem 0.5rem 0 var(--shade-60);
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
  &:last-child {
    margin-bottom: 2rem; /* Hack to pad the overflow scroll container */
    @media (min-width: 55rem) {
      margin-bottom: 0;
    }
  }
`;

const Article = styled("article")`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
  padding: 1rem;
`;

const Body = styled("p")``;

const Footer = styled("footer")`
  justify-self: end;
`;
