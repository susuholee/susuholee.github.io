import React from "react";
import styled from "styled-components";
import {
  html5, css3, tailwind, javascript, typescript, react, next, styledcomponent,
  react_query, redux, nodejs, Express, Mysql,
  aws, kakaomap, zustand, solidity,
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
    items: [{ name: "React Query", img: react_query }],
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
  { title: "블록체인", items: [{ name: "Solidity", img: solidity }] },
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

/* ===== styled components ===== */
const Section = styled.section`
  padding: 6rem 1.5rem;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.8rem;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.6rem;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

const CategoryBlock = styled.div`
  margin-bottom: 3.5rem;

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.2rem;
  padding-left: 0.6rem;
  border-left: 4px solid #5c3a21;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const SkillCard = styled.div`
  flex: 1 1 120px;
  max-width: 150px;
  min-width: 100px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  padding: 1.2rem 0.8rem;
  text-align: center;
  transition: all 0.25s ease;
  cursor: default;
  box-shadow: 0 6px 18px rgba(0,0,0,0.05);
  position: relative;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: #c69b7d;
    box-shadow: 0 10px 24px rgba(92, 58, 33, 0.15);
  }

  &:hover .badge {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0.5rem;
    border-radius: 0.75rem;
  }
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  margin-bottom: 0.6rem;

  @media (max-width: 480px) {
    width: 34px;
    height: 34px;
    margin-bottom: 0.4rem;
  }
`;

const Label = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #2e2e2e;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Badge = styled.div`
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
  background: #5c3a21;
  color: #fff;
  font-size: 0.72rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.65rem;
    padding: 0.25rem 0.6rem;
  }
`;

const SkillsSection = () => {
  return (
    <Section id="skills">
      <Title>기술 스택</Title>
      <Description>프로젝트에 활용한 경험이 있는 기술과 도구들입니다</Description>

      {SKILL_GROUPS.map((group) => (
        <CategoryBlock key={group.title}>
          <CategoryTitle>{group.title}</CategoryTitle>
          <FlexGrid>
            {group.items.map((skill) => (
              <SkillCard key={skill.name}>
                <Icon src={skill.img} alt={skill.name} />
                <Label>{skill.name}</Label>
                <Badge className="badge">{skill.name} 경험 있음</Badge>
              </SkillCard>
            ))}
          </FlexGrid>
        </CategoryBlock>
      ))}
    </Section>
  );
};

export default SkillsSection;
