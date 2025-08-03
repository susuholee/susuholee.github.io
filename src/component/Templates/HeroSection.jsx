import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import profileImg from "../../assets/myprofile.jpg";

const drip = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(40px); opacity: 0; }
`;

const Section = styled.section`
  padding: 6rem 1rem 5rem;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 3rem 2rem;
  max-width: 720px;
  width: 100%;
  border-radius: 1.25rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
  text-align: center;
  position: relative;
`;

const CoffeeContainer = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
`;

const DripOrigin = styled.div`
  width: 8px;
  height: 8px;
  background-color: #5c3a21;
  border-radius: 50%;
  margin: 0 auto;
`;

const DripDrop = styled.div`
  width: 6px;
  height: 6px;
  background-color: #5c3a21;
  border-radius: 50%;
  margin: 4px auto 0;
  animation: ${drip} 2.5s infinite ease-in-out;
`;

const ProfileImage = styled(motion.img)`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ddd;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Heading = styled(motion.h1)`
  font-size: 1.85rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const SubText = styled(motion.p)`
  font-size: 1.05rem;
  color: #444;
  line-height: 1.7;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.8rem;
  font-size: 1rem;
  background-color: #5c3a21;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e2a1e;
  }
`;

const HeroSection = () => {
  return (
    <Section id="hero">
      <Card
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CoffeeContainer>
          <DripOrigin />
          <DripDrop />
        </CoffeeContainer>

        <ProfileImage
          src={profileImg}
          alt="프로필 사진"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        <Heading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          프론트엔드 개발자 이수호<br />
          디테일과 사용자 경험을 중시합니다.
        </Heading>

        <SubText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          React 기반 UI 개발에 강점을 가지고 있으며,<br />
          사용자 흐름에 맞는 인터페이스를 설계합니다.
        </SubText>

        <CTAButton to="projects" smooth={true} duration={500}>
          프로젝트 보기
        </CTAButton>
      </Card>
    </Section>
  );
};

export default HeroSection;
