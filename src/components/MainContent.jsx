import React from 'react';
import Categories from './Categories';
import Content from './Content';

function MainContent() {
  return (
    <div className="mt-4 md:mt-8 flex flex-col md:flex-row gap-8 md:max-h-[37.5rem] 2xl:max-h-[50rem] overflow-scroll">
      <Categories />
      <Content />
    </div>
  );
}

export default MainContent;
