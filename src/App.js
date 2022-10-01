import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import CalendarPage from "./Pages/CalendarPage";
import NotFoundPage from './Pages/notFoundPage';
import Information from "./Pages/localinformationPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<CalendarPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/Information" element={<Information/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
