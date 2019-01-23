import React from "react";
import styled from "astroturf";

const Grid = styled("main")`
  min-height: 100vh;
  @media (--medium-width) {
    --rows: 1fr 1fr;
    --cols: 1fr 1fr;
    display: grid;
    grid-template-rows: var(--rows);
    grid-template-columns: var(--cols);
    transition: grid-template-columns 0.2s, grid-template-rows 0.2s;
    grid-template-areas:
      "about contact"
      "about writing";
  }
`;

const Section = styled("section")`
  padding-block: var(--section-padding-v);
  padding-inline: var(--section-padding-h);
  @media (--medium-width) {
    --section-padding-v: var(--section-padding-h);
  }
  &.about {
    grid-area: about;
    background-color: var(--primary);
    text-align: center;
    @media (--medium-width) {
      text-align: initial;
    }
  }
  &.writing {
    grid-area: writing;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    overflow: hidden;
    background-color: var(--shade-90);
    @media (--large-width) {
      text-align: right;
    }
  }
  &.contact {
    grid-area: contact;
    display: grid;
    grid-template-areas: "title" "form";
    gap: 1rem;
    background-color: var(--shade-70);
    @media (--medium-width) {
      grid-template-columns: auto 1fr;
      grid-template-areas: "title form";
      gap: 1.5rem;
    }
    @media (--large-width) {
      padding-bottom: 8rem;
    }
  }
`;

function HomeLayout({ about, writing, contact }) {
  return (
    <Grid>
      <Section about>{about}</Section>
      <Section writing>{writing}</Section>
      <Section contact>{contact}</Section>
    </Grid>
  );
}

export default HomeLayout;
