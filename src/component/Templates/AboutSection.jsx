import styled from "styled-components";
import { motion } from "framer-motion";

/* ===== Layout ===== */
const Section = styled.section`
  padding: 6rem 1.5rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 3rem;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  gap: 1.8rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Card = styled(motion.div)`
  flex: 1;
  background: #fff;
  border-radius: 18px;
  padding: 2.2rem;
  border: 1px solid #eee;
  box-shadow: 0 10px 28px rgba(0,0,0,0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 36px rgba(0,0,0,0.1);
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #5c3a21;
  margin-bottom: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.8rem;
`;

const Summary = styled.p`
  font-size: 1.05rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.9rem;
  line-height: 1.6;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: #555;
  white-space: pre-line;
`;

const AboutSection = () => {
  const items = [
  {
    eyebrow: "성장 배경",
    title: "낯선 영역을 넘어 시야를 넓힌 개발자",
    summary: "도전을 통해 서비스 전체 흐름을 이해하는 개발자로 성장했습니다.",
    description:
      "학부 시절 처음 접한 프로그래밍 언어는 Java였지만, 당시에는 개발 방식이 익숙하지 않아 백엔드 영역에 막연한 어려움을 느꼈습니다. " +
      "이를 극복하고자 국비지원 개발자 과정을 수강하며 웹 서비스 전반을 다시 학습했고, Scoop 프로젝트에서 프론트엔드와 백엔드를 함께 담당하며 " +
      "서버 로직과 데이터 흐름을 직접 설계하고 구현했습니다.\n\n" +
      "이 경험을 통해 특정 영역에 국한되지 않고, 서비스가 어떻게 연결되고 동작하는지 이해하는 개발자로 성장했습니다."
  },
  
  {
    eyebrow: "문제 해결 방식",
    title: "구조를 분석하여 근본 원인을 해결하는 개발자",
    summary: "현상보다 데이터 흐름과 구조를 먼저 살핍니다.",
    description:
      "NewSive 프로젝트에서 친구 추가 시 관계 데이터는 생성되었지만 알림 데이터가 누락되는 문제가 발생했습니다.\n\n" +
      "두 작업이 분리된 트랜잭션으로 처리되고 있음을 확인하고, Prisma 트랜잭션을 적용하여 하나의 작업으로 묶어 처리하도록 개선했습니다. " +
      "그 결과 데이터 무결성을 확보하고 예외 상황에서도 안정적으로 동작하는 구조를 구현했습니다."
  },
  {
    eyebrow: "성장 방향",
    title: "AI와 협업하며 더 나은 개발 방식을 만드는 개발자",
    summary: "새로운 기술을 학습하고, 실제 개발 방식에 적용합니다.",
    description:
      "Cursor AI와 WindSurf 등 AI 툴을 활용하여 코드 리팩토링, 테스트 작성, 기능 설계 과정에서 개발 생산성을 높이고 있습니다. " +
      "AI와 협업하는 개발 방식을 통해 반복 구현은 효율화하고, 설계와 품질 개선에 더 집중하는 개발을 지향합니다.\n\n" +
      "변화하는 기술 흐름 속에서도 새로운 도구를 빠르게 학습하고, 실무에 적용하며 지속적으로 성장하고 있습니다."
  }
];

  return (
    <Section id="about">
      <Container>
        <Heading>저는 이런 개발자가 되고 싶습니다</Heading>

        <Flex>
          {items.map((item, idx) => (
            <Card
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Eyebrow>{item.eyebrow}</Eyebrow>
              <Title>{item.title}</Title>
              <Summary>{item.summary}</Summary>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </Flex>
      </Container>
    </Section>
  );
};

export default AboutSection;
