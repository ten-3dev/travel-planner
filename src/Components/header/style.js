import styled from "styled-components";
import Modal from 'react-modal';


export const LoginModal = styled(Modal)`
    position: absolute;
    width: 700px;
    height: 650px;
    background: rgb(255 255 255);
    border-radius: 4px;
    outline: none;
    padding: 0px;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    box-shadow: 0px 0px 10px 4px black;
`

export const SignModal = styled(Modal)`
    position: absolute;
    width: 700px;
    height: 650px;
    overflow-y: scroll;
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

export const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    top: 0;
    transition: all .5s;
    background: ${props => {
        let bg;
        if(props.bg){
            bg = "transparent"
        }else{
            bg = "linear-gradient(180deg, rgba(118, 118, 118,1) 5%,  rgba(255,255,255, 0) 100%)"
        }
        if(props.scroll) bg = "white"
        return bg;
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

export const MyProfile = styled.div`
    width: 40px;
    height: 40px;
    background-color: #565656;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
`

export const MyProfileListBox = styled.div`
    position: absolute;
    width: 140px;
    background-color: #a9a9a9;
    top: 50px;
    left: -50px;
    border-radius: 5px;
    padding: 5px 15px;
    box-sizing: border-box;
    display: ${props => {
        return props.clicked ? "block" : "none"
    }};
`

export const MyProfileItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    text-align: center;
    color: whitesmoke;
    font-weight: 400;
    border-bottom: ${props => {
        return props.last ? "" : "1px solid gray"
    }};
    :hover{
        text-decoration: underline;
    }
`