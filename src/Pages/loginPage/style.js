import styled from "styled-components";
import Modal from 'react-modal';

export const Wrapper = styled.div`
    width: 100%;
    margin: 150px 0;
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

export const KakaoBtn = styled.div`
    width: 350px;
    height: 35px;
    background-color: #F6EF3D;
    margin-top: 10px;
    margin-bottom: 10px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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

export const FindSignWrap = styled.div`
    display: flex;
`

export const FindSignText = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #9D9A9A;
    margin-bottom: 40px;
    cursor: pointer;
`

export const FindPassModal = styled(Modal)`
    position: absolute;
    width: 700px;
    height: 600px;
    background: rgb(255 255 255);
    border-radius: 4px;
    outline: none;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    box-sizing: border-box;
    padding: 20px 20px;
    box-shadow: 0px 0px 10px 4px black;
`
