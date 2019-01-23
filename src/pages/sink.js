import React, { useState } from "react";
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
  padding: 1rem;
  /* margin: 6rem 0; */
`;

function Sink() {
  const [val, setVal] = useState("");
  return (
    <Grid>
      <ThemePicker />
      <TextInput id="name" label="Name" placeholder="Leia" />
      <TextInput
        as="textarea"
        id="message"
        label="Message"
        placeholder="Help me Obi Wan..."
        value={val}
        onChange={e => setVal(e.currentTarget.value)}
      />
      <Button>Submit</Button>
      <Carousel>
        <Post title="My first blog post" href="#" publishedAt="2019-01-17">
          Lorem ipsum I can't think of anything to put inside this post summary
          but it really should be a fair bit longer before I can stop...
        </Post>
        <Post
          title="My first blog post with a long-ass title"
          href="#"
          publishedAt="2018-11-30"
        >
          Lorem ipsum I can't think of anything to put inside this post summary
          but it really should be a fair bit longer before I can stop...
        </Post>
        <Post title="My first blog post" href="#" publishedAt="2015-01-01">
          Lorem ipsum I can't think of anything to put inside this post...
        </Post>
      </Carousel>
    </Grid>
  );
}

export default Sink;
