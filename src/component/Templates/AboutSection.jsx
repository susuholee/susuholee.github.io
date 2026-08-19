import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background: #ffffff;
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

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 3.5rem;
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  gap: 1.6rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Card = styled(motion.div)`
  flex: 1;
  background: #fff;
  border-radius: 20px;
  padding: 2.4rem;
  border: 1px solid #e2e8f0;
  border-top: 3px solid #3D7EAA;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 48px rgba(61,126,170,0.1);
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3D7EAA;
  background: rgba(61,126,170,0.08);
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
  line-height: 1.45;
`;

const Summary = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.9rem;
  line-height: 1.6;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.8;
  color: #6b7280;
  white-space: pre-line;
`;

const AboutSection = () => {
  const items = [
    {
      eyebrow: "기획 & 제작 효율",
      title: "상상을 빠르게 화면으로 구현하는 크리에이터",
      summary: "머릿속 아이디어를 최신 AI 툴로 신속하게 시각화합니다.",
      description:
        "Google Flow, Higgsfield 같은 생성형 AI 영상 툴을 조합해\n" +
        "기획 단계부터 제작까지의 시행착오를 줄입니다.\n" +
        "더 적은 시간으로 완성도 높은 스토리를 뽑아내는 것에 집중합니다."
    },
    {
      eyebrow: "연출 & 퀄리티",
      title: "디테일과 일관성을 놓치지 않는 연출력",
      summary: "장면이 바뀌어도 인물과 분위기가 깨지지 않게 잡습니다.",
      description:
        "AI 영상 특유의 '장면마다 튀는 현상'이나 캐릭터 붕괴를 막기 위해\n" +
        "프롬프트를 다각도로 테스트하고 시각적 연속성을 유지합니다.\n" +
        "시청자가 어색함 없이 스토리에 몰입하도록 만듭니다."
    },
    {
      eyebrow: "트렌드 & 감각",
      title: "트렌디한 시각 언어로 메시지를 전달하는 크리에이터",
      summary: "새로운 기술을 빠르게 흡수해 콘텐츠의 재미를 더합니다.",
      description:
        "매주 나오는 신규 AI 기능과 모션 기법을 직접 써보며\n" +
        "요즘 대중이 반응하는 영상 스타일을 계속 연구합니다.\n" +
        "기획 의도가 직관적으로 전달되는 영상 콘텐츠를 만듭니다."
    }
  ];

  return (
    <Section id="about">
      <Inner>
        <SectionLabel>About Me</SectionLabel>
        <Heading>저는 이런 AI 융합 크리에이터가 되고 싶습니다</Heading>

        <Flex>
          {items.map((item, idx) => (
            <Card
              key={idx}
              initial={{ opacity: 0, y: 28 }}
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
      </Inner>
    </Section>
  );
};

export default AboutSection;
