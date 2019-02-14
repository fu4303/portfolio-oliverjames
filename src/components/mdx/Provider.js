import React from "react";
import styled from "astroturf";
import { MDXProvider } from "@mdx-js/tag";
import { preToCodeBlock } from "mdx-utils";
import Code from "./Code";

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

export default class Provider extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <MDXProvider
        components={{
          wrapper: props => <Post {...props} />,
          pre: preProps => {
            const props = preToCodeBlock(preProps);
            // if there's a codeString and some props, we passed the test
            if (props) {
              return <Code {...props} />;
            } else {
              // it's possible to have a pre without a code in it
              return <pre {...preProps} />;
            }
          },
        }}
      >
        {children}
      </MDXProvider>
    );
  }
}
