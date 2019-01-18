import React, { useState, useEffect } from "react";
import { Button } from "./Form";

function ThemePicker() {
  const [hue, setHue] = useState(20);
  function changeHue(event) {
    setHue(event.target.value);
  }
  useEffect(
    () => {
      document.documentElement.style.setProperty("--hue", hue);
    },
    [hue]
  );
  function partyTime() {
    const interval = setInterval(() => setHue(prev => (prev + 10) % 360), 20);
    setTimeout(() => clearInterval(interval), 5000);
  }
  return (
    <form>
      <input type="range" min={0} max={360} onChange={changeHue} value={hue} />
      <Button onClick={partyTime} type="button">
        Party
      </Button>
    </form>
  );
}

export default ThemePicker;
