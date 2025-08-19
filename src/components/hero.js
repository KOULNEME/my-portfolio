import React from 'react';
import { useRef } from 'react';
import useScrollReveal from '../hooks/scrollReveal';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Intro = styled.p`
  color: #64ffda;
  font-size: 1rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Tagline = styled.h2`
  font-size: 2rem;
  color: #8892b0;
  margin: 1rem 0;
`;

const Description = styled.p`
  max-width: 600px;
  font-size: 1.1rem;
  color: #a8b2d1;
`;

const Hero = () => {
    const revealRef = useRef(null);
    useScrollReveal(revealRef);
  return (
    <Section ref={revealRef}>
      <Intro>Hi, my name is</Intro>
      <Name>KOULBEME KOSSI</Name>
      <Tagline>I build things for the web.</Tagline>
      <Description>
        I'm a Computer Science and Engineering student passionate about developing Web applications, AI, and solving real-world problems through code.
      </Description>
    </Section>
  );
};

export default Hero;
