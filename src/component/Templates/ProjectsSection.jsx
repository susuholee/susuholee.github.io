import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  media
} from "../../assets/gif";

import {
  nodeconnect, scoop, notionary_logo,
  Sealium_logo, NewSive_logo
} from "../../assets/logo";



const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  background: #000;
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
  ${({ left }) => (left ? "left: 1rem" : "right: 1rem")};
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  border: none;
  color: #fff;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

const SlideMedia = ({ src }) => {
  const isVideo = src.endsWith(".mp4");
  return isVideo ? (
    <video src={src} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "contain" }} />
  ) : (
    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
  );
};

const ModernSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <SliderWrapper>
      {slides.map((s, i) => (
        <Slide key={i} active={i === index}>
          <SlideMedia src={s.image} />
        </Slide>
      ))}
      <Arrow left onClick={prev}><FaChevronLeft /></Arrow>
      <Arrow onClick={next}><FaChevronRight /></Arrow>
    </SliderWrapper>
  );
};

/* ================= Layout ================= */

const Section = styled.section`
  padding: 6rem 1.5rem;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ProjectCard = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Left = styled.div`flex: 1;`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;



const TitleWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const ProjectLogo = styled.img`
  width: 36px;
  height: 36px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0.6rem 0;
`;

const MetaChip = styled.span`
  font-size: 13px;
  padding: 4px 10px;
  background: #f3f4f6;
  border-radius: 999px;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const InfoCard = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 0.75rem;
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0;

  li {
    list-style: none;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
`;

const SummaryBox = styled.div`
  padding: 1rem;
  background: #f9fafb;
  border-left: 4px solid #5c3a21;
  line-height: 1.6;
`;

const SectionTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: #5c3a21;
`;

const BulletList = styled.ul`
  padding-left: 1rem;
  line-height: 1.6;

  li {
    margin-bottom: 0.3rem;
  }
`;

const ProblemSolution = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #444;

  strong {
    color: #222;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: auto;
`;

const LinkButton = styled.a`
  flex: 1;
  padding: 0.45rem;
  border-radius: 999px;
  border: 1.5px solid #5c3a21;
  color: #5c3a21;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #5c3a21;
    color: #fff;
  }
`;



const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Heading>프로젝트</Heading>

      <ProjectWrapper>

        {/* NewSive */}
        <ProjectCard>
          <Left>
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
              { image: chat},
              { image: media},
            ]} />

            <InfoCard>
              <h4>기술 스택</h4>
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

        {/* Sealium */}
        <ProjectCard>
          <Left>
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
              <h4>기술 스택</h4>
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
              <li>DID 기반 VC 발급,조회,상태 관리 UI</li>
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
              <LinkButton href="https://sealiumback.store" target="_blank">
                <FiExternalLink /> 배포
              </LinkButton>
            </ButtonGroup>
          </Right>
        </ProjectCard>

        {/* Notionary */}
        <ProjectCard>
          <Left>
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
              <h4>기술 스택</h4>
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

        {/* Scoop */}
        <ProjectCard>
          <Left>
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
              <h4>기술 스택</h4>
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

        {/* Node_Connect */}
        <ProjectCard>
          <Left>
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
              <h4>기술 스택</h4>
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

      </ProjectWrapper>
    </Section>
  );
};

export default ProjectsSection;
