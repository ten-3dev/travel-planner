import styled from "styled-components";

export const MarginTopWrapper = styled.div`
    max-width: 1600px;
    margin: ${props => {
        return props.margin ? "80px auto 0 auto" : "0 auto"
    }};
`


// 팝업 회원쪽 공용 스타일

export const UserBlueBtn = styled.div`
    width: 350px;
    height: 35px;
    background-color: #38B7FF;
    margin-top: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`