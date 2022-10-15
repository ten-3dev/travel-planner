import React from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";

const ChangePassPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 변경</Styles.LoginText>

                <Styles.LoginText2>새 비밀번호
                    <Styles.Input placeholder="새로운 비밀번호를 입력하세요"></Styles.Input>
                </Styles.LoginText2>

                <Styles.LoginText2>비밀번호 확인
                        <Styles.Input placeholder="비밀번호를 다시 입력하세요"></Styles.Input>
                </Styles.LoginText2>
                
                <UserBlueBtn>비밀번호 변경</UserBlueBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default ChangePassPage;