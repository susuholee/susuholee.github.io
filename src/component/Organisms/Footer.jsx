import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #0f172a;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 1.6rem 2rem;
  text-align: center;
  color: #64748b;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      © 2025 이수호. All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
