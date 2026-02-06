import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

/* ===== assets ===== */
import {
  login, signup, mypage,
  area, subway, filter,
  category, comment, post,
  sealium_signup, dashboard,
  vc_issue, vc_list
} from "../../assets/gif";

import {
  nodeconnect, scoop, notionary_logo,
  Sealium_logo, NewSive_logo
} from "../../assets/logo";

/* ================= Slider ================= */

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
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  ) : (
    <img
      src={src}
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
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

/* ================= UI ================= */

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
              <MetaChip>개발 기간 : 2025.12.02 ~ 2026.02.01</MetaChip>
              <MetaChip>개인 프로젝트 (1인 개발)</MetaChip>
            </MetaInfo>

            <Description>
              실시간 뉴스 기반 정보 공유와 사용자 소통을 중심으로 한 웹 플랫폼
            </Description>

            {/* <ModernSlider slides={[
              { image: login },
              { image: signup },
              { image: mypage },
            ]} /> */}

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
              실시간 통신과 인증 구조를 직접 설계하며
              서비스 전반의 흐름을 단독으로 구현한 프로젝트입니다.
            </SummaryBox>

            <SectionTitle>담당 역할: 프론트, 백엔드</SectionTitle>
            <BulletList>
              <li>JWT 기반 인증 및 보호 라우팅 구현</li>
              <li>Socket.IO 기반 실시간 채팅 및 알림 기능 개발</li>
            </BulletList>

            <SectionTitle>이슈 및 해결</SectionTitle>
            <ProblemSolution>
              <strong>이슈</strong><br />
            친구 추가시 데이터 불일치 발생
              <br /><br />
              <strong>해결</strong><br />
           친구 관계 생성 시 양방향 관계(User–Friend)와 알림 생성 로직을 하나의 트랜잭션으로 묶어 처리하여 데이터 무결성 보장
            </ProblemSolution>

            <ButtonGroup>
              <LinkButton href="https://github.com/susuholee/NewSive_FrontEnd" target="_blank">
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
              <MetaChip>개발 기간 : 2025.08.04 ~ 2025.09.17</MetaChip>
              <MetaChip>팀 프로젝트 (프론트엔드 2명, 백엔드 1명)</MetaChip>
            </MetaInfo>

            <Description>
              DID 기반 VC 발급 및 검증을 지원하는 보안 중심 웹 플랫폼
            </Description>

            <ModernSlider slides={[
              { image: sealium_signup },
              { image: dashboard },
              { image: vc_issue },
              { image: vc_list },
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
              VC 발급 및 검증 화면과 상태 관리 구조를 중심으로
              프론트엔드 주요 기능을 담당한 프로젝트입니다.
            </SummaryBox>

            <SectionTitle>담당 역할: 프론트</SectionTitle>
            <BulletList>
              <li>VC 발급 및 조회 핵심 UI 구현</li>
              <li>React Query + Zustand 상태 관리 구조 설계</li>
            </BulletList>

            <SectionTitle>이슈 및 해결</SectionTitle>
            <ProblemSolution>
              <strong>이슈</strong><br />
              로그인 이후 리다이렉트 과정에서
              상태 변경이 반복되며 무한 렌더링이 발생
              <br /><br />
              <strong>해결</strong><br />
              리다이렉트 로직을 전역 레이아웃으로 이동하고
              조건 분기를 추가해 렌더링 루프를 차단
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
              <MetaChip>개발 기간 : 2025.05.16 ~ 2025.06.01</MetaChip>
              <MetaChip>팀 프로젝트 (프론트엔드 1명, 백엔드 2명)</MetaChip>
            </MetaInfo>

            <Description>
              노션 워크스페이스 공유를 기반으로 한 커뮤니티 플랫폼
            </Description>

            <ModernSlider slides={[
              { image: category },
              { image: post },
              { image: comment },
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
              게시글과 워크스페이스 기능을 중심으로
              커뮤니티 사용성을 개선한 프로젝트입니다.
            </SummaryBox>

            <SectionTitle>담당 역할: 프론트, 백엔드</SectionTitle>
            <BulletList>
              <li>게시글 CRUD 및 댓글 기능 구현</li>
              <li>JWT 인증 미들웨어 도입</li>
            </BulletList>

            <SectionTitle>이슈 및 해결</SectionTitle>
            <ProblemSolution>
              <strong>이슈</strong><br />
              게시글과 워크스페이스를 동시에 노출하면서
              화면 가독성이 크게 저하
              <br /><br />
              <strong>해결</strong><br />
              워크스페이스 영역을 모달 및 탭 구조로 분리해
              콘텐츠 집중도를 개선
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
              <MetaChip>개발 기간 : 2025.04.02 ~ 2025.04.18</MetaChip>
              <MetaChip>팀 프로젝트 (프론트엔드 1명, 백엔드 2명)</MetaChip>
            </MetaInfo>

            <Description>
              위치 기반으로 동호회를 탐색할 수 있는 웹 서비스
            </Description>

            <ModernSlider slides={[
              { image: area },
              { image: subway },
              { image: filter },
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
              사용자 탐색 경험을 높인 프로젝트입니다.
            </SummaryBox>

            <SectionTitle>담당 역할 : 프론트, 백엔드</SectionTitle>
            <BulletList>
              <li>Kakao Map API 연동</li>
              <li>지역 및 필터링 로직 설계</li>
            </BulletList>

            <SectionTitle>이슈 및 해결</SectionTitle>
            <ProblemSolution>
              <strong>이슈</strong><br />
              동일 지역에 여러 동호회가 표시되며
              지도 마커가 겹치는 문제 발생
              <br /><br />
              <strong>해결</strong><br />
              회원 수 기준으로 마커 크기를 차등 적용하고
              필터 변경 시 지도와 리스트를 동시에 갱신
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
              <MetaChip>개발 기간 : 2025.02.14 ~ 2025.02.21</MetaChip>
              <MetaChip>팀 프로젝트 (총 5명, 페이지별 역할 분담)</MetaChip>
            </MetaInfo>

            <Description>
              영화 추천과 사용자 취향 관리를 제공하는 웹 플랫폼
            </Description>

            <ModernSlider slides={[
              { image: login },
              { image: signup },
              { image: mypage },
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
              인증과 마이페이지 기능을 구현하며
              웹 서비스 기본 구조를 학습한 프로젝트입니다.
            </SummaryBox>

            <SectionTitle>담당 역할: 로그인, 회원가입, 마이페이지</SectionTitle>
            <BulletList>
              <li>로그인 및 회원가입 기능 구현</li>
              <li>마이페이지 조회 및 수정 기능 개발</li>
            </BulletList>

            <SectionTitle>이슈 및 해결</SectionTitle>
            <ProblemSolution>
              <strong>이슈</strong><br />
              로그인 상태가 새로고침 시 유지되지 않고
              비밀번호가 평문으로 저장되는 구조적 한계 존재
              <br /><br />
              <strong>해결</strong><br />
              JWT 기반 인증 구조의 필요성을 인지하고
              이후 프로젝트에서 보안 설계를 적극 반영
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
