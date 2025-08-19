import React from 'react';
import { useRef } from 'react';
import useScrollReveal from '../hooks/scrollReveal';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #64ffda;
`;

const Text = styled.p`
  max-width: 600px;
  margin: 1rem auto;
  color: #a8b2d1;
  font-size: 1.1rem;
`;

const EmailLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const Contact = () => {
    const revealRef = useRef(null);
    useScrollReveal(revealRef);
  return (
    <Section ref={revealRef}>
      <Title>Get In Touch</Title>
      <Text>
        I’m always open to discussing new opportunities, collaborating on interesting projects, or just chatting about tech!
        Feel free to send me an email and I’ll get back to you as soon as I can.
      </Text>
      <EmailLink href="mailto:kossikoulbeme2@gmail.com">Say Hello</EmailLink>
    </Section>
  );
};

export default Contact;
