import styled from "styled-components";

export const Wrapper = styled.div`
    height: 150vh;
    width: 100%;
    overflow: hidden;
`
export const ContentBox = styled.div`
    width: 1000px;
    position: absolute;
    top: 34%;
    left: 50%;
    margin-left: -500px;
    margin-top: -300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SignText = styled.text`
    font-size: 60px;
    font-weight: 500;
    color: black;
    margin-bottom: 40px;
    position: relative;
`

export const SignText2 = styled.text`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
    color: black;
    position: relative;
`

export const InputBox = styled.div`
    width: 350px;
    height: 35px;
    border-radius: 10px;
    background-color: #F3F3F3;
    color: black;
`

export const Input = styled.input`
    margin: 0;
    padding: 0;
    border: 0;
    flex: 1;
    outline: none;
    font-size: 15px;
    box-sizing: border-box;
    padding-left: 9px;
    font-weight: 450;
    background-color: #F3F3F3;
`

export const UserGreenBtn = styled.div`
    width: 150px;
    height: 35px;
    background-color: #90F0DF;
    margin-top: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const RadioBtn = styled.button`

`