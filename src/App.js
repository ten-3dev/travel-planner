import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import MainPage from './Pages/mainPage';
import CalendarPage from "./Pages/calendarPage";
import InformationPage from './Pages/tourInfoPage';
import TravelPage from './Pages/travelPage';
import NotFoundPage from './Pages/notFoundPage';
import MyPage from "./Pages/myPage";
import SharedPlanPage from "./Pages/sharedPlanPage";
import EditMemberPage from"./Pages/editMemberPage";
import CreatePlanPage from "./Pages/createPlanPage";
import UserStore from "./Store/users";
import MyComments from "./Pages/myBarPage/myComment/index";
import MyPlan from "./Pages/myBarPage/myPlan";
import SharedPlan from "./Pages/myBarPage/sharedPlan/index";
import Like from "./Pages/myBarPage/like/index";
import PasswordCheckPage from "./Pages/passwordCheckPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinPage from "./Pages/joinPage";

const App = () => {

  return (
    <UserStore>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/calendar" element={<CalendarPage/>}/>
          <Route path="/information" element={<InformationPage/>}/>
          <Route path="/travel" element={<TravelPage/>}/>
          <Route path="/myPage" element={<MyPage/>}/>
          <Route path="/shared" element={<SharedPlanPage/>}/>
          <Route path="/editMember" element={<EditMemberPage/>}/>
          <Route path="/createPlanPage" element={<CreatePlanPage/>}/>
          <Route path='/myComments' element={<MyComments/>} />
          <Route path='/myPlan' element={<MyPlan/>} />
          <Route path='/sharedPlan' element={<SharedPlan/>} />
          <Route path='/like' element={<Like/>} />
          <Route path='/passwordCheck' element={<PasswordCheckPage/>} />
          <Route path='/join' element={<JoinPage/>} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;
