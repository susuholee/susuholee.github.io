import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

/* ================= Style ================= */

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 2.2rem 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e6e6e6;
  color: #444;
  font-size: 0.95rem;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

const EmailRow = styled.p`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  line-height: 1.6;

  a {
    color: #5c3a21;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkRow = styled.div`
  margin-top: 0.6rem;
  display: flex;
  justify-content: center;
  gap: 1.4rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #5c3a21;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ================= Component ================= */

const Footer = () => {
  return (
    <FooterWrapper>
      <EmailRow>
        <FiMail />
        <a href="mailto:akakak695@naver.com">
          akakak695@naver.com
        </a>
      </EmailRow>

      <LinkRow>
        <a
          href="https://github.com/susuholee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://susuholee.tistory.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          기술 블로그
        </a>
      </LinkRow>
    </FooterWrapper>
  );
};

export default Footer;
