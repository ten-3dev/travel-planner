import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

export const EditmemberPage = () => {
    return(
        <MarginTopWrapper margin>
            <Styles.EditTitle>회원정보수정</Styles.EditTitle>
            <Styles.TitleBar/>
            <Styles.MemberInforBox>
                <Styles.MemberContentBox>
                   <Styles.MemberEdit>아이디</Styles.MemberEdit>
                   <Styles.MemberConrent >jjijju</Styles.MemberConrent>
                </Styles.MemberContentBox>
                <Styles.MemberContentBox>
                    <Styles.MemberEdit>비밀번호</Styles.MemberEdit>
                    <Styles.Content placeholder="비밀번호를 입력해주세요." ></Styles.Content>
                </Styles.MemberContentBox>
                <Styles.MemberContentBox>
                    <Styles.MemberEdit>비밀번호확인</Styles.MemberEdit>
                    <Styles.Content placeholder="비밀번호를 다시입력해주세요." ></Styles.Content>
                </Styles.MemberContentBox>
                <Styles.MemberContentBox>
                    <Styles.MemberEdit>이름</Styles.MemberEdit>
                    <Styles.Content placeholder="김찌쭈" ></Styles.Content>
                </Styles.MemberContentBox>
                <Styles.MemberContentBox>
                    <Styles.MemberEdit>이메일</Styles.MemberEdit>
                    <Styles.Content placeholder="su70322@naver.com" ></Styles.Content>
                </Styles.MemberContentBox>
                <Styles.MemberContentBox>
                    <Styles.MemberEdit>연락처</Styles.MemberEdit>
                    <Styles.Content placeholder="010-5899-7032" ></Styles.Content>
                </Styles.MemberContentBox>
                <Styles.MemberContentBox>
                    <Styles.MemberEdit>생년월일</Styles.MemberEdit>
                    <Styles.Content placeholder="1997-09-18" ></Styles.Content>
                </Styles.MemberContentBox>
                <Styles.MemberContentBox>
                    <Styles.MemberEdit>성별</Styles.MemberEdit>
                    <Styles.GenderLabel htmlFor="m">남</Styles.GenderLabel>
                    <Styles.GenderCheck type="radio" name="gender" id="m"/>
                    <Styles.GenderLabel htmlFor="g">여</Styles.GenderLabel>
                    <Styles.GenderCheck type="radio" name='gender' id="g"/>
                </Styles.MemberContentBox>
            </Styles.MemberInforBox>
            <Styles.BtnBox>
                <Styles.EditBtn>수정하기</Styles.EditBtn>
                <Styles.EditBtn>이전</Styles.EditBtn>
                <Styles.DeleteBtn>탈퇴하기</Styles.DeleteBtn>
            </Styles.BtnBox>
            
        </MarginTopWrapper>
    );
}
export default EditmemberPage;