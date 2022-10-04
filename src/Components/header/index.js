import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpenList, setIsOpenList] = useState(false);

    const moveMain = () => {
        navigate('/');
    }    
    return(
        <Styles.Wrapper main={location.pathname === '/' ? true : false}>
            <MarginTopWrapper>
                <Styles.Header>
                    <Styles.Menu>
                        <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`} alt="logo" onClick={moveMain}/>
                        <Styles.Text>여행지</Styles.Text>
                        <Styles.Text>플랜 생성</Styles.Text>
                        <Styles.Text>공유된 플랜 보기</Styles.Text>
                    </Styles.Menu>
                    <Styles.LogSign>
                        {false ? 
                        <>
                            <Styles.Text>로그인</Styles.Text>
                            <Styles.Text>회원가입</Styles.Text>
                        </> 
                        : 
                        <>
                            <Styles.MyProfile onClick={() => setIsOpenList(!isOpenList)}>
                                <Styles.MyProfileListBox clicked={isOpenList}>
                                    <Styles.MyProfileItem>MY PAGE</Styles.MyProfileItem>
                                    <Styles.MyProfileItem>SCHEDULE</Styles.MyProfileItem>
                                    <Styles.MyProfileItem last>LOGOUT</Styles.MyProfileItem>
                                </Styles.MyProfileListBox>
                            </Styles.MyProfile>
                        </>
                        }
                    </Styles.LogSign>
                </Styles.Header>
            </MarginTopWrapper>
        </Styles.Wrapper>
    )
}

export default Header