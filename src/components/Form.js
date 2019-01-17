import React from "react";
import styled from "astroturf";

export const Label = styled.label`
  display: grid;
  grid-template-areas: "label" "input";
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Input = styled("input")`
  grid-area: input;
  padding: 0.5rem;
  /* font-weight: 400; */
  background-color: var(--bg-light);
  &:focus {
    outline: var(--block-outline);
  }
  &::placeholder {
    color: var(--text-mid);
  }
`;

export function TextInput({ id, label, ...rest }) {
  return (
    <Label htmlFor={id}>
      {label}
      <Input {...rest} />
    </Label>
  );
}
