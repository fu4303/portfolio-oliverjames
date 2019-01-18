import React from "react";
import styled from "astroturf";

import { TextInput, Button } from "../components/Form";
import { Post, Carousel } from "../components/Writing";
import ThemePicker from "../components/ThemePicker";

const Grid = styled.div`
  max-width: 40rem;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  /* margin: 6rem 0; */
`;

function Sink() {
  return (
    <Grid>
      <ThemePicker />
      <TextInput id="name" label="Name" placeholder="Leia" />
      <TextInput
        as="textarea"
        id="message"
        label="Message"
        placeholder="Help me Obi Wan..."
      />
      <Button>Submit</Button>
      <Carousel>
        <Post title="My first blog post" href="#" publishedAt="2019-01-01">
          Lorem ipsum I can't think of anything to put inside this post summary
          but it really should be a fair bit longer before I can stop...
        </Post>
        <Post title="My first blog post" href="#" publishedAt="2019-01-01">
          Lorem ipsum I can't think of anything to put inside this post summary
          but it really should be a fair bit longer before I can stop...
        </Post>
        <Post title="My first blog post" href="#" publishedAt="2019-01-01">
          Lorem ipsum I can't think of anything to put inside this post...
        </Post>
      </Carousel>
    </Grid>
  );
}

export default Sink;
