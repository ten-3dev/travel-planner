import React from "react";
import * as Styles from './style';

const Header = () => {
    return(
        <Styles.Wrapper>
            <Styles.Menu>
                <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`} alt="logo"/>
                <Styles.Text>여행지</Styles.Text>
                <Styles.Text>플랜 생성</Styles.Text>
                <Styles.Text>공유된 플랜 보기</Styles.Text>
            </Styles.Menu>
            <Styles.LogSign>
                <Styles.Text>로그인</Styles.Text>
                <Styles.Text>회원가입</Styles.Text>
            </Styles.LogSign>
        </Styles.Wrapper>
    )
}

export default Header