import React from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";



const FindPass = ({setFindPass ,setChangePass}) => {

    const gotoChangePass = () => {
        setFindPass(false)
        setChangePass(true);
    }
    
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 찾기</Styles.LoginText>

                <Styles.LoginText2>아이디
                    <Styles.Input placeholder="아이디를 입력하세요"></Styles.Input>
                </Styles.LoginText2>

                <Styles.LoginText2>이메일
                        <Styles.Input placeholder="이메일을 입력하세요"></Styles.Input>
                </Styles.LoginText2>
                
                <UserBlueBtn onClick={gotoChangePass}>이메일 확인</UserBlueBtn>

            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default FindPass;