import React, { useState } from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const kakaoLogin = async () => {
        window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=0a61f9efbdac3933e6a14ed6f553bd00&redirect_uri=http://localhost:8080/kakaoCallback&response_type=code';
        // const code = new URL(window.location.href).searchParams.get("code");
    }

    const onLogin = async () => {
        console.log(email);
        console.log(pw);

        const data = await axios.post('http://localhost:8080/login', {email, pw});
        console.log(data);
    }
    
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>LOGIN</Styles.LoginText>

                <Styles.LoginText2>이메일
                    <Styles.Input placeholder="이메일을 입력하세요" onChange={(e) => setEmail(e.target.value)}/>
                </Styles.LoginText2>

                <Styles.LoginText2>비밀번호
                        <Styles.Input type="password" placeholder="비밀번호를 입력하세요" onChange={(e) => setPw(e.target.value)} />
                </Styles.LoginText2>
                
                <UserBlueBtn onClick={onLogin}>로그인</UserBlueBtn>
                <Styles.KakaoBtn onClick={kakaoLogin}>카카오 로그인</Styles.KakaoBtn>

                <div>---- OR ----</div>

                <Styles.FindSignWrap>
                    <Styles.FindSignText onClick={() => navigate('/findPass')}>비밀번호 찾기</Styles.FindSignText>
                    <div> │ </div>
                    <Styles.FindSignText onClick={() => navigate('/sign')}>회원가입</Styles.FindSignText>
                </Styles.FindSignWrap>

            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default LoginPage;