import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import {
  login, signup, mypage,
  area, subway, filter,
  category, comment, post,
  sealium_signup, dashboard,
  vc_issue, vc_list,
  newsive_intro,
  news,
  friend_add,
  friend_received,
  chat,
  media,
  travel_intro,
  service
} from "../../assets/gif";

import {
  nodeconnect, scoop, notionary_logo,
  Sealium_logo, NewSive_logo
} from "../../assets/logo";

import myStoryVideo from "../../assets/my_story.mp4";
import watchAdviceVideo from "../../assets/watch_advice.mp4";

/* ================= Slider ================= */

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  border-radius: 14px;
  overflow: hidden;
  background: #111;
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.6s ease;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 0.75rem" : "right: 0.75rem")};
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  border: none;
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 2;

  &:hover { background: rgba(0,0,0,0.75); }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MuteButton = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  z-index: 5;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }
`;

const SlideMedia = ({ src }) => {
  const isVideo = src.endsWith(".mp4");
  const [muted, setMuted] = useState(true);

  if (!isVideo) {
    return <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />;
  }

  return (
    <VideoWrapper>
      <video
        src={src}
        autoPlay
        muted={muted}
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <MuteButton onClick={() => setMuted(!muted)}>
        {muted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
      </MuteButton>
    </VideoWrapper>
  );
};

const DotRow = styled.div`
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  z-index: 2;
`;

const Dot = styled.div`
  width: ${({ active }) => (active ? "18px" : "6px")};
  height: 6px;
  border-radius: 999px;
  background: ${({ active }) => (active ? "#c97d4a" : "rgba(255,255,255,0.4)")};
  transition: all 0.3s ease;
`;

const ModernSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <SliderWrapper>
      {slides.map((s, i) => (
        <Slide key={i} active={i === index}>
          <SlideMedia src={s.image} />
        </Slide>
      ))}
      <Arrow left onClick={prev}><FaChevronLeft size={12} /></Arrow>
      <Arrow onClick={next}><FaChevronRight size={12} /></Arrow>
      <DotRow>
        {slides.map((_, i) => <Dot key={i} active={i === index} />)}
      </DotRow>
    </SliderWrapper>
  );
};

/* ================= Layout ================= */

const Section = styled.section`
  background: #ffffff;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 2rem;
`;

const SectionLabel = styled.p`
  text-align: center;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #3D7EAA;
  margin-bottom: 0.7rem;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 4rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ProjectCard = styled.div`
  display: ${({ show }) => (show ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3.5rem 0;
  border-top: 1px solid #e2e8f0;

  &:last-child { border-bottom: 1px solid #e2e8f0; }

  @media (max-width: 900px) {
    display: ${({ show }) => (show ? "grid" : "none")};
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const ProjectNum = styled.span`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #c97d4a;
  text-transform: uppercase;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const ProjectLogo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 1.45rem;
  font-weight: 800;
  color: #0f172a;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const MetaChip = styled.span`
  font-size: 0.75rem;
  padding: 3px 10px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  color: #64748b;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: #475569;
`;

const InfoCard = styled.div`
  padding: 1rem 1.2rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0;
  margin-top: 0.5rem;

  li {
    list-style: none;
    background: #f1f5f9;
    border-radius: 6px;
    padding: 0.25rem 0.65rem;
    font-size: 0.78rem;
    color: #475569;
    font-weight: 500;
  }
`;

const SummaryBox = styled.div`
  padding: 1.2rem 1.4rem;
  background: #fff;
  border-left: 4px solid #3D7EAA;
  border-radius: 0 12px 12px 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #374151;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const SectionTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #3D7EAA;
`;

const BulletList = styled.ul`
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  li {
    font-size: 0.875rem;
    line-height: 1.65;
    color: #475569;
  }
`;

const ProblemSolution = styled.div`
  font-size: 0.875rem;
  line-height: 1.7;
  color: #475569;

  strong { color: #1e293b; font-weight: 700; }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const LinkButton = styled.a`
  flex: 1;
  padding: 0.55rem;
  border-radius: 10px;
  border: 1.5px solid #cbd5e1;
  color: #475569;
  text-align: center;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.22s ease;

  &:hover {
    background: #3D7EAA;
    border-color: #3D7EAA;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(61,126,170,0.25);
  }
`;

const StackTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.3rem;
`;

const PromptBox = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
`;

const PromptTab = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
`;

const PromptTabItem = styled.div`
  flex: 1;
  padding: 0.6rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ active }) => (active ? '#3D7EAA' : '#a1a1aa')};
  background: ${({ active }) => (active ? '#fff' : '#f7f7f7')};
  border-right: 1px solid #e5e5e5;
  cursor: pointer;
  transition: color 0.2s;

  &:last-child { border-right: none; }
  &:hover { color: #3D7EAA; }
`;

const PromptContent = styled.div`
  padding: 1.1rem 1.2rem;
  background: #fff;
`;

const PromptText = styled.p`
  font-size: 0.855rem;
  line-height: 1.75;
  color: #52525b;
  white-space: pre-line;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3.5rem;
`;

const TabButton = styled.button`
  padding: 0.55rem 1.5rem;
  border-radius: 999px;
  border: 1.5px solid ${({ active }) => (active ? "#3D7EAA" : "#cbd5e1")};
  background: ${({ active }) => (active ? "#3D7EAA" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#475569")};
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.22s ease;

  &:hover {
    border-color: #3D7EAA;
    color: ${({ active }) => (active ? "#fff" : "#3D7EAA")};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(61,126,170,0.15);
  }
`;

const ProjectsSection = ({ projectFilter, setProjectFilter }) => {
  const [travelTab, setTravelTab] = useState("design");

  return (
    <Section id="projects">
      <Inner>
        <SectionLabel>Projects</SectionLabel>
        <Heading>프로젝트</Heading>

        <TabWrapper>
          <TabButton active={projectFilter === "all"} onClick={() => setProjectFilter("all")}>전체보기</TabButton>
          <TabButton active={projectFilter === "video"} onClick={() => setProjectFilter("video")}>AI 영상 제작</TabButton>
          <TabButton active={projectFilter === "web"} onClick={() => setProjectFilter("web")}>웹 개발</TabButton>
        </TabWrapper>

        <ProjectList>

          {/* 01 - Watch Advertisement */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "video"}>
            <Left>
              <ProjectNum>01 — Watch Advertisement</ProjectNum>
              <TitleWrapper>
                <Title>시계 광고 영상</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2026.08.12</MetaChip>
                <MetaChip>광고 영상 제작</MetaChip>
                <MetaChip>1인 제작</MetaChip>
              </MetaInfo>
              <Description>
                AI 기술을 활용하여 제작한 고급 시계 광고 영상입니다.
              </Description>
              <ModernSlider slides={[
                { image: watchAdviceVideo },
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>Google Flow</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                고급스러움과 정교함을 시각적으로 연출하기 위해 AI 이미지/비디오 생성 툴을 연계하여 제작한 단편 광고 영상입니다.
              </SummaryBox>
              <SectionTitle>영상 주요 내용</SectionTitle>
              <BulletList>
                <li>시계의 세련된 디자인과 초침 움직임의 클로즈업 연출</li>
                <li>빛과 그림자의 대비를 통한 프리미엄 감성 극대화</li>
                <li>세련되고 묵직한 사운드 트랙과의 싱크로나이즈</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>영상 콘셉트 기획 및 스토리보드 작성</li>
                <li>AI 이미지 생성 및 비디오 변환 프롬프트 엔지니어링</li>
                <li>영상 편집, 사운드 디자인 및 후반 보정</li>
              </BulletList>
            </Right>
          </ProjectCard>

          {/* 02 - My Story */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "video"}>
            <Left>
              <ProjectNum>02 — My Story</ProjectNum>
              <TitleWrapper>
                <Title>My Story (나의 이야기)</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2026.08.09</MetaChip>
                <MetaChip>나의 이야기</MetaChip>
                <MetaChip>1인 제작</MetaChip>
              </MetaInfo>
              <Description>
                나의 이야기를 담은 영상입니다.
              </Description>
              <ModernSlider slides={[
                { image: myStoryVideo },
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>Google Flow</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                어제보다 오늘 더 발전하며, 변화하는 웹 개발 트렌드를 적극적으로 학습하고 적용하는 이수호의 이야기입니다.
              </SummaryBox>
              <SectionTitle>영상 주요 내용</SectionTitle>
              <BulletList>
                <li>개발을 시작하게 된 계기와 공부 과정</li>
                <li>프로젝트 수행을 통해 깨달은 협업과 문제 해결 능력</li>
                <li>AI 영상 제작 툴 활용</li>
                <li>어떤 개발자가 되고 싶은지에 대한 비전 제시</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>영상 기획 및 스크립트 작성</li>
                <li>영상 촬영, 편집 및 자막 제작</li>
              </BulletList>
            </Right>
          </ProjectCard>

          {/* 03 - 여행성향연구소 */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "web"}>
            <Left>
              <ProjectNum>03 — Personal Project</ProjectNum>
              <TitleWrapper>
                <Title>여행성향연구소</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2026.02.16 ~ 2026.02.20</MetaChip>
                <MetaChip>개인 프로젝트</MetaChip>
                <MetaChip>1인 개발</MetaChip>
              </MetaInfo>
              <Description>
                AI 기반 여행 성향 분석 및 맞춤 여행지 추천 서비스
              </Description>
              <ModernSlider slides={[
                { image: travel_intro },
                { image: service },
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Supabase</li>
                  <li>OpenAI API</li>
                  <li>Vercel</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                노 코드 기반으로 AI 추천 흐름 전반을 설계하며
                서버리스 아키텍처를 단독으로 구현한 프로젝트입니다.
              </SummaryBox>
              <SectionTitle>주요 기능</SectionTitle>
              <BulletList>
                <li>여행 목적·동행·예산·분위기 입력 기반 AI 성향 분석</li>
                <li>2단계 AI 추천 시스템으로 맞춤 여행지 3곳 제시</li>
                <li>이메일 / 카카오 소셜 로그인 및 마이페이지</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>프론트엔드 및 서버리스 API 전체 개발</li>
                <li>AI 추천 흐름 및 인증 구조 설계</li>
              </BulletList>
              <PromptBox>
                <PromptTab>
                  <PromptTabItem active={travelTab === "design"} onClick={() => setTravelTab("design")}>프롬프트 설계</PromptTabItem>
                  <PromptTabItem active={travelTab === "result"} onClick={() => setTravelTab("result")}>검토 & 개선</PromptTabItem>
                </PromptTab>
                <PromptContent>
                  {travelTab === "design" ? (
                    <PromptText>{`먼저 일반 계정과 카카오 계정 로그인으로 로그인 방식으로 설계한다.

1. 일반 계정은 이메일, 비밀번호, 닉네임 총 3개의 데이터 정보를 받는다.
2. 카카오 계정은 카카오 OAuth2.0 인증 기반을 통해 데이터 정보를 받는다.
3. 쿠키 기반을 통해 세션을 유지하도록 한다.

Next.JS로 App Router 구조로 설계하고

제약조건은 아래와 같은 구조로 나뉜다.

Supabase Auth 기반을 따른다
- Supabase 기본 인증 체계를 따름
- JWT를 직접 생성하거나 저장하지 않음
- 쿠키 기반 세션 유지 구조로 설계`}</PromptText>
                  ) : (
                    <PromptText>{`AI가 생성한 초기 코드에서 발견한 문제와 개선 내용

이메일 인증 처리 로직 보완
- 초기 AI 설계에서는 이메일 인증 이후 유저가 생성되는 구조로 제안되었으나,
실제 동작 검증 과정에서 인증 여부와 관계없이 계정이 생성될 가능성을 확인하였다.
이를 개선하기 위해 이메일 인증 완료 이후에만 정상 로그인이 가능하도록
인증 상태 기반 분기 로직을 추가하였다.

중복 이메일 가입 방지 로직 추가
- 초기 구조에서는 동일 이메일로 중복 가입이 가능하였다.
users 테이블에서 기존 이메일 존재 여부를 사전 검증하도록 수정하고,
이미 가입된 이메일일 경우 오류 메시지를 반환하도록 처리하였다.

보안성 개선 -> 유효성 검증 강화
- 닉네임 및 이메일 입력값의 앞뒤 공백이 제거되지 않는 문제를 발견하였다.
trim() 처리를 추가하고, 이메일 형식 및 닉네임 유효성 검증 로직을 보완하여
데이터 정합성과 보안성을 강화하였다.`}</PromptText>
                  )}
                </PromptContent>
              </PromptBox>

              <ButtonGroup>
                <LinkButton href="https://github.com/susuholee/AI_Travel_Project" target="_blank">
                  <FaGithub /> GitHub
                </LinkButton>
                <LinkButton href="https://travel-lab.vercel.app" target="_blank">
                  <FiExternalLink /> 배포
                </LinkButton>
              </ButtonGroup>
            </Right>
          </ProjectCard>

          {/* 04 - NewSive */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "web"}>
            <Left>
              <ProjectNum>04 — Personal Project</ProjectNum>
              <TitleWrapper>
                <ProjectLogo src={NewSive_logo} />
                <Title>NewSive</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2025.12.02 ~ 2026.02.01</MetaChip>
                <MetaChip>개인 프로젝트</MetaChip>
                <MetaChip>1인 개발</MetaChip>
              </MetaInfo>
              <Description>
                최신 뉴스 기반 정보 공유와 사용자 소통을 중심으로 한 웹 플랫폼
              </Description>
              <ModernSlider slides={[
                { image: newsive_intro },
                { image: news },
                { image: friend_add },
                { image: friend_received },
                { image: chat },
                { image: media },
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Zustand</li>
                  <li>React Query</li>
                  <li>NestJS</li>
                  <li>Socket.IO</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                Socket 기반 채팅 기능과 인증 기능을 구현하며
                서비스 전반을 단독으로 개발한 프로젝트입니다.
              </SummaryBox>
              <SectionTitle>주요 기능</SectionTitle>
              <BulletList>
                <li>최신 뉴스 API 기반 피드 및 상세 페이지</li>
                <li>Socket 기반 친구 1:1 채팅 및 알림</li>
                <li>JWT 인증과 보호 라우팅 설계</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>프론트엔드 및 백엔드 전체 개발</li>
                <li>인증 및 실시간 통신 구조 설계</li>
              </BulletList>
              <SectionTitle>이슈 및 해결</SectionTitle>
              <ProblemSolution>
                <strong>이슈</strong><br />
                친구 추가 시 데이터 불일치 발생<br /><br />
                <strong>해결</strong><br />
                양방향 관계와 알림 생성 로직을 하나의 트랜잭션으로 처리
              </ProblemSolution>
              <ButtonGroup>
                <LinkButton href="https://github.com/susuholee/NewSive_Project" target="_blank">
                  <FaGithub /> GitHub
                </LinkButton>
                <LinkButton href="https://www.newsive.store" target="_blank">
                  <FiExternalLink /> 배포
                </LinkButton>
              </ButtonGroup>
            </Right>
          </ProjectCard>

          {/* 05 - Sealium */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "web"}>
            <Left>
              <ProjectNum>05 — Team Project</ProjectNum>
              <TitleWrapper>
                <ProjectLogo src={Sealium_logo} />
                <Title>Sealium</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2025.08.04 ~ 2025.09.17</MetaChip>
                <MetaChip>팀 프로젝트</MetaChip>
                <MetaChip>3인 팀</MetaChip>
              </MetaInfo>
              <Description>
                DID 기반 VC 발급 및 검증을 지원하는 보안 중심 웹 플랫폼
              </Description>
              <ModernSlider slides={[
                { image: sealium_signup },
                { image: dashboard },
                { image: vc_issue },
                { image: vc_list }
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>Next.js</li>
                  <li>React Query</li>
                  <li>Zustand</li>
                  <li>Tailwind CSS</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                복잡한 VC 흐름을 UI로 정리하고
                상태 관리 구조를 설계한 프론트엔드 프로젝트입니다.
              </SummaryBox>
              <SectionTitle>주요 기능</SectionTitle>
              <BulletList>
                <li>DID 기반 VC 발급, 조회, 상태 관리 UI</li>
                <li>서버 상태와 전역 상태 분리</li>
                <li>반응형 인증, 대시보드 화면</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>프론트엔드 핵심 UI 구현</li>
                <li>상태 관리 구조 설계</li>
              </BulletList>
              <SectionTitle>이슈 및 해결</SectionTitle>
              <ProblemSolution>
                <strong>이슈</strong><br />
                로그인 리다이렉트 무한 렌더링<br /><br />
                <strong>해결</strong><br />
                전역 레이아웃으로 로직 이동 및 조건 분기 처리
              </ProblemSolution>
              <ButtonGroup>
                <LinkButton href="https://github.com/susuholee/DID_project_Client" target="_blank">
                  <FaGithub /> GitHub
                </LinkButton>
              </ButtonGroup>
            </Right>
          </ProjectCard>

          {/* 06 - Notionary */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "web"}>
            <Left>
              <ProjectNum>06 — Team Project</ProjectNum>
              <TitleWrapper>
                <ProjectLogo src={notionary_logo} />
                <Title>Notionary</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2025.05.16 ~ 2025.06.01</MetaChip>
                <MetaChip>팀 프로젝트</MetaChip>
                <MetaChip>3인 팀</MetaChip>
              </MetaInfo>
              <Description>
                노션 워크스페이스 공유 기반 커뮤니티 플랫폼
              </Description>
              <ModernSlider slides={[
                { image: category },
                { image: post },
                { image: comment }
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>MySQL</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                커뮤니티 서비스의 기본 구조와
                상태 관리 개념을 학습한 프로젝트입니다.
              </SummaryBox>
              <SectionTitle>주요 기능</SectionTitle>
              <BulletList>
                <li>게시글, 댓글, 좋아요 커뮤니티 기능</li>
                <li>워크스페이스 첨부 구조</li>
                <li>카테고리 기반 게시글 필터링</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>게시글 CRUD 및 댓글 기능 구현</li>
                <li>인증 구조 개선 설계 경험</li>
              </BulletList>
              <SectionTitle>이슈 및 해결</SectionTitle>
              <ProblemSolution>
                <strong>이슈</strong><br />
                복합 콘텐츠로 인한 화면 가독성 저하<br /><br />
                <strong>해결</strong><br />
                워크스페이스를 모달 및 탭 구조로 분리
              </ProblemSolution>
              <ButtonGroup>
                <LinkButton href="https://github.com/susuholee/Notionary_Project" target="_blank">
                  <FaGithub /> GitHub
                </LinkButton>
              </ButtonGroup>
            </Right>
          </ProjectCard>

          {/* 07 - Scoop */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "web"}>
            <Left>
              <ProjectNum>07 — Team Project</ProjectNum>
              <TitleWrapper>
                <ProjectLogo src={scoop} />
                <Title>Scoop</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2025.04.02 ~ 2025.04.18</MetaChip>
                <MetaChip>팀 프로젝트</MetaChip>
                <MetaChip>3인 팀</MetaChip>
              </MetaInfo>
              <Description>
                위치 기반 동호회 탐색 웹 서비스
              </Description>
              <ModernSlider slides={[
                { image: area },
                { image: subway },
                { image: filter }
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>EJS</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                지도 기반 탐색 흐름을 개선하며
                위치 기반 UX를 설계한 프로젝트입니다.
              </SummaryBox>
              <SectionTitle>주요 기능</SectionTitle>
              <BulletList>
                <li>Kakao Map API 기반 위치 마커 시각화</li>
                <li>지역, 광역 단위 필터링 로직</li>
                <li>지도와 리스트 상태 동기화</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>지도 API 연동</li>
                <li>탐색 및 필터링 로직 설계</li>
              </BulletList>
              <SectionTitle>이슈 및 해결</SectionTitle>
              <ProblemSolution>
                <strong>이슈</strong><br />
                동일 위치 마커 겹침 문제<br /><br />
                <strong>해결</strong><br />
                회원 수 기준 마커 크기 차등 적용
              </ProblemSolution>
              <ButtonGroup>
                <LinkButton href="https://github.com/susuholee/scoop_project/tree/susu" target="_blank">
                  <FaGithub /> GitHub
                </LinkButton>
                <LinkButton href="https://joinscoop.store" target="_blank">
                  <FiExternalLink /> 배포
                </LinkButton>
              </ButtonGroup>
            </Right>
          </ProjectCard>

          {/* 08 - Node_Connect */}
          <ProjectCard show={projectFilter === "all" || projectFilter === "web"}>
            <Left>
              <ProjectNum>08 — Team Project</ProjectNum>
              <TitleWrapper>
                <ProjectLogo src={nodeconnect} />
                <Title>Node_Connect</Title>
              </TitleWrapper>
              <MetaInfo>
                <MetaChip>2025.02.14 ~ 2025.02.21</MetaChip>
                <MetaChip>팀 프로젝트</MetaChip>
                <MetaChip>5인 팀</MetaChip>
              </MetaInfo>
              <Description>
                서버 없이 구현한 영화 추천 웹 플랫폼
              </Description>
              <ModernSlider slides={[
                { image: login },
                { image: signup },
                { image: mypage }
              ]} />
              <InfoCard>
                <StackTitle>기술 스택</StackTitle>
                <TechStack>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </TechStack>
              </InfoCard>
            </Left>
            <Right>
              <SummaryBox>
                인증 구조의 한계를 직접 경험하며
                웹 서비스 기본 구조를 학습한 프로젝트입니다.
              </SummaryBox>
              <SectionTitle>주요 기능</SectionTitle>
              <BulletList>
                <li>LocalStorage·Cookie 기반 로그인</li>
                <li>마이페이지 사용자 정보 관리</li>
                <li>서버 없는 인증 구조 경험</li>
              </BulletList>
              <SectionTitle>담당 역할</SectionTitle>
              <BulletList>
                <li>로그인, 회원가입 구현</li>
                <li>마이페이지 조회, 수정</li>
              </BulletList>
              <SectionTitle>이슈 및 해결</SectionTitle>
              <ProblemSolution>
                <strong>이슈</strong><br />
                인증 보안 구조의 한계<br /><br />
                <strong>해결</strong><br />
                JWT 기반 인증 필요성 인지 및 이후 프로젝트에 반영
              </ProblemSolution>
              <ButtonGroup>
                <LinkButton href="https://github.com/susuholee/NodeConnect_project" target="_blank">
                  <FaGithub /> GitHub
                </LinkButton>
                <LinkButton href="https://nodeconnectproject.vercel.app/" target="_blank">
                  <FiExternalLink /> 배포
                </LinkButton>
              </ButtonGroup>
            </Right>
          </ProjectCard>

        </ProjectList>
      </Inner>
    </Section>
  );
};

export default ProjectsSection;
