import React, { memo } from "react";
import styled from "astroturf";

const SmallTime = styled("time")`
  font-size: 0.875rem;
  color: var(--text-mid);
`;

function fallback(value, unit) {
  return `${value * -1} ${unit}${value === 1 ? "" : "s"} ago`;
}

const rtf = Intl.RelativeTimeFormat
  ? new Intl.RelativeTimeFormat("en", { numeric: "auto" })
  : { format: fallback };

const DAY_MS = 1000 * 60 * 60 * 24;
const WEEK_MS = DAY_MS * 7;
const MONTH_MS = DAY_MS * 31;
const YEAR_MS = DAY_MS * 365;

function getTimeUnit(ms) {
  if (ms < WEEK_MS) return { value: ms / DAY_MS, unit: "day" };
  else if (ms < MONTH_MS) return { value: ms / WEEK_MS, unit: "week" };
  else if (ms < YEAR_MS) return { value: ms / MONTH_MS, unit: "month" };
  else return { value: ms / YEAR_MS, unit: "year" };
}

function Time({ children }) {
  if (!children) return null;
  const todayMs = Date.now();
  const inputMs = new Date(children).getTime();
  const timeDifference = todayMs - inputMs;
  const { value, unit } = getTimeUnit(timeDifference);
  const roundedValue =
    unit === "day" ? Math.floor(value) : Math.round(value * 2) / 2;
  const formattedTime = rtf.format(roundedValue * -1, unit);
  return <SmallTime dateTime={children}>{formattedTime}</SmallTime>;
}

export default memo(Time);
