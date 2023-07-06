import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './pages/Home';
import Play from './pages/Play';
import Result from './pages/Result';

function App() {

  const [response,setResponse] = useState("")
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/play' element={<Play setResponse={setResponse}/>}/>
      <Route path='/result' element={<Result response={response}/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
