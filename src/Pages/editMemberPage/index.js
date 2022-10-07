import React,{ useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

export const EditmemberPage = () => {
    const [clicked, setClicked] = useState("Profile");
    function EditBtn() {
        if (window.confirm("수정하시겠습니까?")) {

         } else {
        console.log("취소. 변화 없음");
        }
    };
    function Deletemsg() {
        if(window.confirm("정말로 탈퇴하시겠습니까??")){

        } else {
            console.log("취소. 탈퇴ㄴㄴ");
        } 
    };
    return(
        <MarginTopWrapper margin>
            <Styles.EditTitle>나의 정보 관리</Styles.EditTitle>
            <Styles.ProfileBox>
                <Styles.LeftProfileBox>
                    <Styles.ProfileImg src={"assets/임시프로필사진.png"}></Styles.ProfileImg>
                    <Styles.MemberConrentBox>jjijju</Styles.MemberConrentBox>
                    <Styles.Memberemail>su70322@naver.com</Styles.Memberemail>
                    <Styles.TitleBar/>
                    <Styles.LeftContent click={clicked === "Profile"} onClick={() => setClicked("Profile")}>회원수정</Styles.LeftContent>
                    <Styles.LeftContent>로그아웃</Styles.LeftContent>
                    <Styles.DeleteBtn onClick={(Deletemsg)}>탈퇴하기 ▶ </Styles.DeleteBtn>
                </Styles.LeftProfileBox>
                <Styles.MemberInforBox>
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
                        <Styles.MemberEdit>연락처</Styles.MemberEdit>
                        <Styles.Content placeholder="01058997032" ></Styles.Content>
                    </Styles.MemberContentBox>
                    <Styles.BtnBox>
                        <Styles.EditBtn onClick={(EditBtn)}>수정하기</Styles.EditBtn>
                    </Styles.BtnBox> 
                </Styles.MemberInforBox>
            </Styles.ProfileBox>
        </MarginTopWrapper>
    );
}
export default EditmemberPage;