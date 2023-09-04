import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import AppointmentPage  from './pages/AppointmentPage';
function App() {
  return (
    < BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/appointment' element={<AppointmentPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
