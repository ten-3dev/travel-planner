import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";


const PasswordCheckPage = () => {
    return (
        <MarginTopWrapper margin>
            <Styles.ContentBox>
                <Styles.SymbolBox>
                    <Styles.SymbolBox2>
                        <Styles.MemberInformationText>회원 정보</Styles.MemberInformationText>
                        <Styles.MemberInformationText>ㅡ</Styles.MemberInformationText>
                        <Styles.MemberInformationText2>비밀번호 확인</Styles.MemberInformationText2>
                    </Styles.SymbolBox2>
                </Styles.SymbolBox>
                <Styles.InformationBox>
                    <Styles.UserInformationBox2>
                        <Styles.UserInformationBox>
                            <Styles.UserNameText>석준혁</Styles.UserNameText>
                            <Styles.Text>님의 회원정보를 안전하게 보호하기 위해 </Styles.Text>
                        </Styles.UserInformationBox>
                        <Styles.Text2>비밀번호를 한번 더 확인해 주세요.</Styles.Text2>
                        <Styles.PasswardCheckBox>
                            <Styles.Text3>비밀번호</Styles.Text3>
                            <Styles.Input></Styles.Input>
                        </Styles.PasswardCheckBox>
                        <Styles.CheckBox>
                            <Styles.CheckBtn>확인</Styles.CheckBtn>
                        </Styles.CheckBox>
                    </Styles.UserInformationBox2>
                </Styles.InformationBox>
            </Styles.ContentBox>
        </MarginTopWrapper>
        );
    }
export default PasswordCheckPage;