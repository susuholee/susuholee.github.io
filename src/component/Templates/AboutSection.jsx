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
      title: "어려움을 넘어서며 시야를 넓힌 개발자",
      summary: "낯선 영역에 도전하며 개발에 대한 이해를 확장해 왔습니다.",
      description:
        "학부 시절 처음 접한 프로그래밍 언어는 Java였지만, 당시에는 언어와 개발 방식이 제게 잘 맞지 않아 " +
        "백엔드 영역에 대해 막연한 어려움을 느꼈습니다. 이러한 한계를 극복하고자 국비지원 개발자 과정을 수강하며 " +
        "웹 서비스 전반을 다시 배우기 시작했고, Scoop 프로젝트에서 프론트엔드와 백엔드를 함께 담당하며 " +
        "서버 로직과 데이터 흐름을 직접 다뤄보는 경험을 쌓았습니다.\n" +
        "이 과정을 통해 백엔드에 대한 거리감이 점차 줄어들었고, " +
        "서비스가 동작하는 전체 흐름을 이해하는 개발자로 성장할 수 있었습니다."
    },
    
    {
      eyebrow: "문제 해결 방식",
      title: "원인을 분석하여 문제를 해결하는 개발자",
      summary: "현상보다 구조와 흐름을 먼저 분석합니다.",
      description:
        "NewSive 프로젝트에서 친구 추가 시 친구 관계는 생성되었지만 알림 데이터가 누락되는 문제가 발생했습니다.\n\n" +
        "문제의 원인이 두 작업이 분리된 트랜잭션 구조에 있음을 파악하여 Prisma 트랜잭션을 적용해 하나의 작업으로 처리함으로써" +
        "데이터 무결성을 보장했습니다.",
    },
    {
      eyebrow: "성장 방향",
      title: "새로운 기술로 서비스에 활기를 더하는 개발자",
      summary: "도전을 통해 더 나은 사용자 경험을 만듭니다.",
      description:
        "새로운 기술을 빠르게 학습하고 실제 서비스에 적용하는 데 거부감이 없습니다. " +
        "변화하는 기술 흐름 속에서 도전을 멈추지 않으며, " +
        "서비스의 완성도를 높일 수 있는 방향으로 꾸준히 성장하고 있습니다."
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
