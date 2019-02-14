import React from "react";
import styled from "astroturf";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Pre = styled("pre")`
  /* margin: 1rem 0; */
  border-radius: 0.125rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  overflow-x: scroll;
  background-color: var(--shade-96);
  color: var(--col);

  & .token-line {
    line-height: 1.3rem;
    height: 1.3rem;
  }
`;

const Code = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        theme={theme}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={{ "--col": theme.plain.color }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    );
  }
};

export default Code;
