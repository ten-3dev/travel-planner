import React,{useEffect,useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EditmemberPage = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState("Profile");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [birth, setbirth] = useState("");
    
 

    useEffect(() => {
        
        async function fetchData() {
            try{
                data = await axios.get('http:localhost:8080/getUserInfo',{email,pw,name,phone,birth});

            } catch(e){
                console.log(error);
            }}

        fetchData();
    },[])

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
    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
    }
    return(
        <MarginTopWrapper margin>
            <Styles.EditTitle>나의 정보 관리</Styles.EditTitle>
            <Styles.ProfileBox>
                <Styles.LeftProfileBox>
                    <Styles.ProfileImg src={"assets/기본프로필.png"}></Styles.ProfileImg>
                    <Styles.MemberName>김지수</Styles.MemberName>
                    <Styles.Memberemail>su70322@naver.com</Styles.Memberemail>
                    <Styles.TitleBar/>
                    <Styles.LeftContent click={clicked === "Profile"} onClick={() => setClicked("Profile") + clickedBtn} >내프로필</Styles.LeftContent>
                    <Styles.LeftContent click={clicked === "Paw"} onClick={() => setClicked("Paw") + clickedBtn}>비밀번호 변경</Styles.LeftContent>
                    <Styles.LeftContent onClick={logout}>로그아웃</Styles.LeftContent>
                    <Styles.DeleteBtn onClick={Deletemsg}>탈퇴하기 ▶ </Styles.DeleteBtn>
                </Styles.LeftProfileBox>
                {clicked === "Paw" &&
                <Styles.MemberInforBox id="Paw" >
                <Styles.BasicInformation>비밀번호 변경</Styles.BasicInformation>
                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>현재 비밀번호</Styles.MemberEdit>
                        <Styles.Content placeholder="비밀번호를 입력해주세요." onChange={(e) => setPw(e.target.value)} ></Styles.Content>
                    </Styles.MemberContentBox>
                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>새 비밀번호</Styles.MemberEdit>
                        <Styles.Content placeholder="비밀번호를 입력해주세요."  ></Styles.Content>
                    </Styles.MemberContentBox>
                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>새 비밀번호확인</Styles.MemberEdit>
                        <Styles.Content placeholder="비밀번호를 다시입력해주세요." ></Styles.Content>
                    </Styles.MemberContentBox>
                    <Styles.BtnBox>
                        <Styles.EditBtn onClick={EditBtn}>수정하기</Styles.EditBtn>
                    </Styles.BtnBox> 
                </Styles.MemberInforBox>
                }
                {clicked === "Profile" &&
                <Styles.MyProfileBox id="Profile">
                <Styles.BasicInformation>기본정보</Styles.BasicInformation>
                    <Styles.BasicInformationBox>
                        <Styles.BasicInformationImg src={"assets/기본프로필.png"}></Styles.BasicInformationImg>
                        <Styles.BasicInformationEamilBox>
                            <Styles.BasicInformationName onChange={(e) => setname(e.target.value)}>김지수</Styles.BasicInformationName>
                            <Styles.BasicInformationEamil onChange={(e) => setbirth(e.target.value)} >1997-09-18</Styles.BasicInformationEamil>
                            <Styles.BasicInformationEamil onChange={(e) => setEmail(e.target.value)}>su70322@naver.com</Styles.BasicInformationEamil>
                        </Styles.BasicInformationEamilBox>
                    </Styles.BasicInformationBox>
                    <Styles.LabelBox htmlFor="ex_file" >
                            <Styles.ProfileImgChange src={"assets/카메라.png"} ></Styles.ProfileImgChange>
                            <Styles.ProfileImgInput type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg" ></Styles.ProfileImgInput>
                    </Styles.LabelBox>
                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit >이름</Styles.MemberEdit>
                        <Styles.Content placeholder="김지수"  onChange={(e) => setname(e.target.value)}></Styles.Content>
                    </Styles.BasicInforContentBox>
                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit>연락처</Styles.MemberEdit>
                        <Styles.Content placeholder="01058997032"  onChange={(e) => setphone(e.target.value)}></Styles.Content>
                    </Styles.BasicInforContentBox>
                    <Styles.BtnBox>
                        <Styles.BasicInfoBtn onClick={EditBtn}>수정하기</Styles.BasicInfoBtn> 
                    </Styles.BtnBox> 
                </Styles.MyProfileBox>
                }
            </Styles.ProfileBox>
        </MarginTopWrapper>

    );
}
export default EditmemberPage;