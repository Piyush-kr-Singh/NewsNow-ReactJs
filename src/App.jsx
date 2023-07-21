import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <LoadingBar height={3} color='#f11946' progress={progress} />

        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize='99' category='general' />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize='99' category='business' />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize='99' category='entertainment' />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize='99' category='health' />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize='99' category='science' />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize='99' category='sports' />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize='99' category='technology' />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
