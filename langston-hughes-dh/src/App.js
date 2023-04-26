//this is where we set up our "App" Component
import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Collection from './pages/collection';
import About from './pages/about';
import Analysis from './pages/analysis';
import Home from './pages';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/analysis' element={<Analysis/>} />
        <Route path='/collection' element={<Collection/>} />
    </Routes>
    </Router>
);
}
  
export default App;
