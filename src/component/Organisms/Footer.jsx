import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e6e6e6;
  color: #444;
  font-size: 0.95rem;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

const FooterText = styled.p`
  margin: 0;
  line-height: 1.6;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2025 이수호. All rights reserved.</FooterText>
      <FooterText>akakak695@naver.com | GitHub: github.com/susuholee </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
