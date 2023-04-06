import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MdMovieEdit as MoviesIconEdit,
  MdOutlineMovie as MoviesIcon,
} from "react-icons/md";

type SidebarProps = {
  showSidebar?: boolean;
  onMouseLeave?: () => void;
};

const SidebarContainer = styled.div<SidebarProps>`
  display: flex;
  position: fixed;
  top: 80px;
  right: 0;
  bottom: 0;
  z-index: 200;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #37123c;
  transition: transform 0.3s ease-in-out;
  transform: translateX(
    ${(props: SidebarProps) => (props.showSidebar ? "0" : "100%")}
  );
  padding: 0 20px;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.5);
`;

const IconLink = styled(Link)`
  background-color: #71677c;
  color: white;
  font-size: 15px;
  border: 2px solid white;
  border-radius: 50%;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  font-size: 20px;
  margin-top: 18px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Sidebar: FC<SidebarProps> = (props) => {
  return (
    <SidebarContainer {...props}>
      <IconLink to="/" title="Top Movies">
        <MoviesIcon />
      </IconLink>
      <IconLink to="/" title="Your Movies">
        <MoviesIconEdit />
      </IconLink>
    </SidebarContainer>
  );
};

export default Sidebar;
