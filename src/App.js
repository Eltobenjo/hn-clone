import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Story from "./Story";
import Button from"./components/Button";
import "./App.css"

function App() {
  const [stories, setStories] = useState([]);
  let [query, setQuery] = useState();

  useEffect(() => {
        getDataFromHackernews()

  }, []);

const handleChange =(e)=>{
    setQuery(e.target.value)
}

const getDataFromHackernews =()=> {
    fetch(`https://hn.algolia.com/api/v1/search?query=${query || "hackernews"}`)
        .then((response) => response.json())
        .then((response) => {
            //console.log(response);
            const newStories = response.hits
                .map((result) => ({
                    text: result.title,
                    url: result.url,
                }))

            setStories(newStories);
            setQuery(response.query);
        });

}

    const handleSubmit =(e)=>{
        e.preventDefault()
        getDataFromHackernews()

    }

  return (

      <div className="app">
        <Header />
        <div className="story-list" >
          <h1>SearchTerm: <span className="uppercase bg-primary text-white p-2">{query}</span></h1>
          {stories.map((story, index) => (
              <Story
                  key={index}
                  index={index}
                  story={story}

              />
          ))}

            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={query} id="queryContent" className='input' type="text" name="search" placeholder="Search.." />
                    <Button />
                </form>

            </div>



        </div>










      </div>
  );
}

export default App;

