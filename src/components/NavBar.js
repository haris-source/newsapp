import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchText.trim()) {
      alert("Please enter something");
      return;
    }

    props.onSearch(searchText);
  }

  // constructor(props) {
  //   super(props);
  //   state  {
  //     searchText: ""
  //   }
  // }


  // handleChange = (e) => {

  //   setState({ searchText: e.target.value });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!state.searchText.trim()) {
  //     alert("Please enter something");
  //     return;
  //   }

  //   props.onSearch(state.searchText);
  // }


  return (
    <nav className="navbar fixed-top navbar-expand-xl" style={{ backgroundColor: '#020242', padding: '1rem' }}>
      <div className="container-fluid">

        <NavLink className="navbar-brand" style={{ color: "white" }} to="/">NewsFlow</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* ✅ KEEP YOUR CATEGORY MENU */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" style={{ color: "white" }} to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" style={{ color: "white" }} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{ color: "white" }} to="/blog">Blogs</NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" style={{ color: "white" }} to="/" data-bs-toggle="dropdown">
                Category
              </NavLink>

              <ul className="dropdown-menu" style={{ backgroundColor: '#020242' }}>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/business">Business</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/entertainment">Entertainment</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/general">General</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/health">Health</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/science">Science</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/sports">Sports</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/technology">Technology</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/politics">Technology</NavLink></li>
                <li><NavLink className="dropdown-item" onClick={() => props.onSearch("")} to="/crime">Technology</NavLink></li>
              </ul>
            </li>

          </ul>

          {/* ✅ SEARCH FORM */}
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              value={searchText}
              onChange={handleChange}
            />
            <button className="btn search-btn" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}


export default NavBar