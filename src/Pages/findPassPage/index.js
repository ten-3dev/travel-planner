import React, { useState } from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindPassPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const ConfirmEmail = async () => {
        try{
            await axios.post('http://localhost:8080/checkEmail', {email});
            
            navigate('/changePass',{state : email});
        }catch(e){
            alert(e.response.data.msg);
        }
    }

    const onKeyPress = (e) =>{
        if(e.key == 'Enter'){
            ConfirmEmail();
        }
    }
    
    

    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 찾기</Styles.LoginText>

                <Styles.LoginText2>이메일
                        <Styles.Input placeholder="이메일을 입력하세요" onChange={(e) => setEmail(e.target.value)} onKeyPress={onKeyPress}></Styles.Input>
                </Styles.LoginText2>
                
                <UserBlueBtn onClick={ConfirmEmail}>이메일 확인</UserBlueBtn>

            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default FindPassPage;