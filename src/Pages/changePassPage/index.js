import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
    const schema = yup.object().shape({
        pw: yup
         .string()
          .min(8, '비밀번호는 8자리 이상이어야 합니다.')
          .max(25, '비밀번호는 25자리 이하여야 합니다.')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "최소한개의 영문자, 숫자를 입력하세요."
          )
          .required('비밀번호를 입력해주세요.'),
        checkPw: yup
          .string()
          .oneOf([yup.ref('pw'), null],
          "비밀번호가 일치하지 않습니다.")
          .required('비밀번호를 다시 입력해주세요.'),
      });
    
      const { register, handleSubmit, formState:{ errors }} = useForm({
         resolver: yupResolver(schema),
        mode: 'onChange'});
    
      const onSubmit = (data) => console.log(data);
    
    return(
        <Styles.Wrapper onSubmit={handleSubmit(onSubmit)}>
            <Styles.ContentBox>
                <Styles.LoginText>비밀번호 변경</Styles.LoginText>
                
                <Styles.LoginText2 htmlFor="pw">새 비밀번호
                    <Styles.Input type="password" placeholder="새로운 비밀번호를 입력하세요" {...register('pw')} onChange={(e) => setPw(e.target.value)}></Styles.Input>
                    <Styles.ErrorMessage>{errors.pw && <Styles.ErrorMessage>{errors.pw.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                </Styles.LoginText2>

                <Styles.LoginText2 htmlFor="checkPw">비밀번호 확인
                        <Styles.Input type="password" placeholder="비밀번호를 다시 입력하세요" {...register('checkPw')}></Styles.Input>
                        <Styles.ErrorMessage>{errors.checkPw && <Styles.ErrorMessage>{errors.checkPw.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                </Styles.LoginText2>
                
                <UserBlueBtn type="submit" onClick={() => {
                  PasswordChange();
                  }}>비밀번호 변경</UserBlueBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default ChangePassPage;