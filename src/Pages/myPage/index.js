import React from "react";
import * as Styles from './style';
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
    return (
        <MarginTopWrapper margin>
            <Styles.Box3>
            <Styles.ProfileBox>
                <Styles.SettingBox>
                    <Styles.Profile src={`assets/임시프로필사진.png`}/>
                </Styles.SettingBox>
                <Styles.Box4>
                <Styles.Text>tetrisGosu</Styles.Text>
                <Styles.Setting src={`assets/settings.png`}/>
                </Styles.Box4>
                
            </Styles.ProfileBox>
        
            <Nav>
                <NavMenu>
                    <NavLink1 to="/myComments" activeStyle isAction={isAction1}>
                        <Styles.Box2>
                            <Styles.Text2>내가 쓴 댓글</Styles.Text2>
                            <Styles.Text2>3</Styles.Text2>
                        </Styles.Box2>
                        
                    </NavLink1>
                </NavMenu> 
                <NavMenu>
                    <NavLink to='/myPlan' activeStyle isAction={isAction}>
                        <Styles.Box2>
                            <Styles.Text2>나의 플랜</Styles.Text2>
                            <Styles.Text2>4</Styles.Text2>
                        </Styles.Box2>
                    </NavLink>
                </NavMenu> 
                <NavMenu>
                    <NavLink2 to='/sharedPlan' activeStyle isAction={isAction2}>
                        <Styles.Box2>
                            <Styles.Text2>공유한 플랜</Styles.Text2>
                            <Styles.Text2>5</Styles.Text2>
                        </Styles.Box2>
                    </NavLink2>
                </NavMenu> 
                <NavMenu>
                    <NavLink3 to='/like' activeStyle isAction={isAction3}>
                        <Styles.Box2>
                            <Styles.Text2>좋아요</Styles.Text2>
                            <Styles.Text2>7</Styles.Text2>
                        </Styles.Box2>
                    </NavLink3>
                </NavMenu> 
            </Nav>
            </Styles.Box3>
        </MarginTopWrapper>
    );
}

export default MyPage;