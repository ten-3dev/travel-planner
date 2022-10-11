import React, { useState, useEffect } from "react";
import * as Styles from './style';
import LoginPage from '../../Modals/login/index'
import Join from "../../Modals/join";
import { useNavigate, useLocation } from "react-router-dom";
import { MarginTopWrapper } from "../../Common/style";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpenList, setIsOpenList] = useState(false);
    
    const [loginOpen, setLoginOpen] = useState(false); //로그인용 모달
    const [signOpen, setSignOpen] = useState(false); //회원가입용 모달

    const [scrollPosition, setScrollPosition] = useState(0); // 스트롤
    
    const moveMain = () => {
        navigate('/');
    }
    const moveTravel = () => {
        navigate('/travel');
    }
    const moveCreatePlan = () => {
        navigate('/CreatePlanPage');
    }
    const moveSharedPlan = () => {
        navigate('/shared');
    }

    useEffect(() => {
        if(loginOpen || signOpen){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'
        }
    }, [loginOpen, signOpen])

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
                        <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`} alt="logo" onClick={moveMain}/>
                        <Styles.Text onClick={moveTravel}>여행지</Styles.Text>
                        <Styles.Text onClick={moveCreatePlan}>플랜 생성</Styles.Text>
                        <Styles.Text onClick={moveSharedPlan}>공유된 플랜 보기</Styles.Text>
                    </Styles.Menu>
                    <Styles.LogSign>
                        {true ? 
                        <>
                            <Styles.Text onClick={()=> setLoginOpen(true)}>로그인</Styles.Text>
                            <Styles.LoginModal isOpen={loginOpen} onRequestClose={() => setLoginOpen(false)} style={{overlay: {zIndex: "1"}}} ariaHideApp={false}>
                                <LoginPage setLoginOpen={setLoginOpen} setSignOpen={setSignOpen}/>
                            </Styles.LoginModal>

                            <Styles.Text onClick={()=> setSignOpen(true)}>회원가입</Styles.Text>
                            <Styles.SignModal isOpen={signOpen} onRequestClose={() => setSignOpen(false)} style={{overlay: {zIndex: "1"}}} ariaHideApp={false}>
                                {/* <SignPage/> */}
                                <Join />
                            </Styles.SignModal>
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