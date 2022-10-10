import React from "react";
import * as Styles from './style';
import { useNavigate } from "react-router-dom";
import { MarginTopWrapper } from "../../Common/style";

import {
    Nav,
    NavLink,
    NavMenu,
    NavLink1,
    NavLink2,
    NavLink3,
  } from './style';

const MyPage = ({isAction,isAction1,isAction2,isAction3}) => {

    const navigate = useNavigate();

    const moveEditMember = () => {
        navigate('/editMember');
    }

    return (
        <MarginTopWrapper margin>
            <Styles.Box>
            <Styles.ProfileBox>
                <Styles.SettingBox>
                    <Styles.Profile src={`assets/임시프로필사진.png`}/>
                    <Styles.SettingsImg src={`assets/settings.png`} onClick={moveEditMember} />
                    <Styles.Box2>
                        <Styles.Text>닉네임</Styles.Text>
                    </Styles.Box2>
                </Styles.SettingBox>
                
                
            </Styles.ProfileBox>
        
            <Nav>
                <NavMenu>
                    <NavLink1 to="/myComments" activeStyle isAction={isAction1}>
                        <Styles.Box1>
                            <Styles.Text1>내가 쓴 댓글</Styles.Text1>
                            <Styles.Text1>3</Styles.Text1>
                        </Styles.Box1>
                        
                    </NavLink1>
                </NavMenu> 
                <NavMenu>
                    <NavLink to='/myPlan' activeStyle isAction={isAction}>
                        <Styles.Box1>
                            <Styles.Text1>나의 플랜</Styles.Text1>
                            <Styles.Text1>4</Styles.Text1>
                        </Styles.Box1>
                    </NavLink>
                </NavMenu> 
                <NavMenu>
                    <NavLink2 to='/sharedPlan' activeStyle isAction={isAction2}>
                        <Styles.Box1>
                            <Styles.Text1>공유한 플랜</Styles.Text1>
                            <Styles.Text1>5</Styles.Text1>
                        </Styles.Box1>
                    </NavLink2>
                </NavMenu> 
                <NavMenu>
                    <NavLink3 to='/like' activeStyle isAction={isAction3}>
                        <Styles.Box1>
                            <Styles.Text1>좋아요</Styles.Text1>
                            <Styles.Text1>7</Styles.Text1>
                        </Styles.Box1>
                    </NavLink3>
                </NavMenu> 
            </Nav>
            </Styles.Box>
        </MarginTopWrapper>
    );
}

export default MyPage;