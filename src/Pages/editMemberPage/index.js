import React,{useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as crypto from 'crypto';

export const EditmemberPage = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState("Profile");

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [newPwConfirm, setNewPwConfirm] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [showName, setShowName] = useState("");
    const [birth, setBirth] = useState("");

    
    //유효성 검사
    const[isPassword, setIsPassword] = useState(false);
    const[isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const[isName, setIsName] = useState(false);
    const[isPhone, setIsPhone] = useState(false);
    //유효성 메세지
    const[passwordMessage, setPasswordMessage] = useState('');
    const[passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
    const[nameMessage, setNameMessage] = useState('');
    const[phoneMessage, setPhoneMessage] = useState('');




    useEffect(() => { // 제일 처음에 실행하는 애 
        getData();
    },[])

    const getData = async () => { // DB에 있는 회원데이터를 불러옴
        const data = await axios.get('http://localhost:8080/getUserInfo');
        if(!data){
            getData();
        }else{
            setEmail(data.data.data.email);
            setPw(data.data.data.pw);

            setName(data.data.data.name);
            setShowName(data.data.data.name);

            setPhone(data.data.data.tel);
            setBirth(data.data.data.birth);
        }
    }

    const update = async () => { // 회원 데이터를 수정 (이름, 연락처)
        if(window.confirm("수정하시겠습니까?")){
            try{
                const data = await axios.post('http://localhost:8080/getUserUpdate',{name, tel: phone});
                getData(); // 변경된 데이터를 다시 불러오기
                alert(data.data.msg);
            } catch(e){
                console.log("에러 남", e)
            }
         }
      }
    const updatepw = async () => { //회원 데이터 수정 비밀번호
        if(window.confirm("수정하시겠습니까?")){
            if(newPw !== newPwConfirm){
                alert("비밀번호가 서로 맞지 않습니다.");
                return;
            }
            try{
                const createHashedPw = crypto.createHash("sha256").update(pw).digest("base64");
                const createHashedNewPw = crypto.createHash("sha256").update(newPw).digest("base64");
                await axios.post('http://localhost:8080/getUserUpdatePw',{pw: createHashedPw, newPw: createHashedNewPw});
                alert("비밀번호 변경 성공");
            }catch(e){
                alert("기존 비밀번호와 맞지 않음 얘가문제임 안고쳐짐 ㅈ같음", e); //얘가 문제다 ㅅㅂ년임 아주
            }
        }
    }
   
    function clickedBtn () { 
        setClicked(clicked => !clicked);
    };

    const userDelete = async () => {
        if(window.confirm("정말로 탈퇴하시겠습니까??")){
            try{
                const data = await axios.delete('http://localhost:8080/userDelete');
                alert(data.data.msg);
                localStorage.clear();
                sessionStorage.clear();
                navigate("/");
            }catch(e){
                console.log("탈퇴 실패", e)
            }
        } 
    };
    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
    }

    //새 비밀번호 유효성
    const onChangePassword = (e)=> {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const passwordCurrent = e.target.value
        setPw(e.target.value)
        if (passwordRegex.test(passwordCurrent)){
            setPasswordMessage('올바른 비밀번호 형식입니다')
            setIsPassword(true)
        }else{
            setPasswordMessage('최소한개의 영문자, 숫자를 8자리 이상 입력해주세요.')
            setIsPassword(false)
        }
    }

    //새 비밀번호와 일치하는지 확인하는 유효성. 백에서도 하고있음.
    const onChangePasswordConfirm = (e)=> {
        const passwordConfirmCurrent = e.target.value
        setNewPwConfirm(e.target.value)
        if (newPw === passwordConfirmCurrent){
            setPasswordConfirmMessage('새 비밀번호가 일치합니다.')
            setIsPasswordConfirm(true)
        }else{
            setPasswordConfirmMessage('새 비밀번호가 일치하지 않습니다.')
            setIsPasswordConfirm(false)
        }
    }

    const onChangeName = (e)=> {
        setName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 4){
            setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
            setIsName(false)
        }else{
            setNameMessage('올바른 이름 형식입니다')
            setIsName(true)
        }
    }

    const onChangePhone = (e)=> {
        const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
        const phoneCurrent = e.target.value
        setIsPhone(e.target.value)
        if (phoneRegex.test(phoneCurrent)){
            setPhoneMessage('띄어쓰기 없이 입력해주세요. ex) 01012345678')
            setIsPhone(true)
        }else{
            setPhoneMessage('올바른 휴대폰 번호를 입력해주세요.')
            setIsPhone(false)
        }
    }
    
    //유효성 검사는 되지만 데이터보내는걸 못막고 입력값이 그대로 db로 전달되버림
    // const schema = yup.object().shape({
    //     pw: yup
    //       .string()
    //       .min(8, '비밀번호는 8자리 이상이어야 합니다.')
    //       .max(25, '비밀번호는 25자리 이하여야 합니다.')
    //       .matches(
    //         /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    //         "최소한개의 영문자, 숫자를 입력하세요."
    //       )
    //       .required('비밀번호를 입력해주세요.'),
    //     newPw: yup
    //        .string()
    //        .min(8, '비밀번호는 8자리 이상이어야 합니다.')
    //        .max(25, '비밀번호는 25자리 이하여야 합니다.')
    //        .matches(
    //          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    //          "최소한개의 영문자, 숫자를 입력하세요."
    //        )
    //        .required('비밀번호를 입력해주세요.'),
    //     name: yup
    //        .string()
    //        .matches(
    //         /^[가-힣]{2,4}$/,
    //         "2-4자리의 한글이름만 입력가능"
    //       )
    //       .required('이름을 입력해주세요.'),
    //     phone: yup
    //       .string()
    //       .matches(
    //         /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
    //         '올바른 휴대폰 번호를 입력해주세요.'
    //       )
    //       .required('휴대폰 번호를 입력해주세요.')
       
    //   });

    return(
        <MarginTopWrapper margin>
            <Styles.EditTitle>나의 정보 관리</Styles.EditTitle>
            <Styles.ProfileBox>
                <Styles.LeftProfileBox>
                    <Styles.ProfileImg src={"assets/기본프로필.png"}></Styles.ProfileImg>
                    <Styles.MemberName>{showName}</Styles.MemberName>
                    <Styles.Memberemail >{email}</Styles.Memberemail>
                    <Styles.TitleBar/>
                    <Styles.LeftContent click={clicked === "Profile"} onClick={() => setClicked("Profile") + clickedBtn} >내프로필</Styles.LeftContent>
                    <Styles.LeftContent click={clicked === "Paw"} onClick={() => setClicked("Paw") + clickedBtn}>비밀번호 변경</Styles.LeftContent>
                    <Styles.LeftContent onClick={logout}>로그아웃</Styles.LeftContent>
                    <Styles.DeleteBtn onClick={userDelete}>탈퇴하기 ▶ </Styles.DeleteBtn>
                </Styles.LeftProfileBox>
                {clicked === "Paw" &&



                <Styles.MemberInforBox id="Paw" >
                <Styles.BasicInformation>비밀번호 변경</Styles.BasicInformation>
                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>현재 비밀번호</Styles.MemberEdit>
                        <Styles.Content type="password" placeholder="비밀번호를 입력해주세요." onChange={(e) => setPw(e.target.value)} ></Styles.Content>
                    </Styles.MemberContentBox>


                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>새 비밀번호</Styles.MemberEdit>
                        <Styles.Content type="password" placeholder="새 비밀번호를 입력해주세요." onKeyUp={onChangePassword} onChange={(e) => setNewPw(e.target.value)}></Styles.Content>
                        {newPw.length > 0 && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
                    </Styles.MemberContentBox>


                    <Styles.MemberContentBox>
                        <Styles.MemberEdit>새 비밀번호확인</Styles.MemberEdit>
                        <Styles.Content type="password" placeholder="비밀번호를 다시입력해주세요." onKeyUp={onChangePasswordConfirm} onChange={(e) => setNewPwConfirm(e.target.value)} ></Styles.Content>
                        {newPwConfirm.length > 0 && (<span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>)}
                    </Styles.MemberContentBox>

                    <Styles.BtnBox>
                        <Styles.EditBtn onClick={() => updatepw() }>수정하기</Styles.EditBtn>
                    </Styles.BtnBox> 
                </Styles.MemberInforBox>
                }



                {clicked === "Profile" &&
                <Styles.MyProfileBox id="Profile">
                    <Styles.BasicInformation>기본정보</Styles.BasicInformation>
                    <Styles.BasicInformationBox>
                        <Styles.BasicInformationImg src={"assets/기본프로필.png"}></Styles.BasicInformationImg>
                        <Styles.BasicInformationEamilBox>
                            <Styles.BasicInformationName>{showName}</Styles.BasicInformationName>
                            <Styles.BasicInformationEamil>{birth}</Styles.BasicInformationEamil>
                            <Styles.BasicInformationEamil>{email}</Styles.BasicInformationEamil>
                        </Styles.BasicInformationEamilBox>
                    </Styles.BasicInformationBox>
                    <Styles.LabelBox htmlFor="ex_file" >
                            <Styles.ProfileImgChange src={"assets/카메라.png"} ></Styles.ProfileImgChange>
                            <Styles.ProfileImgInput type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg" ></Styles.ProfileImgInput>
                    </Styles.LabelBox>



                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit htmlFor="name">이름</Styles.MemberEdit>
                        <Styles.Content placeholder="홍길동" onKeyUp={onChangeName} onChange={(e) => setName(e.target.value)} value={name || ''} />
                        {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                    </Styles.BasicInforContentBox>
                    


                    <Styles.BasicInforContentBox>
                        <Styles.MemberEdit htmlFor="phone">연락처</Styles.MemberEdit>
                        <Styles.Content placeholder="01012345678" onKeyUp={onChangePhone} onChange={(e) => setPhone(e.target.value)} value={phone || ''}/>
                        {phone.length > 0 && (<span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</span>)}
                    </Styles.BasicInforContentBox>

                    <Styles.BtnBox>
                        <Styles.BasicInfoBtn disabled={!(isName && isPhone)} onClick={()=>{update()}} >수정하기</Styles.BasicInfoBtn> 
                    </Styles.BtnBox> 
                </Styles.MyProfileBox>
                }
            </Styles.ProfileBox>
        </MarginTopWrapper>

    );
}
export default EditmemberPage;