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



const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
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

const SlideMedia = ({ src, caption, isActive }) => {
  const isVideo = src.endsWith(".mp4");

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay={isActive}  // 현재 보이는 슬라이드일 때만 재생
        loop={isActive}      // 보일 때만 루프
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
  align-items: stretch;

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

const InfoCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  margin-top: 30px;

  h4 {
    margin: 0 0 0.8rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: #333;
  }

  ul {
    margin: 0;
    padding-left: 1rem;
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const TechStack = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    padding: 0.3rem 0.6rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    background: #fafafa;
  }
`;


const RoleList = styled.div`
  margin-top: 1.5rem;      /* 섹션 간격 늘림 */
  padding: 1rem;           /* 블록 안쪽 여백 */
  border-radius: 0.75rem;  /* 모서리 라운드 */
  background: #fafafa;     /* 연한 배경색으로 블록 구분 */

  font-size: 0.9rem;
  color: #444;

  strong {
    display: block;
    margin-bottom: 0.6rem;
    font-weight: 700;
    color: #5c3a21;       /* 포인트 컬러 */
    font-size: 1rem;
    border-left: 4px solid #5c3a21; /* 시각적 강조 */
    padding-left: 0.5rem;
  }

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    margin-bottom: 0.4rem;
    list-style: none;
    line-height: 1.5;
  }

  svg {
    color: #5c3a21;
    flex-shrink: 0;
    margin-top: 2px;
  }

  @media (max-width: 480px) {
    font-size: 0.82rem;
    padding: 0.75rem;
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



const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Heading>프로젝트</Heading>
      <ProjectWrapper>


      {/* Sealium */}
    <ProjectCard>
        <Left>
            <TitleWrapper>
            <ProjectLogo src={Sealium_logo} alt="Sealium 로고" size="large" />
            <Title>Sealium</Title>
          </TitleWrapper>

          <Description>
            DID(Decentralized Identifier) 기반으로 안전하고 투명한 
            VC(Verifiable Credential) 발급 및 검증을 지원하는 반응형 웹 플랫폼<br />
          </Description>

        
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
          {/* 기술 스택 */}
          <InfoCard>
            <h4>기술 스택 (Frontend)</h4>
            <TechStack>
              <li>Next.js</li>
              <li>TailwindCSS</li>
              <li>React Query</li>
              <li>Zustand</li>
            </TechStack>
          </InfoCard>
        </Left>

        <Right>
          {/* 담당 역할 */}
          <InfoCard>
            <h4>담당 역할 (Frontend)</h4>
            <ul>
              <li>일반 계정 회원가입/로그인 및 DID 추가정보 입력 페이지 UI 개발</li>
              <li>VC 발급/폐기 요청 및 상세 조회 화면 구현</li>
              <li>VC 공유 링크 생성 및 관리 UI 개발</li>
              <li>인트로, 대시보드 등 주요 페이지 반응형 레이아웃 설계</li>
              <li>React Query + Zustand를 활용한 서버 상태/전역 상태 관리 구조 설계</li>
            </ul>
          </InfoCard>

          {/* 이슈 상황 */}
          <InfoCard>
            <h4>이슈 상황</h4>
            <ul>
              <li>프로젝트 중도에 팀원 이탈로 인한 역할 공백 발생</li>
              <li>카카오 로그인 이후 리다이렉트 시 무한 렌더링 현상</li>
            </ul>
          </InfoCard>

            {/* 해결 방안 */}
        <InfoCard>
          <h4>해결 방안</h4>
          <ul>
            <li>남은 팀원과 함께 역할을 재분배하고, <strong>Notion 협업 툴</strong>을 활용하여 우선순위를 조정 → 핵심 기능(VC 발급 및 검증)에 집중해 프로젝트를 기한 내 완성</li>
            <li>카카오 로그인 redirect 로직을 전역 레이아웃으로 이동, 조건 분기 처리 적용 → 무한 렌더링 방지</li>
          </ul>
        </InfoCard>

          {/* 개선 방향 */}
          <InfoCard>
            <h4>개선 방향</h4>
            <ul>
              <li>컴포넌트 모듈화 및 리팩토링을 통한 코드 구조 개선</li>
              <li>React Query의 자동 refetch 및 캐싱 무효화 적용 → 최신 데이터 즉시 반영</li>
              <li>VC 공유 링크 구조를 certificateId 기반으로 개선 → 보안 강화</li>
              <li>전역 에러 핸들링 및 사용자 친화적 메시지 제공</li>
            </ul>
          </InfoCard>

          {/* 향후 확장 방향 */}
          <InfoCard>
            <h4>향후 확장 방향</h4>
            <ul>
              <li>다국어 지원 → 글로벌 사용자 대상 접근성 확대</li>
              <li>생체 인증 연동(Face ID, 지문) → 보안 강화</li>
              <li>VC 발급/검증 시 실시간 알림 제공 → 사용자 경험 개선</li>
            </ul>
          </InfoCard>

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

     {/* Notionary */}
    <ProjectCard>
      <Left>
        <TitleWrapper>
          <ProjectLogo src={notionary_logo} alt="Notionary 로고" size="large" />
          <Title>Notionary</Title>
        </TitleWrapper>

        <Description>
          개인의 노션(Notion) 워크스페이스를 공유하고,<br />
          게시글과 커뮤니티 활동을 통해 다양한 고민을 해결하는 웹 플랫폼.
        </Description>
        <ModernSlider
          slides={[
            { image: category, caption: "카테고리 필터링" },
            { image: post, caption: "게시글 작성" },
            { image: edit, caption: "게시글 수정" },
            { image: comment, caption: "댓글 기능" },
            { image: like, caption: "좋아요 기능" },
          ]}
        />

      {/* 기술 스택 */}
      <InfoCard>
      <h4>기술 스택</h4>
      <TechStack>
        <li>React</li>
        <li>Redux</li>
        <li>React Query</li>
        <li>styled-components</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
      </TechStack>
      </InfoCard>
      </Left>
      <Right>
  
        {/* 담당 역할 */}
        <InfoCard>
          <h4>담당 역할</h4>
          <ul>
            <li>게시글 작성, 수정, 조회 기능 (Frontend + Backend)</li>
            <li>카테고리 분류 및 동적 필터링 기능 구현</li>
            <li>워크스페이스 첨부 기능 및 미디어 파일 처리</li>
            <li>댓글/좋아요 기능 API 연동 및 UI 개발</li>
            <li>마이페이지 내 사용자 작성 글 조회 기능</li>
          </ul>
        </InfoCard>

        {/* 이슈 상황 */}
        <InfoCard>
          <h4>이슈 상황</h4>
          <ul>
            <li>게시글 + 워크스페이스를 함께 보여줄 때 UI가 복잡해 가독성 저하</li>
            <li>DB 워크스페이스 관련 필드명 유사 → 매핑 및 유지보수 어려움</li>
            <li>사용자 인증 없이 req.body의 uid를 직접 받아 보안 취약</li>
          </ul>
        </InfoCard>

        {/* 해결 방안 */}
        <InfoCard>
          <h4>해결 방안</h4>
          <ul>
            <li>워크스페이스는 모달/탭으로 분리해 UX 개선</li>
            <li>워크스페이스 DB에 depth 필드를 추가하고 필드명 단순화</li>
            <li>JWT 인증 기반 미들웨어 도입해 사용자 검증 프로세스 강화</li>
          </ul>
        </InfoCard>

    {/* 향후 확장 방향 */}
    <InfoCard>
      <h4>향후 확장 방향</h4>
      <ul>
        <li>댓글 알림 기능 → 커뮤니티 활성화 및 사용자 반응성 증가</li>
        <li>WebSocket 기반 실시간 좋아요·댓글 반영 → 즉각적 피드백 제공</li>
        <li>관심 카테고리 기반 추천 시스템 → 개인화 경험 제공 및 재방문율 향상</li>
        <li>관리자 기능(신고 게시글 관리, 유저 모니터링) → 커뮤니티 질 관리 및 운영 효율성 강화</li>
      </ul>
    </InfoCard>

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

      {/* Scoop */}
    <ProjectCard>
      <Left>

      <TitleWrapper>
        <ProjectLogo src={scoop} alt="Scoop 로고" />
         <Title>Scoop</Title>
      </TitleWrapper>

      <Description>
      위치 기반 동호회 탐색 플랫폼.<br />
      Kakao Map API와 지역/광역 단위 필터링을 통해 사용자가 원하는 동호회를 직관적으로 찾을 수 있도록 구현했습니다.
      </Description>

  
      <ModernSlider
      slides={[
        { image: area, caption: "광역 기반 탐색" },
        { image: subway, caption: "지역 기반 탐색" },
        { image: filter, caption: "필터링 기능" },
      ]}
      />

      {/* 기술 스택 */}
      <InfoCard>
      <h4>기술 스택</h4>
      <TechStack>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>EJS</li>
        <li>MySQL</li>
      </TechStack>
      </InfoCard>

      </Left>

      <Right>

      <InfoCard>
    <h4>담당 역할</h4>
    <ul>
      <li>프로젝트 내 <strong>메인 페이지</strong> 프론트엔드/백엔드 개발 담당</li>
      <li>Node.js + Express 기반 서버 로직 및 라우팅 구현</li>
      <li>EJS 템플릿을 활용한 메인 페이지 동적 렌더링</li>
      <li>Kakao Map API 연동 및 지도 시각화 처리</li>
      <li>지역 데이터 구조화 및 필터링 로직 설계</li>
      <li>UI/UX 개선 및 탐색 흐름 최적화</li>
    </ul>
  </InfoCard>


      {/* 이슈 */}
      <InfoCard>
      <h4>이슈</h4>
      <ul>
        <li>동일 지역/지하철역에 여러 동호회가 등록되면 마커가 겹쳐 시각적으로 혼란 발생</li>
        <li>일부 필터 조건이 정상적으로 동작하지 않아 검색 정확도 저하</li>
        <li>광역/지역 단위 구분이 불명확해 탐색 시 혼동 발생</li>
      </ul>
      </InfoCard>

      {/* 해결 방안 */}
      <InfoCard>
      <h4>해결 방안</h4>
      <ul>
        <li>회원 수에 따라 마커 크기를 차등 적용해 겹침 문제 완화</li>
        <li>필터 선택 시 지도/리스트 영역을 동시에 업데이트하도록 로직 개선</li>
        <li>광역 단위는 행정구역 중심 좌표, 지역 단위는 지하철역 좌표를 기준으로 분리 표시</li>
      </ul>
      </InfoCard>

      {/* 향후 과제 */}
      <InfoCard>
      <h4>향후 확장 방향</h4>
      <ul>
        <li>마커 클러스터링 적용으로 대규모 데이터 대응</li>
        <li>사용자 지역 + 선호 카테고리 기반 동호회 추천 알고리즘 도입</li>
        <li>일정 등록, 알림 등 커뮤니티 기능 확장</li>
        <li>반응형 UI 적용 및 모바일 최적화</li>
      </ul>
      </InfoCard>

      {/* 버튼 */}
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

      {/* Node_Connect */}
    <ProjectCard>
        <Left>
        <TitleWrapper>
          <ProjectLogo src={nodeconnect} alt="Node_Connect 로고" size="large" />
          <Title>Node_Connect</Title>
        </TitleWrapper>

        <Description>
        영화 추천과 사용자 취향 관리 기능을 담은 웹 플랫폼입니다. <br/>
        간단한 인터페이스와 필수 기능 구현으로 빠르고 편리한 사용 경험을 제공합니다.
        </Description>

          <ModernSlider
            slides={[
              { image: login, caption: "로그인" },
              { image: signup, caption: "회원가입" },
              { image: mypage, caption: "마이페이지" },
            ]}
          />

          {/* 기술 스택 */}
          <InfoCard>
            <h4>기술 스택</h4>
            <TechStack>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </TechStack>
          </InfoCard>

        </Left>

        <Right>

          {/* 맡은 역할 */}
          <InfoCard>
            <h4>맡은 역할</h4>
            <ul>
              <li>로그인 기능 전체 구현 (LocalStorage 비교, 세션 유지)</li>
              <li>회원가입 기능 전체 구현 (입력값 검증 및 저장)</li>
              <li>마이페이지 기능 전체 구현 (정보 조회, 수정, 탈퇴)</li>
              <li>로그아웃 처리 (데이터 초기화 및 리다이렉션)</li>
            </ul>
          </InfoCard>

          {/* 이슈 */}
          <InfoCard>
            <h4>이슈</h4>
            <ul>
              <li>아이디 중복 가입 허용 → 동일 계정 다중 생성 가능</li>
              <li>로그인 상태가 새로고침/브라우저 재시작 시 유지되지 않음</li>
              <li>비밀번호가 평문으로 저장되어 보안 취약</li>
            </ul>
          </InfoCard>

          {/* 해결방안 */}
          <InfoCard>
            <h4>해결방안</h4>
            <ul>
              <li>JWT 기반 인증·세션 관리 구조 도입 검토</li>
              <li>비밀번호 암호화하여 DB에 저장할 수 있도록 설계</li>
            </ul>
          </InfoCard>

          {/* 향후 과제 */}
          <InfoCard>
            <h4>향후 확장 방향</h4>
            <ul>
              <li>Node.js + DB 연동으로 서버 기반 인증 확장</li>
              <li>영화 API 연동 통한 실시간 추천 기능 제공</li>
              <li>반응형 UI로 모바일 최적화</li>
            </ul>
          </InfoCard>

          {/* 버튼 */}
          <ButtonGroup>
            <LinkButton href="https://github.com/susuholee/NodeConnect_project" target="_blank">
              GitHub
            </LinkButton>
            <LinkButton href="https://nodeconnectproject.vercel.app/" target="_blank">
              배포 보기
            </LinkButton>
          </ButtonGroup>
        </Right>
      </ProjectCard>

      </ProjectWrapper>
    </Section>
  );
};

export default ProjectsSection;
