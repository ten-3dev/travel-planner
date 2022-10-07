import styled from "styled-components";

export const MarginTopWrapper = styled.div`
    width: 1200px;
    margin: ${props => {
        return props.margin ? "80px auto 0 auto" : "0 auto"
    }};
`


// 팝업 회원쪽 공용 스타일

export const UserBlueBtn = styled.button`
    width: 350px;
    height: 35px;
    background-color: #38B7FF;
    margin-top: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
`