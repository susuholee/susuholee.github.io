import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0)"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(14px)" : "none")};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none"};
  padding: ${({ $scrolled }) => ($scrolled ? "0.6rem 0" : "1rem 0")};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const NavInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #18181b;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 0.875rem;
  font-weight: 500;
  color: #52525b;
  cursor: pointer;
  padding: 0.4rem 0;
  transition: color 0.2s ease;

  &:hover { color: #3D7EAA; }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: #3D7EAA;
    transform: scaleX(0);
    transition: transform 0.25s ease;
    transform-origin: center;
  }

  &:hover::after { transform: scaleX(1); }
  &.active { color: #3D7EAA; font-weight: 600; }
  &.active::after { transform: scaleX(1); }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #3f3f46;

  @media (max-width: 768px) { display: block; }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(0,0,0,0.07);
  padding: 1.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  animation: fadeDown 0.22s ease;

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const MobileLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #3f3f46;
  cursor: pointer;

  &.active { color: #3D7EAA; font-weight: 600; }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <Nav $scrolled={scrolled}>
      <NavInner>
        <Logo onClick={handleLogoClick}>Suho</Logo>

        <NavMenu>
          <NavLink to="hero"     smooth duration={500} spy activeClass="active">홈</NavLink>
          <NavLink to="about"    smooth duration={500} spy activeClass="active">소개</NavLink>
          <NavLink to="skills"   smooth duration={500} spy activeClass="active">기술</NavLink>
          <NavLink to="projects" smooth duration={500} spy activeClass="active">프로젝트</NavLink>
        </NavMenu>

        <MenuButton onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </MenuButton>
      </NavInner>

      {open && (
        <MobileMenu>
          <MobileLink to="hero"     smooth duration={500} spy onClick={() => setOpen(false)}>홈</MobileLink>
          <MobileLink to="about"    smooth duration={500} spy onClick={() => setOpen(false)}>소개</MobileLink>
          <MobileLink to="skills"   smooth duration={500} spy onClick={() => setOpen(false)}>기술</MobileLink>
          <MobileLink to="projects" smooth duration={500} spy onClick={() => setOpen(false)}>프로젝트</MobileLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Header;
