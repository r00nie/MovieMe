import React, { FC } from "react";
import Header from "../components/Header/Header";
import WelcomeBox from "../components/WelcomeBox/WelcomeBox";

const HomePage: FC = () => {
  return (
    <>
      <Header isHomePage={true} />
      <WelcomeBox />
    </>
  );
};

export default HomePage;
