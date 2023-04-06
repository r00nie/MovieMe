import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar/Sidebar";

type HeaderProps = {
  isHomePage?: boolean;
};

const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  justify-content: ${(props: HeaderProps) =>
    props.isHomePage ? "center" : "space-between"};
  align-items: center;
  background-color: ${(props: HeaderProps) =>
    props.isHomePage ? "white" : "#37123c"};
  height: 80px;
  padding: 0 25px;
  ${(props: HeaderProps) =>
    !props.isHomePage && "box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);"}
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
  padding: 5px 15px;
  &:hover {
    transform: scale(1.4);
  }
`;

const Header: FC<HeaderProps> = ({ isHomePage }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <HeaderContainer isHomePage={isHomePage}>
      <LogoLink to="/">MM</LogoLink>
      {!isHomePage && (
        <>
          <MenuIconContainer onClick={toggleSidebar}>
            <MenuIcon />
          </MenuIconContainer>
          <Sidebar showSidebar={showSidebar} onMouseLeave={closeSidebar} />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
