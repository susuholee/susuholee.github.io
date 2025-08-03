import styled from "styled-components";
import { FaGithub, FaEnvelope, FaBlog } from "react-icons/fa";

const Section = styled.section`
  padding: 6rem 1.5rem;
  background-color: #ffffff;
  color: #222;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  padding: 1rem 1.5rem;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: background-color 0.2s ease, transform 0.2s ease;

  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }

  svg {
    color: #5c3a21;
    font-size: 1.2rem;
  }
`;

function ContactSection() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <ContactList>
        <ContactItem href="mailto:akakak695@naver.com">
          <FaEnvelope />
          akakak695@naver.com
        </ContactItem>
        <ContactItem href="https://github.com/susuholee" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          github.com/susuholee
        </ContactItem>
        <ContactItem href="https://simplecoding77.tistory.com/" target="_blank" rel="noopener noreferrer">
          <FaBlog />
          simplecoding77.tistory.com
        </ContactItem>
      </ContactList>
    </Section>
  );
}

export default ContactSection;
