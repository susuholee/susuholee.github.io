import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  // nodeconnect
  login, signup, mypage,
  // scoop
  area, subway, filter,
  // notionary
  category, comment, like, post, edit,
  // sealium
  sealium_signup, sealium_login, dashboard,
  DID_signup, intro, vc_issue, vc_request,
  vc_list, vc_detail, revoke, sharelink, profile_edit
} from "../../assets/gif";

import {
  nodeconnect, scoop, notionary_logo, Sealium_logo
} from "../../assets/logo";


/* ===== Slider ===== */
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #eee;
  background: #000;

  @media (max-width: 768px) {
    height: 220px;
    border-radius: 0.75rem;
  }

  @media (max-width: 480px) {
    height: 180px;
    border-radius: 0.5rem;
  }
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) =>
    props.active ? "scale(1)" : "scale(1.02)"};
  transition: opacity 0.8s ease, transform 1s ease;
`;

const SlideMedia = ({ src, caption }) => {
  const isVideo = src.endsWith(".mp4");
  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={caption}
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
};

const SlideCaption = styled.p`
  position: absolute;
  bottom: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 0.9rem;
  background: rgba(0,0,0,0.4);
  padding: 0.3rem 0.8rem;
  border-radius: 999px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 1rem;" : "right: 1rem;")}
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  border: none;
  color: #fff;
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease;
  z-index: 10;

  &:hover {
    background: rgba(0,0,0,0.7);
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: ${(props) => props.progress}%;
  background: #5c3a21;
  transition: width 0.1s linear;
`;

const ModernSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSlide();
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <SliderWrapper>
      {slides.map((slide, i) => (
        <Slide key={i} active={i === index}>
          <SlideMedia src={slide.image} caption={slide.caption} />
          <SlideCaption>{slide.caption}</SlideCaption>
        </Slide>
      ))}

      <ArrowButton left onClick={prevSlide}>
        <FaChevronLeft />
      </ArrowButton>
      <ArrowButton onClick={nextSlide}>
        <FaChevronRight />
      </ArrowButton>

      <ProgressBar progress={progress} />
    </SliderWrapper>
  );
};


/* ===== Layout ===== */
const Section = styled.section`
  padding: 6rem 1.5rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.75rem;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
    border-radius: 0.75rem;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const ProjectLogo = styled.img`
  width: ${(props) => (props.size === "large" ? "36px" : "24px")};
  height: ${(props) => (props.size === "large" ? "36px" : "24px")};
  object-fit: contain;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const RoleList = styled.div`
  margin-top: 0.8rem;
  font-size: 0.88rem;
  color: #444;
  
  strong {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 600;
    color: #333;
  }

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    margin-bottom: 0.25rem;
    list-style: none;
    line-height: 1.4;
  }

  svg {
    color: #5c3a21;
    flex-shrink: 0;
    margin-top: 2px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
    flex-direction: column;
  }
`;

const LinkButton = styled.a`
  flex: 1 1 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  padding: 0.45rem 0.9rem;   
  font-size: 0.85rem;        
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  border-radius: 999px;      
  border: 1.5px solid #5c3a21; 
  color: #5c3a21;
  background: transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
              background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #5c3a21;  
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(92, 58, 33, 0.18);
  }
  &:active {
    transform: translateY(-1px) scale(0.99);
    box-shadow: 0 3px 8px rgba(92, 58, 33, 0.14);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;


/* ===== Projects Section ===== */
const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Heading>프로젝트</Heading>
      <ProjectWrapper>

        {/* Node_Connect */}
        <ProjectCard>
          <Left>
            <ModernSlider
              slides={[
                { image: login, caption: "로그인" },
                { image: signup, caption: "회원가입" },
                { image: mypage, caption: "마이페이지" },
              ]}
            />
          </Left>
          <Right>
            <TitleWrapper>
              <ProjectLogo src={nodeconnect} alt="Node_Connect 로고" size="large" />
              <Title>Node_Connect</Title>
            </TitleWrapper>
            <Description>
              HTML, CSS, JS 기반의 영화 추천 플랫폼.<br />
              LocalStorage와 쿠키로 사용자 정보를 관리하며 콘텐츠 흐름을 제공합니다.
            </Description>
            <RoleList>
              <strong>담당 기능</strong>
              <ul>
                <li><FiCheckCircle /> 로그인: 로컬스토리지 비교, 세션 유지</li>
                <li><FiCheckCircle /> 회원가입: 입력값 검증 및 저장</li>
                <li><FiCheckCircle /> 마이페이지: 정보 조회·수정·탈퇴</li>
                <li><FiCheckCircle /> 로그아웃: 데이터 초기화, 리다이렉션</li>
              </ul>
            </RoleList>
            <ButtonGroup>
              <LinkButton href="https://github.com/susuholee/NodeConnect_project" target="_blank">
                <FaGithub /> GitHub
              </LinkButton>
              <LinkButton href="https://nodeconnectproject.vercel.app/" target="_blank">
                <FiExternalLink /> 배포 보기
              </LinkButton>
            </ButtonGroup>
          </Right>
        </ProjectCard>

        {/* Scoop */}
        <ProjectCard>
          <Left>
            <ModernSlider
              slides={[
                { image: area, caption: "광역 기반 탐색" },
                { image: subway, caption: "지역 기반 탐색" },
                { image: filter, caption: "필터링 기능" },
              ]}
            />
          </Left>
          <Right>
            <TitleWrapper>
              <ProjectLogo src={scoop} alt="Scoop 로고" />
              <Title>Scoop</Title>
            </TitleWrapper>
            <Description>
              동호회 탐색 플랫폼, Kakao Map API와 지역 기반 필터링을 통해 사용자 맞춤 위치 탐색 경험 제공.
            </Description>
            <RoleList>
              <strong>담당 기능</strong>
              <ul>
                <li><FiCheckCircle /> 지역 데이터 구조화 및 필터링 로직 설계</li>
                <li><FiCheckCircle /> 시·군구 / 지하철역 기반 탐색 기능 구현</li>
                <li><FiCheckCircle /> UI/UX 개선을 위한 지도 시각화 설계</li>
              </ul>
            </RoleList>
            <ButtonGroup>
              <LinkButton href="https://github.com/susuholee/scoop_project/tree/susu" target="_blank">
                <FaGithub /> GitHub
              </LinkButton>
              <LinkButton href="https://joinscoop.store" target="_blank">
                <FiExternalLink /> 배포 보기
              </LinkButton>
            </ButtonGroup>
          </Right>
        </ProjectCard>

        {/* Notionary */}
        <ProjectCard>
          <Left>
            <ModernSlider
              slides={[
                { image: category, caption: "카테고리 필터링" },
                { image: post, caption: "게시글 작성" },
                { image: edit, caption: "게시글 수정" },
                { image: comment, caption: "댓글 기능" },
                { image: like, caption: "좋아요 기능" },
              ]}
            />
          </Left>
          <Right>
            <TitleWrapper>
              <ProjectLogo src={notionary_logo} alt="Notionary 로고" size="large" />
              <Title>Notionary</Title>
            </TitleWrapper>
            <Description>
              개인의 노션(Notion) 워크스페이스를 공유하고, 게시글을 통해 다양한 고민을 커뮤니티의 힘으로 해결하는 웹 플랫폼
            </Description>
            <RoleList>
              <strong>담당 기능</strong>
              <ul>
                <li><FiCheckCircle /> 게시글 작성 및 수정 카테고리 분류</li>
                <li><FiCheckCircle /> 워크스페이스 첨부 기능</li>
                <li><FiCheckCircle /> 댓글/좋아요 기능 구현</li>
              </ul>
            </RoleList>
            <ButtonGroup>
              <LinkButton href="https://github.com/susuholee/Notionary_Project" target="_blank">
                <FaGithub /> GitHub
              </LinkButton>
              <LinkButton href="https://notionarys.store" target="_blank">
                <FiExternalLink /> 배포 보기
              </LinkButton>
            </ButtonGroup>
          </Right>
        </ProjectCard>

        {/* Sealium */}
        <ProjectCard>
          <Left>
            <ModernSlider
              slides={[
                { image: sealium_signup, caption: "회원가입" },
                { image: sealium_login, caption: "로그인" },
                { image: DID_signup, caption: "DID 추가정보 입력" },
                { image: intro, caption: "인트로" },
                { image: dashboard, caption: "대시보드" },
                { image: vc_issue, caption: "VC 발급 요청" },
                { image: vc_request, caption: "VC 요청 현황"},
                { image: vc_list, caption: "VC 목록" },
                { image: vc_detail, caption: "VC 상세 조회" },
                { image: sharelink, caption: "VC 공유 링크 생성" },
                { image: revoke, caption: "VC 폐기 요청" },
                { image: profile_edit, caption: "회원정보 수정/탈퇴"}
              ]}
            />
          </Left>

          <Right>
            <TitleWrapper>
              <ProjectLogo src={Sealium_logo} alt="Sealium 로고" size="large" />
              <Title>Sealium</Title>
            </TitleWrapper>

            <Description>
              DID(Decentralized Identifier) 기반으로 안전하고 투명한 VC(Verifiable Credential) 발급 및 검증을 지원하는 반응형 웹 플랫폼.
            </Description>

            <RoleList>
              <strong>담당 기능</strong>
              <ul>
                <li><FiCheckCircle /> 일반 계정 회원가입/로그인 UI</li>
                <li><FiCheckCircle /> DID 추가정보 입력 페이지</li>
                <li><FiCheckCircle /> VC 발급/폐기/상세 조회 화면 개발</li>
                <li><FiCheckCircle /> VC 공유 링크 생성 및 관리 UI</li>
                <li><FiCheckCircle /> React Query + Zustand 기반 상태 관리</li>
              </ul>
            </RoleList>

            <ButtonGroup>
              <LinkButton href="https://github.com/susuholee/DID_project_Client" target="_blank">
                <FaGithub /> GitHub
              </LinkButton>
              <LinkButton href="https://sealiumback.store" target="_blank">
                <FiExternalLink /> 배포 보기
              </LinkButton>
            </ButtonGroup>
          </Right>
        </ProjectCard>

      </ProjectWrapper>
    </Section>
  );
};

export default ProjectsSection;
