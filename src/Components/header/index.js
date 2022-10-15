import React, { useState, useEffect } from "react";
import * as Styles from './style';
import { useNavigate, useLocation } from "react-router-dom";
import { MarginTopWrapper } from "../../Common/style";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpenList, setIsOpenList] = useState(false);
    
    const [scrollPosition, setScrollPosition] = useState(0); // 스트롤

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return(
        <Styles.Wrapper 
            bg={location.pathname === '/' ? true : false}
            scroll={scrollPosition > 100 ? true : false}
            >
            <MarginTopWrapper>
                <Styles.Header>
                    <Styles.Menu>
                        <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`} alt="logo" onClick={() => {navigate('/')}}/>
                        <Styles.Text onClick={() => {navigate('/travel')}}>여행지</Styles.Text>
                        <Styles.Text onClick={() => {navigate('/CreatePlanPage')}}>플랜 생성</Styles.Text>
                        <Styles.Text onClick={() => {navigate('/shared')}}>공유된 플랜 보기</Styles.Text>
                    </Styles.Menu>
                    <Styles.LogSign>
                        {true ? 
                        <>
                            <Styles.Text onClick={()=> navigate('/login')}>로그인</Styles.Text>
                            <Styles.Text onClick={()=> navigate('/sign')}>회원가입</Styles.Text>
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