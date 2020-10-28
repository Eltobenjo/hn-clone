import React from "react";
export default function Story({ story, index, markStoryAsRead, removeStory }) {
  return (
    <div
      className="story">
      {story.num_comments}
      <a target="_blank" href={story.url}>
        {story.text}
      </a>
     
    </div>
  );
}
