import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  padding: 20px;
  background-color: #71677c;
  border-radius: 20px;
  margin: 200px auto;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

const WelcomeText = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #37123c;
  margin-bottom: 10px;
`;

const WelcomeLink = styled(Link)`
  background-color: #37123c;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border-radius: 40px;
  margin-top: 20px;
  text-decoration: none;
  padding: 10px 20px;
`;

const WelcomeParagraph = styled.p`
  font-size: 30px;
  color: white;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const WelcomeBox: FC = () => {
  return (
    <CardContainer>
      <WelcomeText>Welcome to...</WelcomeText>
      <WelcomeParagraph>MovieMe</WelcomeParagraph>
      <WelcomeLink to="/top-movies">Get Started</WelcomeLink>
    </CardContainer>
  );
};

export default WelcomeBox;
