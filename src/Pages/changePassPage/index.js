import React, { useState } from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as crypto from "crypto"

const ChangePassPage = () => {

    const data = useLocation();
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    //유효성 검사
    const [isPassword, setIsPassword] = useState(true);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);

    //유효성 메세지
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

    const navigate = useNavigate();


    const PasswordChange = async () => {
        if(isPassword && isPasswordConfirm){
            try{
                const createHashedPassword = crypto.createHash("sha256").update(pw).digest("base64");
                const createHashedPasswordConfirm = crypto.createHash("sha256").update(pwCheck).digest("base64");
                await axios.post('http://localhost:8080/passwordChange', { email:data.state, pw:createHashedPassword, pwCheck: createHashedPasswordConfirm });
                
                navigate('/login');
            }catch(e){
                alert(e.response.data.msg);
            }
        }else{
            alert("형식에 맞지 않는 값이 있습니다.")
        }
    }

    const onPassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const passwordCurrent = e.target.value
        setPw(e.target.value);
        if(passwordRegex.test(passwordCurrent)){
              setPasswordMessage('올바른 비밀번호 형식입니다')
              setIsPassword(true)
            }else{
              setPasswordMessage('최소한개의 영문,숫자 & 8자리 이상 입력해주세요.')
              setIsPassword(false)
            }
      }
    
      const onPasswordConfirm = (e) => {
        setPwCheck(e.target.value);
        if(e.target.value === pw){
            setPasswordConfirmMessage('비밀번호가 일치합니다.')
            setIsPasswordConfirm(true);
        }else{
            setPasswordConfirmMessage('비밀번호가 서로 일치하지 않습니다.')
            setIsPasswordConfirm(false);
        }
      }
    
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 변경</Styles.LoginText>
                
                <Styles.LoginText2>새 비밀번호
                    <Styles.Input type="password" placeholder="새로운 비밀번호를 입력하세요" onChange={(e) => onPassword(e)}  value={pw || ''}></Styles.Input>
                    <Styles.WarningMessage check={isPassword}>{passwordMessage}</Styles.WarningMessage>
                </Styles.LoginText2>

                <Styles.LoginText2>비밀번호 확인
                        <Styles.Input type="password" placeholder="비밀번호를 다시 입력하세요" onChange={(e) => onPasswordConfirm(e)}  value={pwCheck || ''}></Styles.Input>
                        <Styles.WarningMessage check={isPasswordConfirm}>{passwordConfirmMessage}</Styles.WarningMessage>
                </Styles.LoginText2>
                
                <UserBlueBtn onClick={() => PasswordChange()}>비밀번호 변경</UserBlueBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default ChangePassPage;