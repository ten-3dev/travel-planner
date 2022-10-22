import React, { useState } from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as crypto from "crypto"

const ChangePassPage = () => {

    const data = useLocation();
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const PasswordChange = async () => {
        const createHashedPassword = crypto.createHash("sha256").update(pw).digest("base64");
        try{
            await axios.post('http://localhost:8080/passwordChange', { email:data.state, pw:createHashedPassword });
            
            navigate('/login');
        }catch(e){
            alert(e.response.data.msg);
        }
    }
    
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 변경</Styles.LoginText>
                
                <Styles.LoginText2>새 비밀번호
                    <Styles.Input type="password" placeholder="새로운 비밀번호를 입력하세요" ></Styles.Input>
                </Styles.LoginText2>

                <Styles.LoginText2>비밀번호 확인
                        <Styles.Input type="password" placeholder="비밀번호를 다시 입력하세요"></Styles.Input>
                </Styles.LoginText2>
                
                <UserBlueBtn>비밀번호 변경</UserBlueBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default ChangePassPage;