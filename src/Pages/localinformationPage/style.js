import styled from "styled-components";


export const Contentbook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 180px
`
export const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
`
export const ColorBar = styled.div` //크기자동조절 찾기
    width: 900px;
    height: 3px;
    margin-top: 1%;
    margin-bottom: 10%;
    background-color: grey ;
    opacity: 0.2;
`

export const Input = styled.input` //댓글사용
    border: 0;
    flex: 1;
    font-size: 10px;
    background-color: white ;
    margin-left: 70%;
`

export const Btn = styled.button`
    border: 0;
    flex: 1;
    background: rgba(0, 150, 100, 0.5);
    color: white;
    margin-left: 50%;
    border-radius: 5px;
`
