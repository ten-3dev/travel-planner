import React, { useState } from "react";
import FindPass from "../findPass"
import ChangePass from '../changePass';
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";




const LoginPage = ({setLoginOpen, setSignOpen}) => {
    const [findPassOpen, setFindPass] = useState(false); // 비번찾기용 모달
    const [changePass, setChangePass] = useState(false);

    const gotoSign = () => {
        setLoginOpen(false);
        setSignOpen(true);
    }
    
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
                <Styles.KakaoBtn>카카오 로그인</Styles.KakaoBtn>

                <div>---- OR ----</div>

                <Styles.FindSignWrap>
                    <Styles.FindSignText onClick={()=>{setFindPass(true)}}>비밀번호 찾기</Styles.FindSignText>
                    <Styles.FindPassModal isOpen={findPassOpen} onRequestClose={()=> setFindPass(false)} style={{overlay: {zIndex: "1"}}} ariaHideApp={false}>
                        <FindPass setFindPass={setFindPass} setChangePass={setChangePass}/>
                    </Styles.FindPassModal>
                    <Styles.FindPassModal isOpen={changePass} onRequestClose={()=> setChangePass(false)} style={{overlay: {zIndex: "1"}}} ariaHideApp={false}>
                        <ChangePass setChangePass={setChangePass}/>
                    </Styles.FindPassModal>

                <div> │ </div>

                    <Styles.FindSignText onClick={gotoSign}>회원가입</Styles.FindSignText>
                </Styles.FindSignWrap>

            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default LoginPage;