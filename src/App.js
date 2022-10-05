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
import CreatePlanPage from "./Pages/createPlanPage";
import UserStore from "./Store/users";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <UserStore>
      <BrowserRouter>
        <Header open={true}/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/calendar" element={<CalendarPage/>}/>
          <Route path="/information" element={<InformationPage/>}/>
          <Route path="/travel" element={<TravelPage/>}/>
          <Route path="/schedule" element={<SchedulePage/>}/>
          <Route path="/myPage" element={<MyPage/>}/>
          <Route path="/popular" element={<PopularPlanPage/>}/>
          <Route path="/editmember" element={<EditmemberPage/>}/>
          <Route path="/createPlanPage" element={<CreatePlanPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer open={true}/>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;
