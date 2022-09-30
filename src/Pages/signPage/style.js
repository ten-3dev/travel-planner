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

export const SignText = styled.text`
    font-size: 60px;
    font-weight: 500;
    color: black;
    margin-bottom: 40px;
    position: relative;
`