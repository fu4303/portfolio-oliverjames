import React from "react";
import styled from "astroturf";

const Grid = styled("main")`
  min-height: 100vh;
  @media (--medium-width) {
    --rows: 1.618fr 1fr;
    --cols: 1fr 1fr;
    display: grid;
    grid-template-rows: var(--rows);
    grid-template-columns: var(--cols);
    grid-template-areas:
      "about writing"
      "about social";
  }
`;

const Section = styled("section")`
  --pattern-leaves: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23ff7733' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
  --pattern-circles: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='hsl(20, 90%, 75%)' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  --pattern-curtains: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='hsl(20, 80%, 84%)' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  position: relative;
  padding-block: var(--section-padding-v);
  padding-inline: var(--section-padding-h);
  @media (--medium-width) {
    --section-padding-v: var(--section-padding-h);
  }
  &.about {
    grid-area: about;
    display: grid;
    place-content: center;
    background-color: var(--primary);
    background-image: var(--pattern-leaves);
    text-align: center;
    @media (--medium-width) {
      text-align: initial;
    }
    @media (--large-width) {
      padding-left: 3rem;
    }
  }
  &.writing {
    grid-area: writing;
    display: grid;
    gap: 1rem;
    place-content: center;
    overflow: hidden;
    background-color: var(--shade-70);
    background-image: var(--pattern-circles);
  }
  &.social {
    grid-area: social;
    display: grid;
    place-content: center;
    background-color: var(--shade-90);
    background-image: var(--pattern-curtains);
  }
`;

function HomeLayout({ about, writing, social }) {
  return (
    <Grid>
      <Section about>
        {/* <LeafPattern about /> */}
        {about}
      </Section>
      <Section writing>
        {/* <CirclePattern about /> */}
        {writing}
      </Section>
      <Section social>
        {/* <CurtainPattern about /> */}
        {social}
      </Section>
    </Grid>
  );
}

// const Svg = styled("svg")`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
// `;

// function LeafPattern({ fill = "hsl(var(--hue), 100%, 60%)" }) {
//   return (
//     <Svg viewBox="0 0 80 40">
//       <defs>
//         <pattern id="pattern" x="0" y="0" width="0.05" height="0.025">
//           <path
//             width="80"
//             height="40"
//             fill={fill}
//             fill-opacity="0.4"
//             d="M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z"
//           />
//         </pattern>
//       </defs>
//       <rect width="80" height="40" fill="url(#pattern)" />
//     </Svg>
//   );
// }

// function CirclePattern({ fill = "hsl(var(--hue), 90%, 75%)" }) {
//   return (
//     <Svg width="80" height="80" viewBox="0 0 80 80">
//       <g fill-rule="evenodd">
//         <g fill={fill} fill-opacity="0.4">
//           <path d="M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
//         </g>
//       </g>
//     </Svg>
//   );
// }

// function CurtainPattern({ fill = "hsl(var(--hue), 80%, 84%)" }) {
//   return (
//     <Svg width="88" height="24" viewBox="0 0 88 24">
//       <g fill-rule="evenodd">
//         <g id="autumn" fill={fill} fill-opacity="0.4">
//           <path d="M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z" />
//         </g>
//       </g>
//     </Svg>
//   );
// }

export default HomeLayout;
