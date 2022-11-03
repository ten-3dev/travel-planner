import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: #151515;
    display: flex;
    align-items: center;
    display: ${props => {
        return props.open ? "flex" : "none"
    }};
`

export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoTitle = styled.div`
    font-weight: bold;
    color: whitesmoke;
    font-size: large;
`

export const Img = styled.img`
    width: 110px;
`

export const IconBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`

export const Icon = styled.img`
    width: 60px;
    border-radius: 30px;
    cursor: pointer;
    margin: 0 10px;
`