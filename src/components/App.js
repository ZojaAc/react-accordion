import React from 'react';
import Article from './Article';
import ArticleList from './ArticleList';
import articles from '../fixtures';
// import 'bootstrap/dist/css/bootstrap.css'; 
import './style2.css';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>App name</h1>
      <ArticleList articles = {articles}/>
    </div>
  )
}

export default App