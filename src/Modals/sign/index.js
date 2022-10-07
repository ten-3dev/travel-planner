import React from 'react';
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Styles from './style';

const SignPage = () => {
  const schema = yup.object().shape({
    id: yup.string().required('아이디를 입력해주세요.'),
    pw: yup.string().min(8).max(16).required('비밀번호를 입력해주세요.'),
    checkPw: yup
      .string()
      .oneOf([yup.ref('pw'), null])
      .required('비밀번호를 다시 입력해주세요.'),
    name: yup.string().required('이름을 입력해주세요.'),
    email: yup.string().email().required('이메일을 입력해주세요.'),
    
    
  });

  const { register, handleSubmit, formState:{ errors }} = useForm({
     resolver: yupResolver(schema),});

  const onSubmit = (data) => console.log(data);
  

    return(
  
        <Styles.Wrapper onSubmit={handleSubmit(onSubmit)}>
            <Styles.ContentBox>
            <Styles.SignText>SIGN UP</Styles.SignText>
          
                <Styles.SignText2 htmlFor="id">아이디
                  <Styles.Input type="id" {...register('id')}/>
                  {errors.id && '아이디 형식이 맞지 않습니다.'}
                  <Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn>
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="pw">비밀번호
                  <Styles.Input type="text" {...register('pw')}/>
                  {errors.pw && '비밀번호 형식이 맞지 않습니다.'}
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="checkPw">비밀번호 확인
                  <Styles.Input type="text" {...register('checkPw')}/>
                  {errors.checkPw && '비밀번호가 일치하지 않습니다.'}
                  </Styles.SignText2>

                <Styles.SignText2 htmlFor="name">이름
                  <Styles.Input type="text" {...register('name')}/>
                  {errors.name && '이름 형식이 맞지 않습니다.'}
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="email">이메일
                  <Styles.Input type="email" {...register('email')}/>
                  {errors.email && '이메일 형식이 맞지 않습니다.'}
                <Styles.UserGreenBtn>중복확인</Styles.UserGreenBtn></Styles.SignText2>

                <Styles.SignText2 htmlFor="phone">연락처
                  <Styles.Input/>
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="birth">생년월일
                  <Styles.Input/>
                </Styles.SignText2>

                <Styles.SignText2 htmlFor="gender">성별
                  <Styles.RadioWrap>
                  <Styles.RadioLabel htmlFor="male">남</Styles.RadioLabel>
                  <Styles.RadioBtn type="radio" name='gender' id="male"/>
                  <Styles.RadioLabel htmlFor="female">여</Styles.RadioLabel>
                  <Styles.RadioBtn type="radio" name='gender' id="female"/>
                  </Styles.RadioWrap>
                </Styles.SignText2>

                <Styles.UserGreenBtn type="submit">가입하기</Styles.UserGreenBtn>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}
export default SignPage;