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
      eyebrow: "성장 배경",
      title: "서비스 전체 흐름을 이해하는 개발자",
      summary: "프론트엔드와 백엔드를 모두 경험하며 구조를 파악했습니다.",
      description:
        "국비지원 개발자 과정을 통해 웹 서비스 전반을 학습하고,\n" +
        "Scoop 프로젝트에서 프론트엔드·백엔드를 함께 담당하며\n" +
        "서버 로직과 데이터 흐름을 직접 설계, 구현했습니다."
    },
    {
      eyebrow: "문제 해결 방식",
      title: "현상보다 구조를 먼저 살피는 개발자",
      summary: "데이터 흐름 기반으로 근본 원인을 파악합니다.",
      description:
        "NewSive 프로젝트에서 친구 추가 시 알림 데이터 누락 문제가 발생했습니다.\n" +
        "두 작업이 분리된 트랜잭션으로 처리됨을 확인하고,\n" +
        "Prisma 트랜잭션으로 묶어 데이터 무결성을 확보했습니다."
    },
    {
      eyebrow: "성장 방향",
      title: "노 코드, 로우 코드 기반 플랫폼 서비스를 지향하는 개발자",
      summary: "개발 속도와 서비스 품질을 동시에 높이는 방향을 추구합니다.",
      description:
        "Supabase 등 BaaS 플랫폼을 활용해 인프라 구성 시간을 줄이고,\n" +
        "AI 툴을 통해 반복 작업을 자동화하며 핵심 설계에 집중합니다.\n" +
        "노 코드, 로우 코드 흐름에 맞는 최적화된 플랫폼 서비스 운영을 목표로 성장하고 있습니다."
    }
  ];

  return (
    <Section id="about">
      <Inner>
        <SectionLabel>About Me</SectionLabel>
        <Heading>저는 이런 개발자가 되고 싶습니다</Heading>

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
