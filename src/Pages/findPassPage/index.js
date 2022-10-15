import React from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";

const FindPassPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 찾기</Styles.LoginText>

                <Styles.LoginText2>이메일
                        <Styles.Input placeholder="이메일을 입력하세요"></Styles.Input>
                </Styles.LoginText2>
                
                <UserBlueBtn>이메일 확인</UserBlueBtn>

            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default FindPassPage;