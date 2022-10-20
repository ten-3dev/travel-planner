import styled from "styled-components";

export const Title = styled.div`
    display: inline-block;
    line-height: 50px;
    font-weight: bold;
    font-size: 30px;
    border-bottom: 1px solid #000;
    border-bottom-width: 2.3px;
    width: 36%;
    padding: 25px 0 10px 20px;
    margin-bottom: 20px;
`

export const Comment = styled.div`
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    margin-top: 200px;
    flex: 1;
    
`

export const CommentBox = styled.div`
    background-color: #f3f3f3;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 0 70px 0 70px;
    
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
`

export const ReviewBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex: 1;


    
`

export const Review = styled.div`
    display: flex;
    justify-content: center;
    align-self: start;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid black;
    padding: 5px 5px 0 5px;
    
`

export const RefirstBox = styled.div` 
    display: flex;
    align-items: center;
`

export const ReImage = styled.img`
    left: 0;
    width: 50px;
    height: 50px;
    margin-right: 5px;

`

export const ReName = styled.div`
    left: 70px;
    font-weight: bold;

`

export const ReContent = styled.div`
    left: 110px;
    width: 80%;
    padding: 0;
    display: block;
    display: -webkit-box;
    word-break: keep-all;
    text-overflow: ellipsis;
    -webkit-line-clamp: 30;
    -webkit-box-orient: vertical;

`

export const ReDate = styled.div`
    margin-top: 5px;
    right: 0;
    font-size: small;   
`

export const InputBox = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    height: 150px;
    margin: 50px 0 50px 0;
`

export const ReviewTextBox= styled.div`
    position: absolute;
    top: -40px;
`

export const ReviewText= styled.div`
    font-weight: bold;
`

export const Profile = styled.img`
    top:0;
    left: 0;
    width: 100px;
    height: 100px;
    margin-right: 60px;
`

export const InputComment = styled.textarea`
    resize: none;
    width: 70%;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
`

export const InputBtn = styled.button`
    border: none;
    border-radius: 7px;
    position: absolute;
    display: flex;
    right: 0;
    bottom:0;
    width: 100px;
    height: 35px;
    background-color: #587545;

    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    align-items: center;
`