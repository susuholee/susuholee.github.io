import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import profileImg from "../../assets/myprofile.jpg";
import { naver, tistory } from "../../assets/icons";

/* ===== Layout ===== */
const Section = styled.section`
  padding: 6rem 1rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  position: relative;
  max-width: 900px;
  width: 100%;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e5e5;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 280px 1fr;
    align-items: center;
  }
`;

/* ===== Left (프로필) ===== */
const ProfileWrap = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  padding: 4px;
  background: #fff;
  border: 2px solid #ccc;

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

/* ===== Right (텍스트) ===== */
const Right = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const SubText = styled(motion.p)`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

/* ===== Badge ===== */
const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Badge = styled(motion.span)`
  font-size: 0.8rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
`;

/* ===== Buttons ===== */
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled(Link)`
  padding: 0.65rem 1.3rem;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid #333;
  background: #333;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #fff;
    color: #333;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #333;
  text-decoration: none;
  border: 1px solid #ddd;
  background: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
    color: #fff;
  }

  img {
    width: 16px;
    height: 16px;
  }
  svg {
    font-size: 1rem;
  }
`;

/* ===== Component ===== */
const HeroSection = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const badges = [
    "React",
    "TypeScript",
    "Next.js",
    "Styled-Components",
    "Node.js",
    "React Query",
    "Zustand",
    "Redux",
  ];

  return (
    <Section id="hero">
      <Card initial="hidden" animate="show" variants={container}>
        <Inner>
          {/* LEFT */}
          <ProfileWrap>
            <ProfileImage src={profileImg} alt="프로필" />
          </ProfileWrap>

          {/* RIGHT */}
          <Right>
            <Heading>프론트엔드 개발자 이수호</Heading>

            <SubText>
              React 기반 UI/상태 관리와 인터랙션에 강점이 있습니다.{" "}
              사용자의 흐름을 끊지 않는 컴포넌트 아키텍처를 설계하고,
              모션으로 의미 있는 피드백을 만듭니다.
            </SubText>

            <BadgeRow>
              {badges.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </BadgeRow>

            <Actions>
              <CTAButton to="projects" smooth duration={500}>
                프로젝트 보기
              </CTAButton>
            </Actions>

            <ContactList>
              <ContactItem href="mailto:akakak695@naver.com">
                <img src={naver} alt="네이버 로고" /> 이메일
              </ContactItem>
              <ContactItem
                href="https://github.com/susuholee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </ContactItem>
              <ContactItem
                href="https://simplecoding77.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tistory} alt="티스토리 로고" /> 블로그
              </ContactItem>
            </ContactList>
          </Right>
        </Inner>
      </Card>
    </Section>
  );
};

export default HeroSection;
