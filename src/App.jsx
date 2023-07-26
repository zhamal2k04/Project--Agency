import React from 'react';
import MyLayout from './components/Layout/MyLayout';
import { Routes, Route } from "react-router-dom";
import HomePage from './containers/HomePage/container/HomePage';
import BlogsPage from './containers/BlogsPage/container/BlogsPage';
import AboutPage from './containers/AboutPage/container/AboutPage';

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogsPage/>}/>
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
