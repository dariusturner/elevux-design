import React, {useState} from 'react';
import Content from './components/Content';
import pageInfo from './pageInfo';
import './stylesheets/App.css';
import './stylesheets/queries.css';

function App() {
  let [contentId, setId] = useState(0);

  const headerStyle = {
    position: "fixed",
    top: "0",
    right: "0"
  }

  const headerBtnStyle = {
    border: "none",
    background: "none",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    outline: "none",
    padding: "10px 20px"
  }

  const plusBtnStyle = {
    color: "#fff",
    border: "none",
    background: "rgba(85, 39, 229, 0.7)",
    fontSize: "30px",
    outline: "none",
    width: "80px",
    height: "58px"
  }

  function changeContent(event) {
    setId(event.target.value);
  }
  return (
    <div className="App">
    <header id="header" style={headerStyle}>
    <button className="menu" value={0} onClick={changeContent} style={headerBtnStyle}>Home</button>
    <button className="plus" style={plusBtnStyle}>+</button>
    </header>
    <Content 
      img={pageInfo[contentId].img}
      imgName={pageInfo[contentId].imgName}
      title={pageInfo[contentId].title}
      caption={pageInfo[contentId].caption}
    />
    <div id="pageBtns">
      <button className="btn" value={1} onClick={changeContent}>Page 2</button>
      <button className="btn" value={2} onClick={changeContent}>Page 3</button>
    </div>
    </div>
  );
}

export default App;
