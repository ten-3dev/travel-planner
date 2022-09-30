import React from "react";
import * as Styles from './style';

const LoginPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
            <div>LOGIN</div>
            <div>아이디랑 인풋 , 비번이랑 인풋</div>
            <div>로그인 버튼</div>
            <div>--- OR ---</div>
            <div>카카오로그인 버튼</div>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default LoginPage;