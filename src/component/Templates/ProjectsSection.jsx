import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";

import {
  login, signup, mypage,
  area, subway, filter,
  category, comment, like, post, edit
} from "../../assets/gif";

import {
  nodeconnect, scoop, notionary_logo
} from "../../assets/logo";

/* ===== Styled Components ===== */
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
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(92, 58, 33, 0.08);
    backdrop-filter: blur(2px);
    color: #5c3a21;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 14px;
    font-weight: 700;
  }

  .swiper-pagination {
    position: static !important;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #c9b7ac; 
    opacity: 1;
    transition: transform 0.2s ease;
  }
  .swiper-pagination-bullet-active {
    background: #5c3a21;
    transform: scale(1.2);
  }
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
`;

const RoleList = styled.div`
  margin-top: 0.8rem;
  font-size: 0.88rem;
  color: #444;
  
  strong {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 600;
    color: #333;
  }

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    margin-bottom: 0.25rem;
    list-style: none;
  }

  svg {
    color: #5c3a21;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const LinkButton = styled.a`
  flex: 1 1 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  padding: 0.45rem 0.9rem;   
  font-size: 0.85rem;        
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  border-radius: 999px;      
  border: 1.5px solid #5c3a21; 
  color: #5c3a21;
  background: transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
              background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #5c3a21;  
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(92, 58, 33, 0.18);
  }
  &:active {
    transform: translateY(-1px) scale(0.99);
    box-shadow: 0 3px 8px rgba(92, 58, 33, 0.14);
  }
`;

/* ===== Component ===== */
const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Heading>프로젝트</Heading>
      <ProjectGrid>

        {/* Node_Connect */}
        <ProjectCard>
          <SwiperWrapper>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              loop
            >
              <SwiperSlide>
                <SlideImage src={login} alt="로그인" />
                <SlideCaption>로그인</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={signup} alt="회원가입" />
                <SlideCaption>회원가입</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={mypage} alt="마이페이지" />
                <SlideCaption>마이페이지</SlideCaption>
              </SwiperSlide>
            </Swiper>
          </SwiperWrapper>

          <TitleWrapper>
            <ProjectLogo src={nodeconnect} alt="Node_Connect 로고" size="large" />
            <Title>Node_Connect</Title>
          </TitleWrapper>

          <Description>
            HTML, CSS, JS 기반의 영화 추천 플랫폼.<br />
            LocalStorage와 쿠키로 사용자 정보를 관리하며 콘텐츠 흐름을 제공합니다.
          </Description>

          <RoleList>
            <strong>담당 기능</strong>
            <ul>
              <li><FiCheckCircle /> 로그인: 로컬스토리지 비교, 세션 유지</li>
              <li><FiCheckCircle /> 회원가입: 입력값 검증 및 저장</li>
              <li><FiCheckCircle /> 마이페이지: 정보 조회·수정·탈퇴</li>
              <li><FiCheckCircle /> 로그아웃: 데이터 초기화, 리다이렉션</li>
            </ul>
          </RoleList>

          <ButtonGroup>
            <LinkButton
              href="https://github.com/susuholee/NodeConnect_project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </LinkButton>
            <LinkButton
              href="https://nodeconnectproject.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink /> 배포 보기
            </LinkButton>
          </ButtonGroup>
        </ProjectCard>

        {/* Scoop */}
        <ProjectCard>
          <SwiperWrapper>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              loop
            >
              <SwiperSlide>
                <SlideImage src={area} alt="광역기반" />
                <SlideCaption>광역 기반 탐색</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={subway} alt="지역기반" />
                <SlideCaption>지역 기반 탐색</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={filter} alt="필터링" />
                <SlideCaption>필터링 기능</SlideCaption>
              </SwiperSlide>
            </Swiper>
          </SwiperWrapper>

          <TitleWrapper>
            <ProjectLogo src={scoop} alt="Scoop 로고" />
            <Title>Scoop</Title>
          </TitleWrapper>

          <Description>
            동호회 탐색 플랫폼, Kakao Map API와 지역 기반 필터링을 통해 사용자 맞춤 위치 탐색 경험 제공.
          </Description>

          <RoleList>
            <strong>담당 기능</strong>
            <ul>
              <li><FiCheckCircle /> 지역 데이터 구조화 및 필터링 로직 설계</li>
              <li><FiCheckCircle /> 시·군구 / 지하철역 기반 탐색 기능 구현</li>
              <li><FiCheckCircle /> UI/UX 개선을 위한 지도 시각화 설계</li>
            </ul>
          </RoleList>

          <ButtonGroup>
            <LinkButton
              href="https://github.com/susuholee/scoop_project/tree/susu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </LinkButton>
            <LinkButton
              href="https://joinscoop.store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink /> 배포 보기
            </LinkButton>
          </ButtonGroup>
        </ProjectCard>

        {/* Notionary */}
        <ProjectCard>
          <SwiperWrapper>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              loop
            >
              <SwiperSlide>
                <SlideImage src={category} alt="카테고리" />
                <SlideCaption>카테고리 필터링</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={post} alt="게시글 작성" />
                <SlideCaption>게시글 작성</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={edit} alt="게시글 수정" />
                <SlideCaption>게시글 수정</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={comment} alt="댓글" />
                <SlideCaption>댓글 기능</SlideCaption>
              </SwiperSlide>
              <SwiperSlide>
                <SlideImage src={like} alt="좋아요" />
                <SlideCaption>좋아요 기능</SlideCaption>
              </SwiperSlide>
            </Swiper>
          </SwiperWrapper>

          <TitleWrapper>
            <ProjectLogo src={notionary_logo} alt="Notionary 로고" size="large" />
            <Title>Notionary</Title>
          </TitleWrapper>

          <Description>
           개인의 노션(Notion) 워크스페이스를 공유하고, 게시글을 통해 다양한 고민을 커뮤니티의 힘으로 해결하는 웹 플랫폼
          </Description>

          <RoleList>
            <strong>담당 기능</strong>
            <ul>
              <li><FiCheckCircle /> 게시글 작성 및 수정 카테고리 분류</li>
              <li><FiCheckCircle /> 워크스페이스 첨부 기능</li>
              <li><FiCheckCircle /> 댓글/좋아요 기능 구현</li>
            </ul>
          </RoleList>

          <ButtonGroup>
            <LinkButton
              href="https://github.com/susuholee/Notionary_Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </LinkButton>
            <LinkButton
              href="https://notionarys.store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink /> 배포 보기
            </LinkButton>
          </ButtonGroup>
        </ProjectCard>

      </ProjectGrid>
    </Section>
  );
};

export default ProjectsSection;
