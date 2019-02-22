import React from "react";
import styled from "astroturf";

const styles = `
  padding: 0;
  list-style-position: inside;
`;

const Ul = styled("ul")`
  ${styles};
`;

const Ol = styled("ol")`
  ${styles};
`;

export function List({ as, ...rest }) {
  return as === "ol" ? <Ol {...rest} /> : <Ul {...rest} />;
}
