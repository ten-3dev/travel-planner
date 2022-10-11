import React,{ useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

export const EditmemberPage = () => {
    const [clicked, setClicked] = useState("Profile");

    function clickedBtn () { 
        setClicked(clicked => !clicked);
    };
    
    function EditBtn() {
        if (window.confirm("수정하시겠습니까?")) {

         } else {
        console.log("취소. 수정 ㄴㄴ");
        }
    };
    function Deletemsg() {
        if(window.confirm("정말로 탈퇴하시겠습니까??")){

        } else {
            console.log("취소. 탈퇴ㄴㄴ 절때 안되지");
        } 
    };
    return(
        <MarginTopWrapper margin>
            <Styles.EditTitle>나의 정보 관리</Styles.EditTitle>
            <Styles.ProfileBox>
                <Styles.LeftProfileBox>
                        <Styles.ProfileImg src={"assets/임시프로필사진.png"}></Styles.ProfileImg>
                    <Styles.LabelBox htmlFor="ex_file" >
                        <Styles.ProfileImgChange src={"assets/카메라.png"} ></Styles.ProfileImgChange>
                        <Styles.ProfileImgInput type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg"  style={{ display: "none" }}></Styles.ProfileImgInput>
                    </Styles.LabelBox>
                    <Styles.MemberName>김지수</Styles.MemberName>
                    <Styles.Memberemail>su70322@naver.com</Styles.Memberemail>
                    <Styles.TitleBar/>
                    <Styles.LeftContent click={clicked === "Profile"} onClick={() => setClicked("Profile") + clickedBtn} >내프로필</Styles.LeftContent>
                    <Styles.LeftContent click={clicked === "Paw"} onClick={() => setClicked("Paw") + clickedBtn}>비밀번호 변경</Styles.LeftContent>
                    <Styles.LeftContent>로그아웃</Styles.LeftContent>
                    <Styles.DeleteBtn onClick={(Deletemsg)}>탈퇴하기 ▶ </Styles.DeleteBtn>
                </Styles.LeftProfileBox>
                {clicked === "Paw" &&
                <Styles.MemberInforBox id="Paw" >
                <Styles.BasicInformation>비밀번호 변경</Styles.BasicInformation>
                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>현재 비밀번호</Styles.MemberEdit>
                        <Styles.Content placeholder="비밀번호를 입력해주세요." ></Styles.Content>
                    </Styles.MemberContentBox>
                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>새 비밀번호</Styles.MemberEdit>
                        <Styles.Content placeholder="비밀번호를 입력해주세요." ></Styles.Content>
                    </Styles.MemberContentBox>
                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>새 비밀번호확인</Styles.MemberEdit>
                        <Styles.Content placeholder="비밀번호를 다시입력해주세요." ></Styles.Content>
                    </Styles.MemberContentBox>
                    <Styles.BtnBox>
                        <Styles.EditBtn onClick={(EditBtn)}>수정하기</Styles.EditBtn>
                    </Styles.BtnBox> 
                </Styles.MemberInforBox>
                }
                {clicked === "Profile" &&
                <Styles.MyProfileBox id="Profile">
                <Styles.BasicInformation>기본정보</Styles.BasicInformation>
                    <Styles.BasicInformationBox>
                        <Styles.BasicInformationImg src={"assets/임시프로필사진.png"}></Styles.BasicInformationImg>
                        <Styles.BasicInformationEamilBox>
                            <Styles.BasicInformationName>김지수</Styles.BasicInformationName>
                            <Styles.BasicInformationEamil>1997-09-18</Styles.BasicInformationEamil>
                            <Styles.BasicInformationEamil>su70322@naver.com</Styles.BasicInformationEamil>
                        </Styles.BasicInformationEamilBox>
                    </Styles.BasicInformationBox>
                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit>이름</Styles.MemberEdit>
                        <Styles.Content placeholder="김지수" ></Styles.Content>
                    </Styles.BasicInforContentBox>
                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit>연락처</Styles.MemberEdit>
                        <Styles.Content placeholder="01058997032" ></Styles.Content>
                    </Styles.BasicInforContentBox>
                    <Styles.BtnBox>
                        <Styles.BasicInfoBtn onClick={(EditBtn)}>수정하기</Styles.BasicInfoBtn>
                    </Styles.BtnBox> 
                </Styles.MyProfileBox>
                }
            </Styles.ProfileBox>
        </MarginTopWrapper>

    );
}
export default EditmemberPage;