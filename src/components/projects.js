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

const ProjectList = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #112240;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #a8b2d1;
`;

const Tech = styled.p`
  color: #8892b0;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const Links = styled.div`
  margin-top: 1rem;
  a {
    margin-right: 1rem;
    color: #64ffda;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Projects = () => {
    const revealRef = useRef(null);
    useScrollReveal(revealRef);
  return (
    <Section ref={revealRef}>
      <Title>Projects</Title>
      <ProjectList>

        <ProjectCard>
          <ProjectTitle>Weather App</ProjectTitle>
          <Tech>React, OpenWeather API</Tech>
          <Description>
            A weather forecast app that displays real-time weather info based on your location.
          </Description>
          <Links>
            <a href="https://github.com/KOULNEME/Weather-app.git" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://weather-app-ao62.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Links>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Nature on your plate</ProjectTitle>
          <Tech>HTML5, CSS3, Bootstrap Basic JavaScript</Tech>
          <Description>
            An online restaurant website for a smart food delivery service focused on healthy, organic meals.
            It showcases modern UI design, mobile-first responsiveness, and clean, sustainable eating features.
          </Description>
          <Links>
            <a href="https://github.com/KOULNEME/Omnifood-app.git" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://nature-on-your-plate.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Links>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Object detection application</ProjectTitle>
          <Tech>HTML5, CSS3, JavaScript, TensorFlow.js</Tech>
          <Description>
             A simple Web application for Object detection in real time video. It is powered by the pre-made object detection 
             COCO-SSD model written in JavaScript with the TensorFlow.js framework. The model runs directly in the browser.
          </Description>
          <Links>
            <a href="https://github.com/KOULNEME/object-detection.git" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://object-detection-ks.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Links>
        </ProjectCard>

        {/* Add more projects here the same way */}

      </ProjectList>
    </Section>
  );
};

export default Projects;
