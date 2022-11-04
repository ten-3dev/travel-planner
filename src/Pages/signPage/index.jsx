import React, { useEffect, useState } from "react";
import * as Styles from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";

const SignPage = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  //유효성 검사
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);
  const [isName, setIsName] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isBirth, setIsBirth] = useState(true);
  //유효성 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [birthMessage, setbirthMessage] = useState("");

  const replace = useNavigate();

  useEffect(() => {
    const { state } = location;
    if (state !== null) {
      setEmail(state.email);
    }
  }, []);

  const signUp = async () => {
    if (isEmail & isPassword & isPasswordConfirm & isName & isPhone & isBirth) {
      try {
        const createHashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
        const createHashedPasswordConfirm = CryptoJS.SHA256(passwordCheck).toString(CryptoJS.enc.Base64);
        const data = await axios.post("http://localhost:8080/register", {
          email,
          password: createHashedPassword,
          passwordCheck: createHashedPasswordConfirm,
          name,
          tel: phone,
          birth,
          profileImg: "",
        });
        alert(data.data.msg);
        replace("/");
      } catch (e) {
        alert(e.response.data.msg);
      }
    } else {
      alert("형식에 맞지 않는 값이 있습니다.");
    }
  };

  const onEmail = (e) => {
    const emailRegex = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
    const emailCurrent = e.target.value;
    setEmail(e.target.value);
    if (emailRegex.test(emailCurrent)) {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    } else {
      setEmailMessage("올바른 이메일 형식을 입력해주세요.");
      setIsEmail(false);
    }
  };

  const onPassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordCurrent = e.target.value;
    setPassword(e.target.value);
    if (passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("올바른 비밀번호 형식입니다");
      setIsPassword(true);
    } else {
      setPasswordMessage("최소한개의 영문,숫자 & 8자리 이상 입력해주세요.");
      setIsPassword(false);
    }
  };

  const onPasswordConfirm = (e) => {
    setPasswordCheck(e.target.value);
    if (e.target.value === password) {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 서로 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    }
  };

  const onName = (e) => {
    setName(e.target.value);
    if ((e.target.value.length >= 2) & (e.target.value.length <= 4)) {
      setNameMessage("올바른 이름 형식입니다");
      setIsName(true);
    } else {
      setNameMessage("2~5 글자로 입력해주세요.");
      setIsName(false);
    }
  };

  const onPhone = (e) => {
    const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const phoneCurrent = e.target.value;
    setPhone(e.target.value);
    if (phoneRegex.test(phoneCurrent) & (phoneCurrent.length === 11)) {
      setPhoneMessage("올바른 전화번호 형식입니다.");
      setIsPhone(true);
    } else {
      setPhoneMessage(' "-" 제외한 형식으로 입력해주세요');
      setIsPhone(false);
    }
  };

  const onBirth = (e) => {
    const birthRegex = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const birthCurrent = e.target.value;
    setBirth(e.target.value);
    if (birthRegex.test(birthCurrent)) {
      setbirthMessage("올바른 생일 형식입니다.");
      setIsBirth(true);
    } else {
      setbirthMessage("ex) 1999-09-12");
      setIsBirth(false);
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      OnClick(); // Enter 입력이 되면 클릭 이벤트 실행// 온클릭 이벤트도 따로 만들어줘야함 나중에하거나 안하거나
    }
  };

  return (
    <Styles.Wrapper>
      <Styles.ContentBox>
        <Styles.SignText>SIGN UP</Styles.SignText>
        <Styles.SignText2 htmlFor="email">
          이메일
          <Styles.Input placeholder="이메일을 입력해주세요" onChange={(e) => onEmail(e)} value={email !== "" ? email : ""} />
          <Styles.WarningMessage check={isEmail}>{emailMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          비밀번호
          <Styles.Input type="password" placeholder="비밀번호를 입력해주세요." onChange={(e) => onPassword(e)} value={password || ""} />
          <Styles.WarningMessage check={isPassword}>{passwordMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          비밀번호 확인
          <Styles.Input type="password" placeholder="비밀번호를 다시 입력해주세요." onChange={(e) => onPasswordConfirm(e)} value={passwordCheck || ""} />
          <Styles.WarningMessage check={isPasswordConfirm}>{passwordConfirmMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          이름
          <Styles.Input placeholder="이름을 입력해주세요." onChange={(e) => onName(e)} value={name || ""} />
          <Styles.WarningMessage check={isName}>{nameMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          연락처
          <Styles.Input placeholder="'-' 제외 휴대폰 번호를 입력해주세요" onChange={(e) => onPhone(e)} value={phone || ""} />
          <Styles.WarningMessage check={isPhone}>{phoneMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.SignText2>
          생년월일
          <Styles.Input placeholder="ex)1999-09-09" onKeyPress={handleOnKeyPress} onChange={(e) => onBirth(e)} value={birth || ""} />
          <Styles.WarningMessage check={isBirth}>{birthMessage}</Styles.WarningMessage>
        </Styles.SignText2>

        <Styles.UserGreenBtn onClick={() => signUp()}>가입하기</Styles.UserGreenBtn>
      </Styles.ContentBox>
    </Styles.Wrapper>
  );
};
export default SignPage;
