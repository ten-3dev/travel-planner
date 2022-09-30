import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

export const Video = styled.video`
    z-index: -1;
    position: absolute;
    width: auto;
    height: auto;
    min-height: 100%;
    min-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ContentBox = styled.div`
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -500px;
    margin-top: -150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    font-size: 60px;
    font-weight: 500;
    color: white;
    margin-bottom: 40px;
    position: relative;
`

export const ColorBar = styled.div`
    position: absolute;
    width: 270px;
    height: 7px;
    background-color: rgba(91,189,220,0.9);
    top: 8px;
    right: 0;

`

export const InputBox = styled.div`
    width: 700px;
    height: 48px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 0 0 7px;
    display: flex;
    background-color: #F3F3F3;
`

export const Input = styled.input`
    margin: 0;
    padding: 0;
    border: 0;
    flex: 1;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    padding-left: 9px;
    font-weight: 450;
    background-color: #F3F3F3;
`

export const Btn = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 5px;
    background-color: rgba(106, 136, 82, 0.6);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    width: 35px;
`