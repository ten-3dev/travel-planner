import React, { useState } from "react";
import * as Styles from './style';
import { UserBlueBtn } from "../../Common/style";
import { useLocation } from "react-router-dom";


const ChangePassPage = () => {

    const data = useLocation();

    const [pw, setPw] = useState("");
    const [pwRe, setPwRe] = useState("");
    const { state }= data;
    const ConfirmEmail = async () => {
        try{
            await axios.post('http://localhost:8080/checkEmail', {state,pw,pwRe});
            
            navigate('/');
        }catch(e){
            alert(e.response.data.msg);
        }
    }
     
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 변경</Styles.LoginText>
                <Styles.LoginText2>새 비밀번호
                    <Styles.Input placeholder="새로운 비밀번호를 입력하세요" onChange={(e) => setPw(e.target.value)}></Styles.Input>
                </Styles.LoginText2>

                <Styles.LoginText2>비밀번호 확인
                        <Styles.Input placeholder="비밀번호를 다시 입력하세요"onChange={(e) => setPwRe(e.target.value)}></Styles.Input>
                </Styles.LoginText2>
                
                <UserBlueBtn  onClick={ConfirmEmail}>비밀번호 변경</UserBlueBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default ChangePassPage;