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

const Timeline = styled.div`
  margin-top: 2rem;
  border-left: 2px solid #233554;
  padding-left: 1.5rem;
`;

const Job = styled.div`
  margin-bottom: 2rem;
`;

const Role = styled.h3`
  color: #ccd6f6;
  font-size: 1.25rem;
  margin: 0;
`;

const Company = styled.span`
  color: #64ffda;
`;

const Dates = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
`;

const Description = styled.p`
  color: #a8b2d1;
`;

// const Link = styled.a`
//   text-decoration: None;
// `;

const Experience = () => {
    const revealRef = useRef(null);
    useScrollReveal(revealRef);
  return (
    <Section ref={revealRef}>
      <Title>Experience</Title>
      <Timeline>

        <Job>
          <Role>Computer Science Student <Company>@ Andhra University</Company></Role>
          <Dates>2023 — Present</Dates>
          <Description>
            Currently pursuing B.Tech in Computer Science Engineering. Learning data structures, algorithms, web dev, and AI.
          </Description>
        </Job>

        <Job>
          <Role>Intern in Artificial Intelligence <Company>@ 1stop</Company></Role>
          <Dates>Feb 2024 — Mar 2024</Dates>
          <Description>
            Worked on Text Classification with TensorFlow, Classification of Pet's Faces and Landmark Detection.
          </Description>
        </Job>

        <Job>
         <Role>Web Development Student <Company>@ Udemy</Company></Role>
         <Dates>Sep 2024 — Dec 2024</Dates>
         <Description>
           Completed <strong>"The Complete 2024 Web Development Bootcamp"</strong>. Learned HTML5, CSS3, React.js, JavaScript(ES6+), Node.js, RESTful APIs and built several websites as capstone projects.
           <br />
            <a href="https://www.udemy.com/certificate/UC-34a0d19f-59d8-4e2f-ba96-c0ee86de90dd/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#64ffda', 
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              }}
            onMouseOver={(e) => (e.target.style.color = '#ffffff')}
            onMouseOut={(e) => (e.target.style.color = '#64ffda')}

            >
            View Certificate
            </a>
         </Description>
        </Job>


        {/* Add more jobs or events as needed */}

      </Timeline>
    </Section>
  );
};

export default Experience;
