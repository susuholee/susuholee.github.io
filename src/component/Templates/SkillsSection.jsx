import React from "react";
import styled from "styled-components";
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
  windsurf
} from "../../assets/icons";



const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1180px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.6rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 3.5rem;
`;

const Category = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.4rem;
  color: #222;
  border-left: 4px solid #5c3a21;
  padding-left: 0.7rem;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

const Card = styled.div`
  flex: 0 0 220px;
  background: #fff;
  border-radius: 16px;
  padding: 1.6rem;
  border: 1px solid #eee;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px rgba(92, 58, 33, 0.18);
    border-color: #5c3a21;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 0.8rem;
`;

const Name = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

const Used = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
`;

/* ===== Skills Data ===== */

const SKILLS = [
 {
  title: "프로그래밍 언어",
  items: [
    { 
      name: "JavaScript", 
      img: javascript,
      used: "비동기 처리 및 인터랙션 로직 구현"
    },
    { 
      name: "TypeScript", 
      img: typescript,
      used: "타입 기반 데이터 구조 설계 및 안정적인 코드 작성"
    },
  ],
},
  {
    title: "프레임워크",
    items: [
      {
        name: "Next.js",
        img: next,
        used: "서버 사이드 렌더링을 기반으로 초기 데이터 처리 및 컴포넌트 구조 설계",
      },
      {
        name: "NestJS",
        img: nest,
        used: "모듈 기반 아키텍처 설계 및 Controller/Service 계층 구조 설계",
      },
    ],
  },
  {
    title: "라이브러리",
    items: [
      {
        name: "React",
        img: react,
        used: "함수형 컴포넌트 기반 UI 설계 및 재사용 가능한 구조 설계",
      },
    ],
  },
  {
    title: "상태 관리 / 데이터 흐름",
    items: [
      {
        name: "React Query",
        img: react_query,
        used: "서버 상태 관리 및 API 캐싱 전략 적용",
      },
      {
        name: "Zustand",
        img: zustand,
        used: "전역 UI 상태 및 사용자 인터랙션 상태 관리",
      },
    ],
  },
  {
    title: "스타일링",
    items: [
      {
        name: "Tailwind CSS",
        img: tailwind,
        used: "유틸리티 클래스를 활용해 빠른 UI 구성 및 반응형 레이아웃 구현",
      },
      {
        name: "Styled-Components",
        img: styledcomponent,
        used: "컴포넌트 단위로 스타일을 분리하고 props 기반으로 동적인 스타일을 제어하기 위해 사용",
      },
    ],
  },
  {
    title: "데이터베이스",
    items: [
      {
        name: "PostgreSQL",
        img: Postgresql,
        used: "관계형 데이터 구조 설계 및 정규화 기반 모델링",
      },
      {
        name: "Prisma",
        img: Prisma,
        used: "타입 기반 ORM을 활용한 데이터 접근 로직 구현",
      },
    ],
  },
  {
    title: "AI 기반 개발 워크플로우",
    items: [
      {
        name: "Cursor AI",
        img: cursorAi,
        used: "기능 구현 가속 및 반복 작업 자동화",
      },
      {
        name: "Windsurf",
        img: windsurf,
        used: "프로젝트 코드 분석 및 자동 코드 생성 경험",
      },
    ],
  },
];



const SkillsSection = () => {
  return (
    <Section id="skills">
      <Title>기술 스택</Title>
      <Description>
        실제 프로젝트에서 문제를 해결하며 활용한 기술과 개발 도구입니다.
      </Description>

      {SKILLS.map((group) => (
        <Category key={group.title}>
          <CategoryTitle>{group.title}</CategoryTitle>
          <Flex>
            {group.items.map((skill) => (
              <Card key={skill.name}>
                {skill.img && <Icon src={skill.img} alt={skill.name} />}
                <Name>{skill.name}</Name>
                {skill.used && <Used>{skill.used}</Used>}
              </Card>
            ))}
          </Flex>
        </Category>
      ))}
    </Section>
  );
};

export default SkillsSection;
