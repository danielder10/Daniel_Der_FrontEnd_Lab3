import React from 'react';

const Story = ({ story, removeStory }) => {
  const { image_url, link, byline, abstract } = story;

  return (
    <div className="story">
      <img
        src={image_url || 'https://placehold.co/200x150'}
        alt="Story"
      />
      <h3>{byline ? byline : 'Unknown Author'}</h3>
      <p>{abstract ? abstract : 'No Description Available'}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <br></br><br></br>
      <button onClick={removeStory}>Remove Story</button>
    </div>
  );
};

export default Story;
