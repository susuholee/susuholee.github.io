import styled, { createGlobalStyle } from "styled-components";
import Header from "./component/Organisms/Header";
import HeroSection from "./component/Templates/HeroSection";
import AboutSection from "./component/Templates/AboutSection.jsx";
import SkillsSection from "./component/Templates/SkillsSection";
import ProjectsSection from "./component/Templates/ProjectsSection";
import Footer from "./component/Organisms/Footer";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    background-color: #ffffff;
    color: #1e1e1e;
    line-height: 1.6;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  section {
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }
  }
`;

// 전체 콘텐츠 래퍼
const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
