import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

// subtle ripple animation
const ripple = keyframes`
  0% { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(2); opacity: 0; }
`;

// 헤더 컨테이너
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.85)" : "#ffffff"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(12px)" : "none")};
  border-bottom: 1px solid #e6e6e6;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 6px rgba(0,0,0,0.04)" : "none"};
  padding: ${({ scrolled }) => (scrolled ? "0.6rem 0" : "1rem 0")};
  transition: all 0.3s ease;
  z-index: 1000;
`;

// 내부 정렬
const NavInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 로고
const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e1e1e;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

// 메뉴 컨테이너
const NavMenu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

// 메뉴 항목
const NavLink = styled(Link)`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  transition: color 0.2s ease;

  &:hover {
    color: #5c3a21;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    background: #5c3a21;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 0;
  }

  &:hover::before {
    animation: ${ripple} 0.6s ease;
  }
`;

// Header 컴포넌트
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavInner>
        <Logo>Suho</Logo>
        <NavMenu>
          <NavLink to="hero" smooth={true} duration={500}>홈</NavLink>
          <NavLink to="about" smooth={true} duration={500}>소개</NavLink>
          <NavLink to="skills" smooth={true} duration={500}>기술</NavLink>
          <NavLink to="projects" smooth={true} duration={500}>프로젝트</NavLink>
          <NavLink to="contact" smooth={true} duration={500}>연락처</NavLink>
        </NavMenu>
      </NavInner>
    </Nav>
  );
};

export default Header;
