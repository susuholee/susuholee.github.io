import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #d3c0a3;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fffaf5;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  color: #5c3a21;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 0.5rem;
`;

const FeatureList = styled.ul`
  margin-bottom: 0.5rem;
  padding-left: 1.2rem;
`;

const Role = styled.p`
  font-weight: bold;
  color: #3c2f26;
`;

const PostCard = ({ title, description, features, role, result }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <FeatureList>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </FeatureList>
      <Role>역할: {role}</Role>
      <Role>성과: {result}</Role>
    </Card>
  );
}

export default PostCard;