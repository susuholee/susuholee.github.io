import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import profileImg from "../../assets/myprofile.jpg";

const Section = styled.section`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 8rem 2rem 7rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 7rem 1.5rem 5rem;
  }
`;

const ProfileWrap = styled(motion.div)`
  width: 240px;
  height: 240px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid #e8e8e8;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Intro = styled(motion.div)``;

const Eyebrow = styled.p`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #3D7EAA;
  background: rgba(61,126,170,0.08);
  border: 1px solid rgba(61,126,170,0.18);
  padding: 0.3rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.4rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  color: #18181b;
  margin-bottom: 1.4rem;

  span { color: #3D7EAA; }

  @media (max-width: 768px) { font-size: 2.2rem; }
`;

const SubText = styled.p`
  font-size: 1rem;
  line-height: 1.85;
  color: #71717a;
  max-width: 520px;

  @media (max-width: 900px) { margin: 0 auto; }
`;

const MainStack = styled.p`
  margin-top: 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #3f3f46;

  span {
    color: #3D7EAA;
    font-weight: 700;
  }
`;

const Actions = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 900px) { justify-content: center; }
`;

const PrimaryButton = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 999px;
  background: #3D7EAA;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid #3D7EAA;
  transition: all 0.25s ease;

  &:hover {
    background: #5592B8;
    border-color: #5592B8;
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(61,126,170,0.3);
  }
`;

const GhostButton = styled.a`
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  border: 2px solid #e4e4e7;
  background: #fff;
  color: #3f3f46;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  transition: all 0.25s ease;
  font-weight: 500;

  &:hover {
    border-color: #3D7EAA;
    color: #3D7EAA;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #a1a1aa;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  z-index: 1;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, #a1a1aa, transparent);
`;

const HeroSection = () => {
  return (
    <Section id="hero">
      <Container>
        <ProfileWrap
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <ProfileImage src={profileImg} alt="이수호 프로필" />
        </ProfileWrap>

        <Intro
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <Eyebrow>Web Developer</Eyebrow>

          <Heading>
            변화하는 개발 흐름을 따라가는<br />
            <span>개발자 이수호</span>
          </Heading>

          <SubText>
            시대가 변화하는 만큼 개발도 변화합니다.
            노 코드 기반, BaaS 서비스를 통해 개발 속도를 높이고,
            Cursor AI, Claude Code 등 AI 툴을 활용해
            반복 작업을 자동화하는 개발 트렌드를 적극적으로 따르고 있습니다.
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
              <FaGithub size={16} /> GitHub
            </GhostButton>
          </Actions>
        </Intro>
      </Container>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <ScrollLine
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        scroll
      </ScrollIndicator>
    </Section>
  );
};

export default HeroSection;
