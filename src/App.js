import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  HashRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=>{
  const apiKey = process.env.REACT_APP_NEWS_APP
  // state={
  //   progress:0,
   
  // }
const [progress, setProgress] = useState(0);
  
const [searchQuery, setSearchQuery] = useState("");
  

 const handleSearch = (query) => {
    setSearchQuery(query);
  }

  
    return (
      <Router>
        <NavBar onSearch={handleSearch} />
 <LoadingBar
        color="#4aa1d4"
        progress={progress}
        height="3px"
        shadow={true}
       
      />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country="us" category="general" searchQuery={searchQuery} />} />
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} country="us" category="business" searchQuery={searchQuery} />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country="us" category="entertainment" searchQuery={searchQuery} />} />
          <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general2" pageSize={9} country="us" category="general" searchQuery={searchQuery} />} />
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} country="us" category="health" searchQuery={searchQuery} />} />
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} country="us" category="science" searchQuery={searchQuery} />} />
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} country="us" category="sports" searchQuery={searchQuery} />} />
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} country="us" category="technology" searchQuery={searchQuery} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    )
  } 
export default  App 
