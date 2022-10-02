import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    top: 0;
    background: ${props => {
        return props.main ? "transparent" : "linear-gradient(180deg, rgba(118, 118, 118,1) 5%,  rgba(255,255,255, 0) 100%)"
    }};
`

export const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
`

export const LogSign = styled.div`
    display: flex;
    align-items: center;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
`

export const Text = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #393939;
    margin: 0px 10px;
    cursor: pointer;
`

export const Img = styled.img`
    cursor: pointer;
    margin-right: 15px;
`