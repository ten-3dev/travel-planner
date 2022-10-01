import styled from "styled-components";

export const Title = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
    font-weight: bold;
`
export const LikeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`
export const Like = styled.button`
    border: 0;
    width: 70px;
    background: rgba(0, 150, 100, 0.5);
    color: white;
    border-radius: 10px;
    margin-left: 15px;
    cursor: pointer;
`
export const TopBar = styled.div` //크기자동조절 찾기
    width: 100%;
    height: 3px;
    margin-top: 1%;
    margin-bottom: 3%;
    background-color: grey ;
    opacity: 0.2;
`
export const TitleImgBox = styled.div`
   margin-bottom: 3%;
`

export const InformationTitle = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
`
export const InformationBox = styled.div`
    width: 100%;
`
export const TalkMessageBox = styled.div`
    margin-bottom: 5%;
    background-color: rgba(49, 49, 49, 0.5);
    /* opacity: 0.5; */
    border-radius: 20px;
    box-sizing: border-box;
    padding: 50px 70px;
`
export const InformationContnet = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`
export const Sources = styled.div`
    font-size: 15px;
    margin-bottom: 20px;
    margin-right:75%;
    font-weight: bold;
`
export const Talk = styled.div`
    font-size: 25px;
    //margin-bottom: 20px;
    //margin-right:87%;
    font-weight: bold;
`
export const Msg = styled.div`
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 10px;
`
export const InformationBar = styled.div`
    width: 600px;
    height: 3px;
    margin-bottom: 1%;
    margin-right: 35%;
    background-color: grey ;
    opacity: 0.2;
`
export const MessageBar = styled.div`
    width: 100%;
    height: 3px;
    background-color: Black;
`
export const MessageInput = styled.textarea` 
    border: 0;
    flex: 1;
    height: 100px;
    font-size: 18px;
    background-color: white ;
    margin: 0 40px;
`
export const MessageCommentsBox = styled.div`
    margin-bottom: 200px;
`
export const MessageCommentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    padding: 15px 0;
    width: 90%;
`
export const MessageCommentIcon = styled.div` // 나중에 img 로 바꿀꺼
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    background-color: blue;
    margin-right: 180px;
`
export const Comment = styled.div`
    font-size: 15px;
    margin-bottom: 1%;
    margin-top:1%; 
    flex: 1;
`
export const Days = styled.div`
    font-size: 15px;
    font-weight: bold;
`
export const MessageBtn = styled.button`
    border: 0;
    width: 70px;
    height: 30px;
    background: rgba(0, 50, 100, 1);
    color: white;
    border-radius: 5px;
    align-self: flex-end;
    cursor: pointer;
`
export const Map = styled.div`
    margin-bottom: 3%;
    height:200px;
    background-color:grey;
`
export const DetailedInfor = styled.div`
    margin-bottom: 3%;
    height:200px;
    background-color:green;
`
export const Img1 = styled.img`
    width: 35px;
`
export const Titleimage = styled.img`
    width: 100%;
`
export const Profile = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    align-self: flex-start;
`
export const MymessageBox = styled.div`
    border-top: 1px solid black;
`
export const Reviewcomment = styled.div`
    margin-bottom: 10px;
`
export const MyWriting = styled.div`
    margin-bottom:40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`