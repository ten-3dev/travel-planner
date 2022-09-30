import React from "react";
import * as Styles from './style';

const LoginPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
            <Styles.LoginText>LOGIN</Styles.LoginText>
            <Styles.InputBox>아이디랑 인풋</Styles.InputBox>
            <Styles.InputBox>아이디랑 인풋</Styles.InputBox>
            <div>로그인 버튼</div>
            <div>--- OR ---</div>
            <div>카카오로그인 버튼</div>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default LoginPage;