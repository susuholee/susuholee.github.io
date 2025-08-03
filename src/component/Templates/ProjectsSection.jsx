import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  login, signup, mypage,
  area, subway, filter,
  category, comment, post, edit
} from "../../assets/gif";

import {
  nodeconnect, scoop, notionary_logo
} from "../../assets/logo"; // 로고들 import

// 스타일
const Section = styled.section`
  padding: 6rem 1.5rem;
  background-color: #ffffff;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #f9f9f9;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
  }
`;

const SwiperWrapper = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 1px solid #eee;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const SlideCaption = styled.p`
  font-size: 0.85rem;
  color: #555;
  margin-top: 0.25rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0 0.5rem;
`;

const ProjectLogo = styled.img`
  width: ${(props) => (props.size === "large" ? "36px" : "24px")};
  height: ${(props) => (props.size === "large" ? "36px" : "24px")};
  object-fit: contain;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
`;

const LinkButton = styled.a`
  flex: 1;
  padding: 0.6rem 1rem;
  background-color: #5c3a21;
  color: white;
  font-size: 0.9rem;
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3e2a1e;
  }
`;

// 컴포넌트
const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Heading>프로젝트</Heading>
      <ProjectGrid>

        {/* Node_Connect */}
        <ProjectCard>
          <SwiperWrapper>
            <Swiper modules={[Navigation]} navigation spaceBetween={10} slidesPerView={1} loop>
              <SwiperSlide><SlideImage src={login} alt="로그인" /></SwiperSlide>
              <SwiperSlide><SlideImage src={signup} alt="회원가입" /></SwiperSlide>
              <SwiperSlide><SlideImage src={mypage} alt="마이페이지" /></SwiperSlide>
            </Swiper>
            <SlideCaption>로그인 · 회원가입 · 마이페이지</SlideCaption>
          </SwiperWrapper>
          <TitleWrapper>
            <ProjectLogo src={nodeconnect} alt="Node_Connect 로고" size="large" />
            <Title>Node_Connect</Title>
          </TitleWrapper>
          <Description>
            HTML, CSS, JS 기반의 영화 추천 플랫폼.<br />
            LocalStorage와 쿠키로 사용자 정보를 관리하며 콘텐츠 흐름을 제공합니다.
          </Description>
          <ButtonGroup>
            <LinkButton href="https://github.com/susuholee/NodeConnect_project" target="_blank">GitHub</LinkButton>
            <LinkButton href="https://nodeconnectproject.vercel.app/" target="_blank">배포 보기</LinkButton>
          </ButtonGroup>
        </ProjectCard>

        {/* Scoop */}
        <ProjectCard>
          <SwiperWrapper>
            <Swiper modules={[Navigation]} navigation spaceBetween={10} slidesPerView={1} loop>
              <SwiperSlide><SlideImage src={area} alt="광역기반" /></SwiperSlide>
              <SwiperSlide><SlideImage src={subway} alt="지역기반" /></SwiperSlide>
              <SwiperSlide><SlideImage src={filter} alt="카테고리" /></SwiperSlide>
            </Swiper>
            <SlideCaption>필터 기반 동호회 탐색 기능</SlideCaption>
          </SwiperWrapper>
          <TitleWrapper>
            <ProjectLogo src={scoop} alt="Scoop 로고" />
            <Title>Scoop</Title>
          </TitleWrapper>
          <Description>
            동호회 탐색 플랫폼. Kakao Map API와 지역 기반 필터링을 통해 사용자 맞춤 위치 탐색 경험 제공.
          </Description>
          <ButtonGroup>
            <LinkButton href="https://github.com/susuholee/scoop_project/tree/susu" target="_blank">GitHub</LinkButton>
            <LinkButton href="https://joinscoop.store" target="_blank">배포 보기</LinkButton>
          </ButtonGroup>
        </ProjectCard>

        {/* Notionary */}
        <ProjectCard>
          <SwiperWrapper>
            <Swiper modules={[Navigation]} navigation spaceBetween={10} slidesPerView={1} loop>
              <SwiperSlide><SlideImage src={category} alt="카테고리" /></SwiperSlide>
              <SwiperSlide><SlideImage src={post} alt="작성" /></SwiperSlide>
              <SwiperSlide><SlideImage src={comment} alt="댓글" /></SwiperSlide>
              <SwiperSlide><SlideImage src={edit} alt="수정" /></SwiperSlide>
            </Swiper>
            <SlideCaption>게시글 · 댓글 · 수정 등 CRUD 기능</SlideCaption>
          </SwiperWrapper>
          <TitleWrapper>
            <ProjectLogo src={notionary_logo} alt="Notionary 로고" size="large" />
            <Title>Notionary</Title>
          </TitleWrapper>
          <Description>
            Markdown 기반 블로그 플랫폼. Express + MySQL 백엔드와 AWS EC2로 배포.  
            JWT 로그인, 게시글 작성 및 댓글 기능을 구현했습니다.
          </Description>
          <ButtonGroup>
            <LinkButton href="https://github.com/susuholee/Notionary_Project" target="_blank">GitHub</LinkButton>
            <LinkButton href="https://notionarys.store" target="_blank">배포 보기</LinkButton>
          </ButtonGroup>
        </ProjectCard>

      </ProjectGrid>
    </Section>
  );
};

export default ProjectsSection;
