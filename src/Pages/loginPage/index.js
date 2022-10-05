import React,{ useState } from "react";
import * as Styles from './style';
import SignPage from '../../Pages/signPage/index'
import { UserBlueBtn } from "../../Common/style";

const LoginPage = () => {
    const [signOpen, setSignOpen] = useState(false); //회원가입용 모달
    
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
                    <Styles.FindSignText>비밀번호 찾기</Styles.FindSignText>
                    <div> │ </div>
                    <Styles.FindSignText onClick={()=> setSignOpen(true)}>회원가입</Styles.FindSignText>
                    <Styles.SignModal isOpen={signOpen} onRequestClose={() => setSignOpen(false)} style={{overlay: {zIndex: "1"}}} ariaHideApp={false}>
                        <SignPage/>
                    </Styles.SignModal>
                </Styles.FindSignWrap>

            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default LoginPage;