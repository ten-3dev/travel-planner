import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

import Navbar from "../myPageNavbar";
import {  Routes, Route } from 'react-router-dom';
import MyComments from "../myBarPage/myComments.js";
import Events from "../myBarPage/events";
import AnnualReport from "../myBarPage/Annual";
import Teams from "../myBarPage/team";
import SignUp from "../myBarPage/signup";

const MyPage = () => {
    return (
        <MarginTopWrapper margin>
            <Styles.ProfileBox>
                <Styles.SettingBox>
                    <Styles.Profile src={`assets/임시프로필사진.png`}/>
                    <Styles.Setting src={`assets/settings.png`}/>
                </Styles.SettingBox>
                <Styles.Text>tetrisGosu</Styles.Text>
            </Styles.ProfileBox>



            
            <Navbar />
            <Routes>
                <Route path='/myComments' component={MyComments} />
                <Route path='/events' component={Events} />
                <Route path='/annual' component={AnnualReport} />
                <Route path='/team' component={Teams} />
                <Route path='/sign-up' component={SignUp} />
            </Routes>
            


        </MarginTopWrapper>
    );
}

export default MyPage;