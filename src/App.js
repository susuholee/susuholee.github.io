import { createGlobalStyle } from "styled-components";
import Header from "./component/Organisms/Header";
import HeroSection from "./component/Templates/HeroSection";
import AboutSection from "./component/Templates/AboutSection.jsx";
import SkillsSection from "./component/Templates/SkillsSection";
import ProjectsSection from "./component/Templates/ProjectsSection";
import ContactSection from "./component/Templates/ContactSection";
import Footer from "./component/Organisms/Footer";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    background-color: #ffffff;
    color: #1e293b;
    line-height: 1.6;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  a { color: inherit; text-decoration: none; }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
