import styled from "styled-components";

export const Wrapper = styled.form`
    width: 100%;
    margin: 200px 0;
`
export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
`

export const LoginText = styled.div`
    font-size: 60px;
    font-weight: 500;
    color: black;
    margin-bottom: 40px;
`

export const LoginText2 = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 40px;
`

export const Input = styled.input`
    margin: 0;
    border: 0;
    outline: none;
    font-size: 15px;
    font-weight: 450;
    display: block;
    width: 350px;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 0 0 9px;
    background-color: #F3F3F3;
    margin-top: 7px;
`

export const ErrorMessage = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: red;
`