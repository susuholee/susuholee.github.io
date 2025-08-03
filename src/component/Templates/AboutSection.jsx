import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 6rem 1.5rem;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  flex: 1 1 280px;
  background: #fdfdfd;
  padding: 1.8rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  min-width: 260px;
  max-width: 360px;

  &:hover {
    transform: translateY(-3px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const AboutSection = () => {
  const items = [
    {
      title: "사용자 경험을 중심에 두는 개발자",
      text: `코드를 입력해 로봇을 움직이게 했던 첫 경험이 개발로 이어졌습니다. 기술이 사용자의 일상에 어떤 영향을 줄 수 있는지를 고민하며 프론트엔드 개발에 몰입하게 되었습니다.`,
    },
    {
      title: "일상을 개발자의 시선으로 바라보다",
      text: `버스 안 G Bus-TV를 보고 "이건 어떻게 구성되어 있을까?"라는 궁금증이 들었습니다. 그 순간부터 주변의 많은 것들을 개발자의 관점에서 보기 시작했습니다.`,
    },
    {
      title: "문제 해결을 위한 탐색과 반복",
      text: `이해되지 않는 개념은 강의, 문서, 예제 코드를 통해 직접 실행해 보며 학습했습니다. 예측 → 실행 → 검증 → 디버깅을 반복하며 문제 해결 감각을 길러왔습니다.`,
    },
    {
      title: "작은 기능도 사용자 관점으로",
      text: `카카오맵 API와 좌표 데이터를 활용한 UI 구성에서 단순한 기능 구현을 넘어, 사용자 입장에서 어떤 흐름이 편한지 먼저 고민하고 인터랙션을 설계했습니다.`,
    },
    {
      title: "실전 프로젝트 경험: Scoop",
      text: `초기에는 광역/지역 데이터가 혼합돼 있어 탐색이 어려웠습니다. 이를 시군구/지하철 기준으로 분리해 사용자 기준에 맞춘 탐색 경험을 구현했습니다.`,
    },
    {
      title: "백엔드도 경험하며 구조를 이해하다",
      text: `Scoop에서 DB 설계, API 구현, 데이터 구조화 등을 직접 수행하며 백엔드와의 연결 구조도 경험했습니다. 전체 흐름을 이해한 개발이 가능해졌습니다.`,
    },
    {
      title: "팀워크를 통해 성장하는 개발자",
      text: `Git 전략, PR 리뷰, 요구사항 문서화 등을 통해 협업을 실전처럼 경험했습니다. 기술뿐 아니라 소통의 중요성을 체득했고, 함께 성장하는 팀 문화를 지향합니다.`,
    },
    {
      title: "기술보다 사용자를 먼저 생각합니다",
      text: `단순히 동작하는 기능을 넘어서, 사용자에게 자연스럽고 직관적인 흐름을 제공하는 UI를 고민합니다. 기술의 복잡함을 감추고 경험 중심의 개발을 추구합니다.`,
    },
  ];

  return (
    <Section id="about">
      <Container>
        <Flex>
          {items.map((item, i) => (
            <Card
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </Flex>
      </Container>
    </Section>
  );
};

export default AboutSection;
