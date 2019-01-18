import React, { useState, useEffect } from "react";
import styled from "astroturf";
import { RangeInput, AnimationButton, Toggle } from "./Form";

const INITIAL_HUE = 20;

function ThemePicker() {
  const [hue, setHue] = useState(INITIAL_HUE);
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
        setHue(INITIAL_HUE);
      };
    },
    [party]
  );
  useEffect(
    () => {
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [dark]
  );
  return (
    <form>
      <RangeInput
        label="Hue"
        min={0}
        max={360}
        onChange={changeHue}
        value={hue}
      />
      <AnimationButton onClick={() => setParty(!party)} type="button">
        Party
      </AnimationButton>
      <Toggle label="Dark mode" onChange={() => setDark(!dark)} value={dark} />
    </form>
  );
}

export default ThemePicker;
