import styled from "styled-components";

export const Wrapper = styled.form`
    width: 100%;
    overflow: hidden;
`
export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SignText = styled.div`
    font-size: 60px;
    font-weight: 500;
    color: black;
    margin-bottom: 20px;
`

export const SignText2 = styled.label`
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 20px;
    color: black;
`

export const ErrorMessage = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: red;
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

export const UserGreenBtn = styled.button`
    width: 90px;
    height: 35px;
    background-color: rgba(45, 125, 154, 0.68);
    margin-top: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
`
export const UsernewBtn = styled.button`
    width: 90px;
    height: 35px;
    background-color: rgba(15, 73, 102, 0.87);
    margin-top: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
`

export const RadioWrap = styled.div`
    margin: 0 130px 10px;
    display: flex;    
`

export const RadioBtn = styled.input`

`

export const RadioLabel = styled.label`
    
`