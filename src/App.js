import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    
  state={
    progress:0,
  }
  setProgress=(progress)=>{
      this.setState({progress:progress})

    }

    constructor() {
    super();
    this.state = {
      searchQuery: ""
    }
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  }

  render() {
    return (
      <Router>
        <NavBar onSearch={this.handleSearch} />
 <LoadingBar
        color="#4aa1d4"
        progress={this.state.progress}
        height="3px"
        shadow={true}
       
      />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} key="general" pageSize={9} country="us" category="general" searchQuery={this.state.searchQuery} />} />
          <Route path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={9} country="us" category="business" searchQuery={this.state.searchQuery} />} />
          <Route path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={9} country="us" category="entertainment" searchQuery={this.state.searchQuery} />} />
          <Route path='/general' element={<News setProgress={this.setProgress} key="general2" pageSize={9} country="us" category="general" searchQuery={this.state.searchQuery} />} />
          <Route path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={9} country="us" category="health" searchQuery={this.state.searchQuery} />} />
          <Route path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={9} country="us" category="science" searchQuery={this.state.searchQuery} />} />
          <Route path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={9} country="us" category="sports" searchQuery={this.state.searchQuery} />} />
          <Route path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={9} country="us" category="technology" searchQuery={this.state.searchQuery} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    )
  } 
}