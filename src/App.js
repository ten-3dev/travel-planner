import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import CalendarPage from "./Pages/CalendarPage";
import NotFoundPage from './Pages/notFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<CalendarPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
