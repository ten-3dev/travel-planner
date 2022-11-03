import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: 150px 0;
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
    margin-bottom: 40px;
`

export const SignText2 = styled.label`
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 30px;
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
    width: 150px;
    height: 35px;
    background-color: #90F0DF;
    margin-top: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
`

export const RadioWrap = styled.div`
    margin: 0 130px 100px;
    display: flex;    
`

export const RadioBtn = styled.input`

`

export const RadioLabel = styled.label`
    
`

export const WarningMessage = styled.span`
    font-size: 14px;
    color: ${props => {
        return props.check ? "green" : "red"
    }}
`