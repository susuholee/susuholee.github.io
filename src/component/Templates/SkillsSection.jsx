import React from "react";
import styled from "styled-components";
import {
  // Frontend
  html5, css3, tailwind, javascript, typescript, react, next, styledcomponent,
  // Data Fetching
  react_query, redux,
  // Backend
  nodejs, Express, Mysql,
  // Infra / API
  aws, kakaomap,
  // State
  zustand,
  // Blockchain
  solidity,
  // Tools
  git, github, notion, figma,
} from "../../assets/icons";

const SKILL_GROUPS = [
  {
    title: "프론트엔드",
    items: [
      { name: "HTML5", img: html5 },
      { name: "CSS3", img: css3 },
      { name: "JavaScript", img: javascript },
      { name: "TypeScript", img: typescript },
      { name: "React", img: react },
      { name: "Next.js", img: next },
      { name: "Tailwind CSS", img: tailwind },
      { name: "Styled-Components", img: styledcomponent },
    ],
  },
  {
    title: "데이터 패칭",
    items: [
      { name: "React Query", img: react_query },
    ],
  },
  {
    title: "상태관리",
    items: [
      { name: "Zustand", img: zustand },
      { name: "Redux", img: redux },
    ],
  },
  {
    title: "백엔드",
    items: [
      { name: "Node.js", img: nodejs },
      { name: "Express", img: Express },
      { name: "MySQL", img: Mysql },
    ],
  },
  {
    title: "배포 / API",
    items: [
      { name: "AWS EC2", img: aws },
      { name: "Kakao Map API", img: kakaomap },
    ],
  },
  {
    title: "블록체인",
    items: [{ name: "Solidity", img: solidity }],
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

// ===== styled =====
const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #fffdf8;
  max-width: 1140px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #2e1e12;
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #6b5847;
  margin-bottom: 3rem;
`;

const CategoryBlock = styled.div`
  margin-bottom: 3.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #3e2b20;
  border-left: 4px solid #a67c52;
  padding-left: 0.75rem;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 1.2rem;
`;

const SkillCard = styled.div`
  background-color: #f9f6f1;
  border-radius: 0.75rem;
  padding: 1rem 0.5rem;
  text-align: center;
  transition: transform 0.2s;
  position: relative;
  cursor: default;

  &:hover { transform: translateY(-5px); }

  &:hover .tooltip {
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const Label = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: #3c2f26;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  background-color: #333;
  color: #fff;
  font-size: 0.7rem;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  opacity: 0;
  transition: all 0.25s ease;
  white-space: nowrap;
  pointer-events: none;
`;

const SkillsSection = () => {
  return (
    <Section id="skills">
      <Title>기술 스택</Title>
      <Description>실무 경험 기반으로 익숙한 기술과 도구입니다</Description>

      {SKILL_GROUPS.map((group) => (
        <CategoryBlock key={group.title}>
          <CategoryTitle>{group.title}</CategoryTitle>
          <Grid>
            {group.items.map((skill) => (
              <SkillCard key={skill.name}>
                <Icon src={skill.img} alt={skill.name} />
                <Label>{skill.name}</Label>
                <Tooltip className="tooltip">{skill.name} 사용 경험 있음</Tooltip>
              </SkillCard>
            ))}
          </Grid>
        </CategoryBlock>
      ))}
    </Section>
  );
};

export default SkillsSection;
