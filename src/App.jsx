import React, { useEffect } from "react";
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
import MyComments from "./Pages/myBarPage/myComment/index";
import MyPlan from "./Pages/myBarPage/myPlan";
import SharedPlan from "./Pages/myBarPage/sharedPlan/index";
import Like from "./Pages/myBarPage/like/index";
import LoginPage from "./Pages/loginPage";
import SignPage from "./Pages/signPage";
import FindPassPage from "./Pages/findPassPage";
import ChangePassPage from "./Pages/changePassPage";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { getAccessToken } from "./Data";
import axios from "axios";

axios.interceptors.response.use(
  response => {
    console.log("interceptors: ", response);
    return response;
  },
  async error => {
    console.log(error);
    if(error.response.status === 401){
      try{
        await getAccessToken();

        await axios.request(error.config);
        return;
      }catch(e){
        console.log(e);
      }
    }
    return Promise.reject(error);
});

axios.interceptors.request.use(
  config => {
      config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('access_token')}`;
      return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const App = () => {
  // useEffect(()=> {
  //   const script = document.createElement("script");
  //   script.src=`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.REACT_APP_KAKAO_MAP_API_KEY}&libraries=services`
  //   document.body.prepend(script);
  // },[]);

  return (
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/sign" element={<SignPage />}/>
            <Route path="/findPass" element={<FindPassPage />}/>
            <Route path="/changePass" element={<ChangePassPage />}/>
            <Route path="/calendar" element={<CalendarPage/>}/>
            <Route path="/information" element={<InformationPage/>}/>
            <Route path="/travel" element={<TravelPage/>}/>
            <Route path="/shared" element={<SharedPlanPage/>}/>
            <Route path="/editMember" element={<EditMemberPage/>}/>
            {/* 마이페이지 페이지 */}
            <Route path="/myPage" element={<MyPage/>}/>
            <Route path='/myComments' element={<MyComments/>} />
            <Route path='/myPlan' element={<MyPlan/>} />
            <Route path='/sharedPlan' element={<SharedPlan/>} />
            <Route path='/like' element={<Like/>} />
            {/*  */}
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
          <Route path="/createPlanPage" element={<CreatePlanPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
