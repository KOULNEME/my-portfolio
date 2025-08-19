import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    background-color: #0a192f;
    color: #ccd6f6;
  }

  h1, h2, h3 {
    color: #64ffda;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
     <Header />
    <Container>{children}</Container>
  </>
);

export default Layout;

