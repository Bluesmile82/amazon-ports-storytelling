import React, { useState } from 'react';
import './app.scss';
import Story from './components/story/story';
import Map from './components/map/map';
import Scroller from './components/scroller/scroller';
import Intro from './components/intro/intro';
import Logos from './components/logos/logos';

const App = (props) => {
  const {
    chapters,
    accessToken,
    style,
    theme,
    showMarkers,
    title,
    subtitle,
    byline,
    alignment,
    footer,
    intro,
    logos
  } = props;
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);
  const [currentAction, setCurrentAction] = useState();

  const { id: currentChapterId } = currentChapter;

  return (
    <div>
      <Scroller
        chapters={chapters}
        setCurrentChapter={setCurrentChapter}
        setCurrentAction={setCurrentAction}
      />
      {intro && <Intro {...intro} />}
      <Logos logos={logos}/>
      <Story
        hasIntro={!!intro}
        chapters={chapters}
        title={title}
        subtitle={subtitle}
        byline={byline}
        theme={theme}
        alignment={alignment}
        currentChapterId={currentChapterId}
        footer={footer}
      />
      <Map
        chapters={chapters}
        setCurrentChapter={setCurrentChapter}
        currentAction={currentAction}
        accessToken={accessToken}
        mapStyle={style}
        showMarkers={showMarkers}
        currentChapterId={currentChapterId}
      />
    </div>
  );
};

export default App;