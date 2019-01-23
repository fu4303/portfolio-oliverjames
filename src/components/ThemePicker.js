import React, { useState, useEffect } from "react";
import styled from "astroturf";
import { RangeInput, AnimationButton, Toggle } from "./Form";

const LIGHT_HUE = 20;
const DARK_HUE = 200;

function ThemePicker() {
  const [hue, setHue] = useState(LIGHT_HUE);
  const [party, setParty] = useState(false);
  const [dark, setDark] = useState(false);
  function changeHue(event) {
    setHue(event.target.value);
  }
  useEffect(
    () => {
      document.documentElement.style.setProperty("--hue", hue);
    },
    [hue]
  );
  useEffect(
    () => {
      let interval;
      if (party) {
        interval = setInterval(() => setHue(prev => (prev + 15) % 360), 32);
      }
      return () => {
        clearInterval(interval);
        setHue(dark ? DARK_HUE : LIGHT_HUE);
      };
    },
    [party]
  );
  useEffect(
    () => {
      if (dark) {
        document.documentElement.classList.add("dark");
        setHue(DARK_HUE);
      } else {
        document.documentElement.classList.remove("dark");
        setHue(LIGHT_HUE);
      }
    },
    [dark]
  );
  return (
    <Form>
      <RangeInput
        label="Hue"
        min={0}
        max={360}
        onChange={changeHue}
        value={hue}
      />
      <Toggle
        id="dark-mode"
        label="Dark mode"
        onChange={() => setDark(!dark)}
        value={dark}
      />
      <AnimationButton onClick={() => setParty(!party)} type="button">
        Party
      </AnimationButton>
    </Form>
  );
}

const Form = styled("form")`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
`;

export default ThemePicker;
