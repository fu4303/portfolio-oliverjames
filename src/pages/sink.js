import React from "react";
import styled from "astroturf";

import { TextInput, Button } from "../components/Form";

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  /* margin: 6rem 0; */
`;

function Sink() {
  return (
    <Grid>
      <TextInput id="name" label="Name" placeholder="Leia" />
      <TextInput
        as="textarea"
        id="message"
        label="Message"
        placeholder="Help me Obi Wan..."
      />
      <Button>Submit</Button>
    </Grid>
  );
}

export default Sink;
