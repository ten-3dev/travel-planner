import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Styles from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import crypto from 'crypto-js';

const SignPage = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  const replace = useNavigate();

  useEffect(() => {
    const { state } = location;
    if(state !== null){
      setEmail(state.email);
    }
    console.log(state);
  }, [])


  // useEffect(async () => {
  //   try{
  //   const response = await axios.post('http://localhost8080/sign')
  //   setData(response.data);
  //   }catch(error){
  //     console.log(error)
  //   }
  // })

  const signUp = () => {
    const createHashedPassword = crypto.SHA256(password).toString(crypto.enc.Base64);
    axios
    .post('http://localhost:8080/register',{
      email: email,
      password: createHashedPassword,
      name: name,
      tel: phone,
      birth: birth,
      profileImg: ''
    })
    .then((response) =>{
      console.log('회원가입 완료');
      console.log('user profile', response);
      replace("/login");
    })
    .catch((error)=>{
      console.log('회원가입 실패', error.response)
    })
  }

  const schema = yup.object().shape({
    email: yup
    .string()
    .email('올바른 이메일 형식을 입력해주세요.')
    .required('이메일을 입력해주세요.'),
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
    name: yup
      .string()
      .matches(
        /^[가-힣]{2,4}$/,
        "2-4자리의 한글이름만 입력가능"
      )
      .required('이름을 입력해주세요.'),
    phone: yup
      .string()
      .matches(
        /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
        '올바른 휴대폰 번호를 입력해주세요.'
      )
      .required('휴대폰 번호를 입력해주세요.'),
    birth: yup
      .string()
      .matches(
        /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
        '올바른 생년월일을 입력해주세요.'
      )
      .required('생년월일을 입력해주세요.'),
  });

  const { register, handleSubmit, formState:{ errors }} = useForm({
     resolver: yupResolver(schema),
    mode: 'onChange'});

  const onSubmit = (data) => console.log(data);

    return(
  
        <Styles.Wrapper onSubmit={handleSubmit(onSubmit)}>
            <Styles.ContentBox>
            <Styles.SignText>SIGN UP</Styles.SignText>
                <Styles.SignText2 htmlFor="email">이메일
                  <Styles.Input type="email" placeholder="이메일을 입력해주세요" {...register('email')} value={email !== "" ? email : ""} onChange={(event)=>{ setEmail(event.target.value);}}/>
                  <Styles.ErrorMessage>{errors.email && <Styles.ErrorMessage>{errors.email.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="pw">비밀번호
                  <Styles.Input type="password" placeholder="비밀번호를 입력해주세요." {...register('pw')} value={password} onChange={(event)=>{ setPassword(event.target.value);}}/>
                    <Styles.ErrorMessage>{errors.pw && <Styles.ErrorMessage>{errors.pw.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="checkPw">비밀번호 확인
                  <Styles.Input type="password" placeholder="비밀번호를 다시 입력해주세요."{...register('checkPw')} value={passwordCheck} onChange={(event)=>{ setPasswordCheck(event.target.value);}}/>
                    <Styles.ErrorMessage>{errors.checkPw && <Styles.ErrorMessage>{errors.checkPw.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                  </Styles.SignText2>

                <Styles.SignText2 htmlFor="name">이름
                  <Styles.Input type="text" placeholder="이름을 입력해주세요." {...register('name')} value={name} onChange={(event)=>{ setName(event.target.value);}}/>
                   <Styles.ErrorMessage>{errors.name && <Styles.ErrorMessage>{errors.name.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="phone">연락처
                  <Styles.Input type="phone" placeholder="'-' 제외 휴대폰 번호를 입력해주세요" {...register('phone')} value={phone} onChange={(event)=>{ setPhone(event.target.value);}}/>
                  <Styles.ErrorMessage>{errors.phone && <Styles.ErrorMessage>{errors.phone.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="birth">생년월일
                  <Styles.Input type="birth" placeholder="ex)1999-09-09" {...register('birth')} onChange={(event)=>{ setBirth(event.target.value);}}/>
                  <Styles.ErrorMessage>{errors.birth && <Styles.ErrorMessage>{errors.birth.message}</Styles.ErrorMessage>}</Styles.ErrorMessage>
                </Styles.SignText2>

                <Styles.UserGreenBtn type="submit" onClick={() => {
                  signUp();
                  }}>가입하기</Styles.UserGreenBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}
export default SignPage;