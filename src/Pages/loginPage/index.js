import React from 'react';
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";

const LoginPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>LOGIN</Styles.LoginText>

                <Styles.LoginText2>이름
                    <Styles.Input placeholder="아이디를 입력하세요"></Styles.Input>
                </Styles.LoginText2>

                <Styles.LoginText2>비밀번호
                        <Styles.Input placeholder="비밀번호를 입력하세요"></Styles.Input>
                </Styles.LoginText2>
                
                <UserBlueBtn>로그인</UserBlueBtn>
                        <div>--- OR ---</div>
                <Styles.KakaoBtn>카카오 로그인</Styles.KakaoBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default LoginPage;