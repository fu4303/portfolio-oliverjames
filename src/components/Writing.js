import React from "react";
import styled from "astroturf";

const Link = styled("a")`
  display: block;
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
  grid-template-areas: "title" "body" "footer";
  gap: 0.5rem;
  padding: 1rem;
`;

const Title = styled("h3")`
  grid-area: title;
  font-weight: 900;
`;

const Body = styled("p")`
  grid-area: body;
`;

const Footer = styled("footer")`
  grid-area: footer;
  justify-self: end;
`;

const Time = styled("time")`
  font-size: 0.875rem;
  color: var(--text-mid);
`;

export function Post({ title, href, children, publishedAt, ...rest }) {
  return (
    <Link href={href} {...rest}>
      <Article>
        <Title>{title}</Title>
        <Body>{children}</Body>
        <Footer>
          <Time dateTime={publishedAt}>{publishedAt}</Time>
        </Footer>
      </Article>
    </Link>
  );
}

export const Carousel = styled("div")`
  display: grid;
  grid-template-columns: 12rem 12rem 12rem;
  gap: 1rem;
  overflow-x: scroll;
  padding-bottom: 0.5rem;
`;
