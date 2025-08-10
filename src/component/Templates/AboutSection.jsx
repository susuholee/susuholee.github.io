import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Section = styled.section`
  padding: 5rem 1.5rem 2rem;
  background: #ffffff;
  min-height: 100vh;
`;

const Notebook = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  overflow: hidden;
`;

const Page = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  min-height: 320px;
`;

const LeftPage = styled(Page)`
  border-right: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.4rem;
  color: #2f3e4f;
`;

const RightPage = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #4d5c6b;
  line-height: 1.7;
  white-space: pre-line;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

const Button = styled.button`
  background: #edf2f7;
  border: 1px solid #d6dde5;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2f3e4f;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #dfe6ed;
  }

  &:disabled {
    background: #f3f6f9;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const pageVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  const items = [
    {
      title: "코드로 세상을 움직일 수 있다는 가능성",
      text: `처음 코드를 입력해 로봇을 움직였던 순간, 내가 만든 로직이 실체를 움직일 수 있다는 가능성을 보았습니다.
이 경험이 개발에 대한 관심으로 이어졌고, 사용자에게 직접 영향을 주는 UI를 설계·구현하는 프론트엔드에 몰입하게 되었습니다.`
    },
    {
      title: "일상에서 ‘개발자의 시선’을 갖다",
      text: `버스 안 G Bus-TV를 보며 '이 작은 화면의 정보 전달은 어떻게 설계됐을까?'를 떠올린 뒤로,
저는 늘 사용자 입장에서 정보가 어떻게 흐르고, 어떤 인터랙션이 더 자연스러운지 고민하게 되었습니다.`
    },
    {
      title: "끝까지 파고드는 학습 태도",
      text: `처음엔 모든 게 새로웠습니다. 강의와 문서로 개념을 파고들고, 예제로 예상→실행→검증을 반복했습니다.
디버깅으로 원인을 끝까지 추적하는 습관을 통해 문제 해결력을 키워왔고, 지금도 같은 방식으로 배우고 있습니다.`
    },
    {
      title: "백엔드 경험을 '데이터 흐름 이해'로 전환",
      text: `Scoop 초기에 백엔드 기능 일부를 맡으며 DB 설계, API 구현, 응답 구조를 직접 다뤘습니다.
당시 백엔드 역량은 약했지만, 그 경험 덕분에 클라이언트 요청이 서버를 거쳐 다시 화면까지 도달하는 전 과정을 몸으로 익혔고,
이후 프론트엔드 설계에서도 데이터 제약과 흐름을 자연스럽게 고려합니다.`
    },
    {
      title: "사용자 경험을 우선하는 개발 철학",
      text: `카카오맵 API 기반 시각화 기능을 만들며 '사용자는 이 기능을 어떻게 경험할까?'를 먼저 묻습니다.
단순히 보이게 하는 것을 넘어, 흐름과 인터랙션까지 설계해 작은 요소 하나도 경험에 기여하도록 고민합니다.`
    },
    {
      title: "실전 감각과 협업 역량 — Scoop",
      text: `광역·지역 데이터가 섞여 탐색이 불편했던 구조를 시/군구·지하철 좌표로 재구성해 탐색 경험을 개선했습니다.
Git 브랜치 전략, 코드리뷰, 요구사항 정리 등 협업 프로세스를 실전처럼 경험했습니다.`
    },
    {
      title: "기술보다 사용자를 먼저 생각하는 프론트엔드",
      text: `저는 '동작하는 기능'보다 ‘편리하게 쓰였다’는 피드백에서 더 큰 보람을 느낍니다.
복잡한 기술을 감추고, 사용자에게 자연스럽게 다가가는 흐름을 설계하는 개발자로 계속 성장하겠습니다.`
    }
  ];

  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % items.length);
    }, 4500); 
    return () => clearInterval(interval);
  }, [items.length]);

  const nextPage = () => {
    if (page < items.length - 1) setPage(page + 1);
    else setPage(0);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
    else setPage(items.length - 1);
  };

  return (
    <Section id="about">
      <AnimatePresence mode="wait">
        <Notebook key={page}>
          <LeftPage
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {items[page].title}
          </LeftPage>
          <RightPage
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <CardText>{items[page].text}</CardText>
            <NavButtons>
              <Button onClick={prevPage}>이전</Button>
              <Button onClick={nextPage}>다음</Button>
            </NavButtons>
          </RightPage>
        </Notebook>
      </AnimatePresence>
    </Section>
  );
};

export default AboutSection;
