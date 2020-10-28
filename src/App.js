import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Input from './components/Input';
import Story from "./Story";
import Button from"./components/Button";

function App() {
  const [stories, setStories] = useState([]);
  const [query, setQuery] = useState("java");

  useEffect(() => {
    console.log("stories changed!");
  }, [stories]);

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const newStories = response.hits
          .map((result) => ({
            text: result.title,
            url: result.url,
            
          
          }))
          
        setStories(newStories);
        setQuery(response.query);
      });
  },[] );

  return (
    
    <div className="app">
      <Header />
      <div className="story-list">
        <h1>{query}</h1>
        {stories.map((story, index) => (
          <Story
            key={index}
            index={index}
            story={story}
            
          />
        ))}
<Input />
<Button />


      </div>


      
 





      
    </div>
  );
}

export default App;
