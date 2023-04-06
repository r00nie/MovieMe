import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 0;
  width: 100%;
  background-color: #71677c;
  margin: auto 0;
  margin-top: 100px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

const WelcomeLink = styled(Link)`
  background-color: #37123c;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 40px;
  margin-top: 20px;
  text-decoration: none;
  padding: 10px 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const WelcomeParagraph = styled.p`
  font-size: 60px;
  color: white;
  font-weight: bolder;
  margin-bottom: 20px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const WelcomeBox: FC = () => {
  return (
    <CardContainer>
      <WelcomeParagraph>MovieMe</WelcomeParagraph>
      <WelcomeLink to="/top-movies">Get Started!</WelcomeLink>
    </CardContainer>
  );
};

export default WelcomeBox;
