import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import MainPage from './Pages/mainPage';
import CalendarPage from "./Pages/CalendarPage";
import InformationPage from './Pages/locallnformationPage';
import TravelPage from './Pages/travelPage';
import NotFoundPage from './Pages/notFoundPage';
import MyPage from "./Pages/myPage";
import SchedulePage from "./Pages/scheduleBoxPage";
import PopularPlanPage from "./Pages/popularPlanPage";
import EditmemberPage from"./Pages/EditmemberPage";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/information" element={<InformationPage/>}/>
        <Route path="/travel" element={<TravelPage/>}/>
        <Route path="/schedule" element={<SchedulePage/>}/>
        <Route path="/myPage" element={<MyPage/>}/>
        <Route path="/popular" element={<PopularPlanPage/>}/>
        <Route path="/Editmember" element={<EditmemberPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
