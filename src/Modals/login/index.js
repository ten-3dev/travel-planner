import React, { useState } from "react";
import FindPass from "../findPass";
import ChangePass from "../changePass";
import * as Styles from "./style";
import { UserBlueBtn } from "../../Common/style";

const LoginPage = ({ setLoginOpen, setSignOpen }) => {
  const [findPassOpen, setFindPass] = useState(false); // 비번찾기용 모달
  const [changePass, setChangePass] = useState(false);

  const gotoSign = () => {
    setLoginOpen(false);
    setSignOpen(true);
  };

  const kakaoLogin = async () => {
    // window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=0a61f9efbdac3933e6a14ed6f553bd00&redirect_uri=http://localhost:8080/kakaoCallback&response_type=code';
    // const code = new URL(window.location.href).searchParams.get("code");
  };

  return (
    <Styles.Wrapper>
      <Styles.ContentBox>
        <Styles.LoginText>LOGIN</Styles.LoginText>

        <Styles.LoginText2>
          이메일
          <Styles.Input placeholder="이메일을 입력하세요"></Styles.Input>
        </Styles.LoginText2>

        <Styles.LoginText2>
          비밀번호
          <Styles.Input type="password" placeholder="비밀번호를 입력하세요"></Styles.Input>
        </Styles.LoginText2>

        <UserBlueBtn>로그인</UserBlueBtn>
        <Styles.KakaoBtn onClick={kakaoLogin}>카카오 로그인</Styles.KakaoBtn>

        <div>---- OR ----</div>

        <Styles.FindSignWrap>
          <Styles.FindSignText
            onClick={() => {
              setFindPass(true);
            }}>
            비밀번호 찾기
          </Styles.FindSignText>
          <Styles.FindPassModal isOpen={findPassOpen} onRequestClose={() => setFindPass(false)} style={{ overlay: { zIndex: "1" } }} ariaHideApp={false}>
            <FindPass setFindPass={setFindPass} setChangePass={setChangePass} />
          </Styles.FindPassModal>
          <Styles.FindPassModal isOpen={changePass} onRequestClose={() => setChangePass(false)} style={{ overlay: { zIndex: "1" } }} ariaHideApp={false}>
            <ChangePass setChangePass={setChangePass} />
          </Styles.FindPassModal>

          <div> │ </div>

          <Styles.FindSignText onClick={gotoSign}>회원가입</Styles.FindSignText>
        </Styles.FindSignWrap>
      </Styles.ContentBox>
    </Styles.Wrapper>
  );
};

export default LoginPage;
