import React, { useState } from "react";
import { SideBar } from "../../components/sideBar";
import { NavBar } from "../../components/navBar";
import Content from "./contents/content";

export function HomePage() {

  const [selectedContent, setSelectedContent] = useState('home');
  
  const handleButtonClick = (content: string) => {
    setSelectedContent(content);
  };

  return (
    <div className="menu">
      <SideBar selectedButtonType={""} onButtonClick={handleButtonClick} />
      <div className="sideRight">
        <NavBar />
        <Content content={selectedContent} />
      </div>
    </div>
  );
}
