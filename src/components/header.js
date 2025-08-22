import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #112240;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.img`
  height: 30px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;


const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #64ffda;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #ccd6f6;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={withPrefix("/kossi-logo.png")} alt="Logo" />
      </Link>
      <NavLinks>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/experience">Experience</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Header;

