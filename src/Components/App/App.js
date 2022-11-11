import React, { useState, useEffect } from 'react'

import { Route, Routes } from "react-router-dom";
// import fetchCall from './src/api-calls.js'
import LandingPage from '../LandingPage/LandingPage'
import MainPage from '../MainPage/MainPage'
import './App.css';

const App = () => {
const [eldenRingData, setEldenRingData] = useState([])

// const getData = () => {
//   fetch(`https://eldenring.fanapis.com/api/creatures?limit=100`)
//     .then(response => response.json())
//     .then(data => setEldenRingData(data.data))
//
// }
// // getData()
//
// useEffect(() => {
//   getData()
// }, [])


    return (
      <main className="mainPage">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/main' element={<MainPage eldenRingData={eldenRingData}/>} />
      </Routes>
      </main>
    )

}
export default App;
