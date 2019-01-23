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
    outline: 0.25rem solid var(--shade-70);
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
    background-color: var(--shade-50);
    /* transform: translate(0.35rem, 0.35rem); */
  }
`;

export const AnimationButton = styled(Button)`
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const sliderStyles = `
  height: 0.25rem;
  display: grid;
  align-content: center;
  background-color: var(--shade-70);
`;

const thumbStyles = `
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 0;
  border-radius: 50%;
  background-color: var(--shade-80);
  box-shadow: 0.15rem 0.15rem 0 var(--shade-60);
`;

const Range = styled("input")`
  &::-webkit-slider-runnable-track {
    ${sliderStyles};
  }
  &::-webkit-slider-thumb {
    ${thumbStyles};
  }
  &::-moz-range-track {
    ${sliderStyles};
  }
  &::-moz-range-thumb {
    ${thumbStyles};
  }
  &::-ms-track {
    ${sliderStyles};
  }
  &::-ms-thumb {
    ${thumbStyles};
  }
`;

export function RangeInput({ id, label, ...rest }) {
  return (
    <Label htmlFor={id}>
      {label}
      <Range type="range" id={id} {...rest} />
    </Label>
  );
}

const Checkbox = styled("input")`
  width: 1.75rem;
  height: 1.75rem;
  box-shadow: 0.25rem 0.25rem 0 var(--shade-70);
  background-color: var(--shade-98);
  &::after {
    content: "✔︎";
    display: block;
    font-size: 1.5rem;
    text-align: center;
    color: var(--shade-60);
    opacity: 0;
  }
  &:checked {
    &::after {
      opacity: 1;
    }
  }
`;

export function Toggle({ id, label, ...rest }) {
  return (
    <Label htmlFor={id}>
      {label}
      <Checkbox type="checkbox" id={id} {...rest} />
    </Label>
  );
}
