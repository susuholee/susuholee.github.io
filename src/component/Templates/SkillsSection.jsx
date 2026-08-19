import React from "react";
import styled from "styled-components";
import { SiOpenai } from "react-icons/si";
import {
  javascript,
  typescript,
  react,
  next,
  tailwind,
  styledcomponent,
  react_query,
  zustand,
  nest,
  Postgresql,
  Prisma,
  cursorAi,
  windsurf,
  claudeCode,
  supabase,
  antigravity,
  flow
} from "../../assets/icons";

const Section = styled.section`
  background: #f7f7f7;
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

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  color: #0f172a;
  margin-bottom: 0.7rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 4.5rem;
`;

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
  align-items: start;
  padding: 2rem 0;
  border-top: 1px solid #f1f5f9;

  &:last-child { border-bottom: 1px solid #f1f5f9; }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const CategoryLabel = styled.h3`
  font-size: 0.82rem;
  font-weight: 700;
  color: #3D7EAA;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding-top: 0.5rem;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 0.9rem 1.2rem;
  min-width: 200px;
  max-width: 260px;
  flex: 1;
  transition: all 0.22s ease;
  cursor: default;

  &:hover {
    border-color: #3D7EAA;
    background: #fff;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(61,126,170,0.12);
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-top: 2px;
  flex-shrink: 0;
`;

const ToolIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  flex-shrink: 0;
  color: #111827;
  font-size: 28px;
`;

const CardText = styled.div`
  flex: 1;
  min-width: 0;
`;

const Name = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.25rem;
`;

const Used = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.45;
`;

const SKILLS = [
  {
    title: "프로그래밍 언어",
    items: [
      { name: "JavaScript", img: javascript, used: "비동기 처리 및 인터랙션 로직 구현" },
      { name: "TypeScript", img: typescript, used: "타입 기반 데이터 구조 설계 및 안정적인 코드 작성" },
    ],
  },
  {
    title: "프레임워크",
    items: [
      { name: "Next.js", img: next, used: "서버 사이드 렌더링을 기반으로 초기 데이터 처리 및 컴포넌트 구조 설계" },
      { name: "NestJS", img: nest, used: "모듈 기반 아키텍처 설계 및 Controller/Service 계층 구조 설계" },
    ],
  },
  {
    title: "라이브러리",
    items: [
      { name: "React", img: react, used: "함수형 컴포넌트 기반 UI 설계 및 재사용 가능한 구조 설계" },
    ],
  },
  {
    title: "상태 관리",
    items: [
      { name: "React Query", img: react_query, used: "서버 상태 관리 및 API 캐싱 전략 적용" },
      { name: "Zustand", img: zustand, used: "전역 UI 상태 및 사용자 인터랙션 상태 관리" },
    ],
  },
  {
    title: "스타일링",
    items: [
      { name: "Tailwind CSS", img: tailwind, used: "유틸리티 클래스를 활용해 빠른 UI 구성 및 반응형 레이아웃 구현" },
      { name: "Styled-Components", img: styledcomponent, used: "컴포넌트 단위로 스타일을 분리하고 props 기반으로 동적인 스타일을 제어하기 위해 사용" },
    ],
  },
  {
    title: "데이터베이스",
    items: [
      { name: "PostgreSQL", img: Postgresql, used: "관계형 데이터 구조 설계 및 정규화 기반 모델링" },
      { name: "Prisma", img: Prisma, used: "타입 기반 ORM을 활용한 데이터 접근 로직 구현" },
    ],
  },
  {
    title: "백엔드 서비스",
    items: [
      { name: "Supabase", img: supabase, used: "PostgreSQL 기반 DB, Auth, Storage를 통합 제공하는 BaaS 플랫폼 활용" },
    ],
  },
  {
    title: "AI 개발 도구",
    items: [
      { name: "Cursor AI", img: cursorAi, used: "기능 구현 가속 및 반복 작업 자동화" },
      { name: "Windsurf", img: windsurf, used: "프로젝트 코드 분석 및 자동 코드 생성 경험" },
      { name: "Claude Code", img: claudeCode, used: "AI 기반 코드 설계 및 프롬프트 엔지니어링 활용" },
      { name: "Codex", icon: SiOpenai, used: "AI 기반 코드 작성, 리팩터링 및 개발 작업 자동화" },
      { name: "Antigravity", img: antigravity, used: "AI 에이전트 기반 코드 생성 및 개발 작업 자동화" },
    ],
  },
  {
    title: "AI 영상 도구",
    items: [
      { name: "Google FLOW", img: flow, used: "AI 기반 영상 제작 도구로 포트폴리오 영상 및 소개 영상 제작" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <Section id="skills">
      <Inner>
        <SectionLabel>Skills</SectionLabel>
        <Title>기술 스택</Title>
        <Description>
          실제 프로젝트에서 문제를 해결하며 활용한 기술과 개발 도구입니다.
        </Description>

        {SKILLS.map((group) => (
          <CategoryRow key={group.title}>
            <CategoryLabel>{group.title}</CategoryLabel>
            <CardGrid>
              {group.items.map((skill) => (
                <Card key={skill.name}>
                  {skill.img && <Icon src={skill.img} alt={skill.name} />}
                  {skill.icon && (
                    <ToolIcon aria-hidden="true">
                      <skill.icon />
                    </ToolIcon>
                  )}
                  <CardText>
                    <Name>{skill.name}</Name>
                    {skill.used && <Used>{skill.used}</Used>}
                  </CardText>
                </Card>
              ))}
            </CardGrid>
          </CategoryRow>
        ))}
      </Inner>
    </Section>
  );
};

export default SkillsSection;
