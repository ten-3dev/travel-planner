import React from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";

const LoginPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>LOGIN</Styles.LoginText>

                <Styles.LoginText2>이름
                    <Styles.InputBox></Styles.InputBox>
                </Styles.LoginText2>

                <Styles.LoginText2>비밀번호
                    <Styles.InputBox></Styles.InputBox>
                </Styles.LoginText2>
                
                <UserBlueBtn>로그인 버튼</UserBlueBtn>
                        <div>--- OR ---</div>
                <Styles.KakaoBtn>카카오로그인 버튼</Styles.KakaoBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default LoginPage;