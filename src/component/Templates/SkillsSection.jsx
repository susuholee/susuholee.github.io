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
  redux,
  zustand,
  nodejs,
  nest,
  Mysql,
  Postgresql,
  Sequelize,
  Prisma,
  aws,
  kakaomap,
  solidity,
  git,
  github,
  figma,
  notion,
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
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px rgba(92,58,33,0.18);
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


const SKILLS = [
  {
    title: "프론트엔드 / UI",
    items: [
      { name: "JavaScript", img: javascript, used: "NewSive, Sealium, Notionary" },
      { name: "TypeScript", img: typescript, used: "NewSive" },
      { name: "React", img: react, used: "NewSive, Sealium, Notionary" },
      { name: "Next.js", img: next, used: "NewSive, Sealium" },
      { name: "Tailwind CSS", img: tailwind, used: "NewSive, Sealium" },
      { name: "Styled-Components", img: styledcomponent, used: "Notionary" },
    ],
  },
  {
    title: "상태 관리 / 데이터 흐름",
    items: [
      { name: "React Query", img: react_query, used: "NewSive, Sealium, Notionary" },
      { name: "Zustand", img: zustand, used: "NewSive, Sealium" },
      { name: "Redux", img: redux, used: "Notionary" },
    ],
  },
  {
    title: "백엔드 / 서버",
    items: [
      { name: "Node.js", img: nodejs, used: "NewSive, Scoop" },
      { name: "NestJS", img: nest, used: "NewSive, Sealium" },
    ],
  },
  {
    title: "데이터베이스 / ORM",
    items: [
      { name: "MySQL", img: Mysql, used: "Notionary, Scoop" },
      { name: "PostgreSQL", img: Postgresql, used: "NewSive" },
      { name: "Sequelize", img: Sequelize, used: "Notionary, Scoop" },
      { name: "Prisma", img: Prisma, used: "NewSive" },
    ],
  },
  {
    title: "인프라",
    items: [
      { name: "AWS", img: aws, used: "NewSive, Sealium, Notionary, Scoop" },
    ],
  },
  {
    title: "외부 API / 기타 경험",
    items: [
      { name: "Kakao Map API", img: kakaomap, used: "Scoop" },
      { name: "Solidity", img: solidity, used: "Sealium" },
    ],
  },
  {
    title: "협업 도구",
    items: [
      { name: "Git", img: git },
      { name: "GitHub", img: github },
      { name: "Figma", img: figma },
      { name: "Notion", img: notion },
    ],
  },
];

const SkillsSection = () => {
  return (
    <Section id="skills">
      <Title>기술 스택</Title>
      <Description>
        실제 프로젝트에서 문제를 해결하며 사용한 기술들입니다
      </Description>

      {SKILLS.map((group) => (
        <Category key={group.title}>
          <CategoryTitle>{group.title}</CategoryTitle>
          <Flex>
            {group.items.map((skill) => (
              <Card key={skill.name}>
                <Icon src={skill.img} alt={skill.name} />
                <Name>{skill.name}</Name>
                {skill.used && (
                  <Used>프로젝트 경험: {skill.used}</Used>
                )}
              </Card>
            ))}
          </Flex>
        </Category>
      ))}
    </Section>
  );
};

export default SkillsSection;
