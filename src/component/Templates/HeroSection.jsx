import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import profileImg from "../../assets/myprofile.jpg";
import { naver, tistory } from "../../assets/icons";


const steam = keyframes`
  0%   { transform: translateY(8px) scale(0.9); opacity: 0; }
  30%  { opacity: 0.8; }
  100% { transform: translateY(-22px) scale(1.05); opacity: 0; }
`;


const typing = keyframes`
  from { width: 0; }
  to   { width: 100%; }
`;
const blink = keyframes`
  0%, 49% { opacity: 0; }
  50%, 100% { opacity: 1; }
`;

const Section = styled.section`
  padding: 6rem 1rem 5rem;
  background: radial-gradient(1200px 600px at 50% 0%, #fff 0%, #f6f7f8 55%, #f0f2f3 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  position: relative;
  max-width: 920px;
  width: 100%;
  border-radius: 20px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 22px;
    padding: 1px;
    background: linear-gradient(120deg, #5c3a21, #b48b72, #d9c3b7);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 360px 1fr;
    align-items: center;
    gap: 2rem;
  }
`;

const Left = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  padding: 1.25rem 0;
`;

const RotateRing = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #5c3a21, #b48b72, #5c3a21);
  filter: blur(0.6px);
  animation: spin 12s linear infinite;
  opacity: 0.22;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ProfileWrap = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(180deg, #ffffff, #f2f2f2);
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eaeaea;
`;

const Steam = styled.div`
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;

  span {
    display: block;
    width: 6px;
    height: 16px;
    border-radius: 6px;
    background: radial-gradient(circle at 50% 30%, #5c3a2133, transparent 60%);
    animation: ${steam} 2.8s ease-in-out infinite;
  }
  span:nth-child(2) { animation-delay: .4s; }
  span:nth-child(3) { animation-delay: .8s; }
`;

const Right = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 1.9rem;
  font-weight: 700;
  color: #222;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`;

/* 타이핑 라인 */
const TypingWrapper = styled.div`
  max-width: 520px;
  margin: 0.25rem auto 0.75rem;
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  color: #3a2a22;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  font-size: 0.98rem;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const TypingText = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: ${typing} 2.6s steps(30, end) forwards;
`;

const Cursor = styled.span`
  display: inline-block;
  animation: ${blink} .9s step-end infinite;
`;

const SubText = styled(motion.p)`
  font-size: 1rem;
  color: #444;
  line-height: 1.8;
  margin-top: 0.25rem;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
`;

const Badge = styled(motion.span)`
  font-size: 0.82rem;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: #f3eeea;
  color: #5c3a21;
  border: 1px solid #e6d9d2;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1.25rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1.1rem;
  font-size: 0.9rem;
  border-radius: 999px;
  border: 1.5px solid #5c3a21;
  color: #5c3a21;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all .25s ease;

  &:hover {
    background: #5c3a21;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(92,58,33,.18);
  }
`;

const ContactList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 12px;

  @media (min-width: 520px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  font-size: 0.88rem;
  color: #5c3a21;
  text-decoration: none;
  border: 1px solid #e6d9d2;
  background: #faf7f5;
  transition: all .2s ease;

  &:hover {
    background: #5c3a21;
    color: #fff;
    transform: translateY(-1px);
  }

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  svg { font-size: 1rem; }
`;

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const badges = [
    "React",
    "TypeScript",
    "Styled-Components",
    "Framer Motion",
    "Next.js",
    "Node.js"
  ];

  return (
    <Section id="hero">
      <Card initial="hidden" animate="show" variants={container}>
        <Inner>
          {/* LEFT */}
          <Left>
            <RotateRing />
            <ProfileWrap>
              <ProfileImage
                src={profileImg}
                alt="프로필 사진"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.6 }}
              />
              <Steam>
                <span />
                <span />
                <span />
              </Steam>
            </ProfileWrap>
          </Left>

          {/* RIGHT */}
          <Right>
            <Heading
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
            >
              프론트엔드 개발자 이수호
            </Heading>

            <TypingWrapper>
              <TypingText>디테일과 사용자 경험을 집요하게 다듬습니다.</TypingText>
              <Cursor>|</Cursor>
            </TypingWrapper>

            <SubText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.55 }}
            >
              React 기반 UI/상태 관리와 인터랙션에 강점이 있습니다.{" "}
              사용자의 흐름을 끊지 않는 컴포넌트 아키텍처를 설계하고, 모션으로 의미 있는 피드백을 만듭니다.
            </SubText>

            <BadgeRow>
              {badges.map((b, i) => (
                <Badge
                  key={b}
                  initial={{ y: 6 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  {b}
                </Badge>
              ))}
            </BadgeRow>

            <Actions>
              <CTAButton to="projects" smooth duration={500}>
                프로젝트 보기
              </CTAButton>
            </Actions>

            <ContactList>
              <ContactItem href="mailto:akakak695@naver.com">
                <img src={naver} alt="네이버 로고" />
                이메일
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
                <img src={tistory} alt="티스토리 로고" />
                블로그
              </ContactItem>
            </ContactList>
          </Right>
        </Inner>
      </Card>
    </Section>
  );
};

export default HeroSection;
