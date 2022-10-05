import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import MainPage from './Pages/mainPage';
import LoginPage from './Pages/loginPage';
import SignPage from './Pages/signPage';
import CalendarPage from "./Pages/CalendarPage";
import InformationPage from './Pages/locallnformationPage';
import TravelPage from './Pages/travelPage';
import NotFoundPage from './Pages/notFoundPage';
import MyPage from "./Pages/myPage";
<<<<<<< HEAD
import PopulanityPage from "./Pages/popularityplanPage";
import ShedulePage from "./Pages/scheduleBoxPage";
=======
import PopularPlanPage from "./Pages/popularPlanPage";
>>>>>>> 352a4672ff4e69fc29ccbe9401a712c1e3dbea10
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/information" element={<InformationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign" element={<SignPage/>}/>
        <Route path="/travel" element={<TravelPage/>}/>
        <Route path="/myPage" element={<MyPage/>}/>
<<<<<<< HEAD
        <Route path="/popularity" element={<PopulanityPage/>}/>
        <Route path="/Schedule" element={<ShedulePage/>}/>
=======
        <Route path="/popular" element={<PopularPlanPage/>}/>
>>>>>>> 352a4672ff4e69fc29ccbe9401a712c1e3dbea10
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
