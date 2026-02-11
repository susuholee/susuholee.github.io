import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import profileImg from "../../assets/myprofile.jpg";

/* ===== Layout ===== */
const Section = styled.section`
  padding: 7rem 1rem 6rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

/* ===== Profile ===== */
const ProfileWrap = styled(motion.div)`
  width: 240px;
  height: 240px;
  margin: 0 auto;
  border-radius: 50%;
  padding: 6px;
  background: #fff;
  border: 2px solid #e5e5e5;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

/* ===== Text ===== */
const Intro = styled(motion.div)``;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #5c3a21;
  margin-bottom: 0.6rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.25;
  color: #111;

  span {
    color: #5c3a21;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  margin-top: 1.3rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
  max-width: 560px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

/* ===== Main Stack ===== */
const MainStack = styled.p`
  margin-top: 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  color: #333;

  span {
    color: #5c3a21;
    font-weight: 800;
  }
`;

/* ===== Actions ===== */
const Actions = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  background: #333;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: #111;
  }
`;

const GhostButton = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: 1px solid #ddd;
  background: #fff;
  color: #333;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f6f6f6;
  }
`;

/* ===== Tech Badges (확장 스택) ===== */
const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1.2rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Badge = styled.span`
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: #f5f5f5;
  border: 1px solid #e1e1e1;
  color: #555;
`;

/* ===== Component ===== */
const HeroSection = () => {

  return (
    <Section id="hero">
      <Container>
        {/* Profile */}
        <ProfileWrap
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage src={profileImg} alt="이수호 프로필" />
        </ProfileWrap>

        {/* Text */}
        <Intro
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>WEB DEVELOPER</Eyebrow>

        <Heading>
          AI를 서비스에 적용하는<br />
          <span>개발자 이수호</span>
        </Heading>

          <SubText>
            Cursor AI와 WindSurf 등 AI 툴을 활용해 
            기능 설계, 코드 최적화, 테스트 작성까지 
            개발 전반에 AI를 적극적으로 활용합니다.
            반복 작업을 자동화하고 생산성을 높이는 
            개발 방식을 선호합니다.
          </SubText>

          <MainStack>
            주력 스택: <span>JavaScript, React, Node.js</span>
          </MainStack>

          <Actions>
            <PrimaryButton to="projects" smooth duration={500}>
              프로젝트 보기
            </PrimaryButton>

            <GhostButton
              href="https://github.com/susuholee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </GhostButton>
          </Actions>
        </Intro>
      </Container>
    </Section>
  );
};

export default HeroSection;
