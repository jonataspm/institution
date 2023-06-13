import React from 'react';
import { HomeContent } from './homeContent';
import { PeopleContent } from './peopleContent';

type ContentProps = {
  content: string;
};

const Content = ({ content }: ContentProps) => {
  let displayContent: React.ReactNode;

  switch (content) {
    case "home":
      return <HomeContent />;
    case "people":
      return <PeopleContent />;
    case "logout":
      break;
    default:
      return <HomeContent />;
  }

  return <div>{displayContent}</div>;
};

export default Content;
