import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import MainPage from "./Pages/mainPage";
import LoginPage from "./Pages/loginPage";
import SignPage from "./Pages/signPage"
import NotFoundPage from './Pages/notFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign" element={<SignPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
