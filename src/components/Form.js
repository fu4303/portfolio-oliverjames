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
  box-shadow: 0.25rem 0.25rem 0 var(--shade-80);
  &:focus {
    outline: 0.25rem solid var(--shade-80);
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

export const Button = styled("button")`
  width: max-content;
  padding: 0.5rem 1rem;
  text-align: center;
  font-weight: 600;
  background-color: var(--shade-80);
  transition: color 0.2s, background-color 0.2s;
  box-shadow: 0.25rem 0.25rem 0 var(--shade-70);
  &:focus {
    /* box-shadow: 0.35rem 0.35rem 0 var(--shade-60); */
    outline: 0.25rem solid var(--shade-70);
  }
  &:hover {
    color: var(--text-light);
    background-color: var(--shade-60);
  }
  &:active {
    box-shadow: none;
    background-color: var(--shade-50);
    /* transform: translate(0.35rem, 0.35rem); */
  }
`;
