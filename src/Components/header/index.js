import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from './style';

const Header = ({main}) => {
    const navigate = useNavigate();

    const moveMain = () => {
        navigate('/');
    }
    
    return(
        <Styles.Wrapper main={main}>
            <Styles.Header>
                <Styles.Menu>
                    <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`} alt="logo" onClick={moveMain}/>
                    <Styles.Text>여행지</Styles.Text>
                    <Styles.Text>플랜 생성</Styles.Text>
                    <Styles.Text>공유된 플랜 보기</Styles.Text>
                </Styles.Menu>
                <Styles.LogSign>
                    <Styles.Text>로그인</Styles.Text>
                    <Styles.Text>회원가입</Styles.Text>
                </Styles.LogSign>
            </Styles.Header>
        </Styles.Wrapper>
    )
}

export default Header