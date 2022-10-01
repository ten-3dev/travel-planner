import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    overflow: auto;

    height: 100vh;
    width: 100%;
    
`

export const ContentBox = styled.div`
    border: 5px solid green;
    
    position: absolute;
    display: flex;
    flex-direction: column;
    align-item: center; 
    overflow: auto;

    width: 1200px;
    top: 50%;
    left: 50%;
    margin-left: -600px;
    
`

export const ImageBox = styled.div`
    border : 1px solid red;

    position: relative;
    display: flex;
    flex-direction: column;

    width: 100%;
    height:700px;
    margin-bottom:200px;
     
    
`

export const Image = styled.img`
    position: absolute;

    width: 100%;


`

export const ShareBtn = styled.div`

    position: absolute;

    width: 100px;
    height: 30px;
    right:0;
    margin-top: 650px;
    
    border-radius: 5px;
    background-color: #ABE4C7; 



`

export const Menu = styled.div`
    border: 1px solid blue;

    position: absolute;
    
    width: 100%;
    height: 100px;


`

export const Information = styled.div`


`

export const Map = styled.div`

`

export const Comment = styled.div`
    position: absolute;

    border: 1px solid yellow;

    width: 100%;
    height: 200px;
    
`

export const ReviewBox = styled.div`

`

export const Review = styled.div`

`

export const InputBox = styled.div`

`

export const InputBoxText = styled.div`

`

export const Profile = styled.div`

`

export const Input = styled.div`

`

export const InputBtn = styled.div`

`
