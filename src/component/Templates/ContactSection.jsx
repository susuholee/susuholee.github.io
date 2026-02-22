import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiMail, FiExternalLink } from "react-icons/fi";

const Section = styled.section`
  background: #0f172a;
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 7rem 2rem;
  text-align: center;
`;

const SectionLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #3D7EAA;
  margin-bottom: 0.8rem;
`;

const Heading = styled.h2`
  font-size: 2.6rem;
  font-weight: 800;
  color: #f1f5f9;
  margin-bottom: 1.2rem;
  line-height: 1.25;

  @media (max-width: 768px) { font-size: 2rem; }
`;

const SubText = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.75;
  margin-bottom: 3.5rem;
`;

const CardRow = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.4rem 2rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.25s ease;
  min-width: 220px;

  &:hover {
    background: rgba(61,126,170,0.1);
    border-color: rgba(61,126,170,0.35);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.3);
  }
`;

const IconWrap = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(61,126,170,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3D7EAA;
  flex-shrink: 0;
`;

const CardInfo = styled.div`
  text-align: left;
`;

const CardLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 0.2rem;
`;

const CardValue = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
`;

const ContactSection = () => {
  return (
    <Section id="contact">
      <Inner>
        <SectionLabel>Contact</SectionLabel>
        <Heading>
          함께 일하고 싶다면<br />연락해요
        </Heading>
        <SubText>
          새로운 기회와 협업을 언제나 환영합니다.<br />
          아래 채널로 편하게 연락주세요.
        </SubText>

        <CardRow>
          <ContactCard
            href="mailto:akakak695@naver.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
          >
            <IconWrap><FiMail size={19} /></IconWrap>
            <CardInfo>
              <CardLabel>Email</CardLabel>
              <CardValue>akakak695@naver.com</CardValue>
            </CardInfo>
          </ContactCard>

          <ContactCard
            href="https://github.com/susuholee"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <IconWrap><FaGithub size={19} /></IconWrap>
            <CardInfo>
              <CardLabel>GitHub</CardLabel>
              <CardValue>susuholee</CardValue>
            </CardInfo>
          </ContactCard>

          <ContactCard
            href="https://simplecoding77.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <IconWrap><FiExternalLink size={19} /></IconWrap>
            <CardInfo>
              <CardLabel>Blog</CardLabel>
              <CardValue>티스토리</CardValue>
            </CardInfo>
          </ContactCard>
        </CardRow>
      </Inner>
    </Section>
  );
};

export default ContactSection;
