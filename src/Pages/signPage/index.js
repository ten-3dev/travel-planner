import React from 'react';
import * as Styles from './style';

const SignPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
            <Styles.SignText>SIGN UP</Styles.SignText>

                <Styles.SignText2>아이디
                  <Styles.Input/>
                  <Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn>
                </Styles.SignText2>

                <Styles.SignText2>비밀번호
                  <Styles.Input/>
                </Styles.SignText2>

                <Styles.SignText2>비밀번호 확인
                  <Styles.Input/>
                  </Styles.SignText2>

                <Styles.SignText2>이름
                  <Styles.Input/>
                </Styles.SignText2>

                <Styles.SignText2>이메일
                  <Styles.Input/>
                <Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn></Styles.SignText2>

                <Styles.SignText2>연락처
                  <Styles.Input/>
                </Styles.SignText2>

                <Styles.SignText2>생년월일
                  <Styles.Input/>
                </Styles.SignText2>

                <Styles.SignText2>성별
                  <Styles.RadioLabel htmlFor="male">남</Styles.RadioLabel>
                  <Styles.RadioBtn type="radio" name='gender' id="male"/>
                  <Styles.RadioLabel htmlFor="female">여</Styles.RadioLabel>
                  <Styles.RadioBtn type="radio" name='gender' id="female"/>
                </Styles.SignText2>

                <Styles.UserGreenBtn>가입하기</Styles.UserGreenBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}
export default SignPage;