import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`
export const ContentBox = styled.div`
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -500px;
    margin-top: -300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoginText = styled.text`
    font-size: 60px;
    font-weight: 500;
    color: black;
    margin-bottom: 40px;
    position: relative;
`

export const LoginText2 = styled.text`
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 40px;
    position: relative;
`

export const InputBox = styled.div`
    width: 350px;
    height: 35px;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 0 0 7px;
    display: flex;
    background-color: #F3F3F3;
`

export const KakaoBtn = styled.div`
    width: 350px;
    height: 35px;
    background-color: #F6EF3D;
    margin-top: 5px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`