import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './Story';

function App() {
  const [stories, setStories] = useState(news_feed.results);

  const removeStory = (indexToRemove) => {
    setStories(stories.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      {stories.length === 0 ? (
        <p>No more stories to display</p>
      ) : (
        stories.map((story, index) => (
          <Story key={index} story={story} removeStory={() => removeStory(index)} />
        ))
      )}
    </div>
  );
}

export default App;
