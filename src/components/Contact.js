import React from "react";
import styled from "astroturf";
import { TextInput, Button } from "./Form";

export default function Contact() {
  return (
    <>
      <Title>Get in touch</Title>
      <Form
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <TextInput
          id="name"
          name="name"
          label="Name"
          placeholder="Leia..."
          required
        />
        <TextInput
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="l.organa@senate.rep..."
          required
        />
        <TextInput
          as="textarea"
          id="message"
          name="message"
          label="Message"
          placeholder="Help me Obi Wan..."
          required
        />
        <Button>Submit</Button>
      </Form>
    </>
  );
}

const Title = styled("h2")`
  @media (min-width: 45rem) {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    text-align: right;
  }
`;

const Form = styled("form")`
  display: grid;
  gap: 1rem;
  align-content: start;
`;
