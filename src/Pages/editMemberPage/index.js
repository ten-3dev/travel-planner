import React,{useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EditmemberPage = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState("Profile");

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [shwoName, setShowName] = useState("");
    const [birth, setBirth] = useState("");
    
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get('http://localhost:8080/getUserInfo');
            setEmail(data.data.data.email);
            setPw(data.data.data.pw);

            setName(data.data.data.name);
            setShowName(data.data.data.name);

            setPhone(data.data.data.tel);
            setBirth(data.data.data.birth);
        }
        getData();
    },[])

    const update = () => {
        axios
        .post('http://localhost:8080/getUserUpdate',{
          name: name,
          tel: phone,
          password: password,
          profileImg: ''
        })
        .then((response) =>{
          console.log('수정완료');
          console.log('user profile', response);
          replace("/editMember");
        })
        .catch((error)=>{
          console.log('수정실패', error.response)
        })
      }
    
    

    function clickedBtn () { 
        setClicked(clicked => !clicked);
    };

    // function EditBtn() {
    //     if (window.confirm("수정하시겠습니까?")) {

    //      } else {
    //     console.log("취소. 수정 ㄴㄴ");
    //     }
    // };
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
                    <Styles.MemberName>{shwoName}</Styles.MemberName>
                    <Styles.Memberemail >{email}</Styles.Memberemail>
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
                        <Styles.Content placeholder="비밀번호를 입력해주세요."  onChange={(e) => setPw(e.target.value)} ></Styles.Content>
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
                            <Styles.BasicInformationName>{shwoName}</Styles.BasicInformationName>
                            <Styles.BasicInformationEamil>{birth}</Styles.BasicInformationEamil>
                            <Styles.BasicInformationEamil>{email}</Styles.BasicInformationEamil>
                        </Styles.BasicInformationEamilBox>
                    </Styles.BasicInformationBox>
                    <Styles.LabelBox htmlFor="ex_file" >
                            <Styles.ProfileImgChange src={"assets/카메라.png"} ></Styles.ProfileImgChange>
                            <Styles.ProfileImgInput type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg" ></Styles.ProfileImgInput>
                    </Styles.LabelBox>
                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit >이름</Styles.MemberEdit>
                        <Styles.Content placeholder="홍길동"  onChange={(e) => setName(e.target.value)} value={name || ''}/>
                    </Styles.BasicInforContentBox>
                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit>연락처</Styles.MemberEdit>
                        <Styles.Content placeholder="01012345678" onChange={(e) => setPhone(e.target.value)} value={phone || ''}/>
                    </Styles.BasicInforContentBox>
                    <Styles.BtnBox>
                        <Styles.BasicInfoBtn onClick={()=>{update()}}>수정하기</Styles.BasicInfoBtn> 
                    </Styles.BtnBox> 
                </Styles.MyProfileBox>
                }
            </Styles.ProfileBox>
        </MarginTopWrapper>

    );
}
export default EditmemberPage;