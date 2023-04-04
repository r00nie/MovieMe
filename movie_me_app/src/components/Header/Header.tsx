import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

type HeaderProps = {
  isHomePage?: boolean;
};

const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  justify-content: ${(props: HeaderProps) =>
    !props.isHomePage ? "center" : "space-between"};
  align-items: center;
  background-color: #37123c;
  height: 80px;
  padding: 0 25px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const LogoLink = styled(Link)`
  background-color: #71677c;
  color: white;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 50%;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled(FaBars)`
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition-property: transform, border, backgroud-color, font-size;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  padding: 5px 8px;
  &:hover {
    transform: scale(1.1);
    border-radius: 50%;
    background-color: #71677c;
    border: 2px solid white;
    font-size: 12px;
  }
`;

const Header: FC<HeaderProps> = ({ isHomePage }) => {
  return (
    <HeaderContainer isHomePage={isHomePage}>
      <LogoLink to="/">MM</LogoLink>
      {isHomePage && (
        <MenuIconContainer>
          <MenuIcon />
        </MenuIconContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
