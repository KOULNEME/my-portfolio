import React from 'react';
import { useRef } from 'react';
import useScrollReveal from '../hooks/scrollReveal';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #64ffda;
`;

const Content = styled.div`
  margin-top: 1.5rem;
  max-width: 700px;
  line-height: 1.6;
  color: #a8b2d1;
`;

const Skills = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.5rem;
  color: #8892b0;
`;

const About = () => {
        const revealRef = useRef(null);
        useScrollReveal(revealRef);
  return (
    <Section ref={revealRef}>
      <Title>About</Title>
      <Content>
        <p>
          Hello! I'm a third-year Computer Science and Engineering student passionate about building web applications and exploring AI technologies.
        </p>
        <p>
          I enjoy solving real-world problems, learning new frameworks, and working on side projects that help me develop my
          critical and grow as a computer engineer.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <Skills>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>Node.js</li>
          <li>FastAPI</li>
          <li>Python</li>
          <li>Tailwind CSS</li>
          <li>HTML5</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>Git/GitHub</li>
          <li>TensorFlow.js</li>
          <li>Java</li>
          <li>C++</li>
          <li>PHP</li>
        </Skills>
      </Content>
    </Section>
  );
};

export default About;
