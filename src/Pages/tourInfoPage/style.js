import styled from "styled-components";

export const Title = styled.div`
    font-size: 30px;
    font-weight: 500px;
    margin-bottom: 40px;
    text-align: center;
    font-weight: bold;
`
export const TitleBox = styled.div`
    width: 100%;
    margin-top: 200px;
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
    background: ${props => {
        return props.dibs ? "rgba(0, 150, 100, 0.5)" : "rgba(255, 0, 100, 0.5)"
    }};
    color: white;
    border-radius: 10px;
    margin-left: 15px;
    cursor: pointer;
`
export const TopBar = styled.div` 
    width: 100%;
    height: 3px;
    //margin-top: 10px;
    margin-bottom: 30px;
    background-color: grey ;
    opacity: 0.2;
`
export const TitleImgBox = styled.div`
   margin-bottom: 30px;
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
    margin-bottom: 50px;
    background-color: rgba(49, 49, 49, 0.2);
    /* opacity: 0.5; */
    border-radius: 20px;
    box-sizing: border-box;
    padding: 50px 70px;
`
export const InformationContnet = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    word-break: keep-all;
`

export const Talk = styled.div`
    font-size: 25px;
    font-weight: bold;
`
export const Msg = styled.div`
    font-size: 10px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const InformationBar = styled.div`
    width: 600px;
    height: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 35px;
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
    resize: none;
`
export const MessageCommentsBox = styled.div`
    margin-bottom: 200px;
`
export const MessageCommentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #9ea4aa;
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
    margin-bottom: 1px;
    margin-top:1px; 
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
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height:400px;
`
export const DetailedInforBox = styled.div`
    margin-bottom:30px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`
export const DetaBox = styled.div`
    width: 100%;
`
export const DetaFontBox = styled.div`
    display: flex;
`
export const DetaFont = styled.div`
    font-size: 20px;
    font-weight: bold;
    align-self: flex-start;
    width: 40%;
`
export const DetainforMation = styled.div`
    margin-bottom: 30px;
    width: 70%;    
    align-items: center;
`
export const DetainfoRight = styled.div`
    margin-bottom: 30px;
    width: 70%;    
    align-items: center;
`
export const Img1 = styled.div`
    margin-top: 15px;
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
    border-top: 3px solid #9ea4aa;
`
export const Reviewcomment = styled.div`
    margin-bottom: 15px;
`
export const MyWriting = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

//페이지네이션 댓글 나의 글쓰기 밑에 만들기 라이브러리 사용예정 



export const Title1 = styled.div`
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

export const Comment1 = styled.div`
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    margin-top: 100px;
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
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-between;
    margin-bottom: 30px;
`

export const ReviewBox = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #9ea4aa;
    box-sizing: border-box;

    
`

// export const Review = styled.div`
//     // display: flex;
//     // justify-content: center;
//     // align-self: start;
//     // flex-direction: column;
//     // width: 100%;
//     // border-bottom: 1px solid black;
//     // padding: 5px 5px 0 5px;

    
// `

export const RefirstBox = styled.div` 
    margin-top: 25px;
    margin-left: 10px;
`

export const ReImage = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50px;
    margin-top: 20px;
    box-shadow: 0 3px 6px 0 rgb(29 34 53 / 8%);

`

export const ReName = styled.div`
    left: 70px;
    font-weight: bold;
`

export const ReContent = styled.div`
    margin-bottom: 10px;
`

export const ReDate = styled.div`
    margin-top: 8px;
    margin-bottom: 10px;
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

export const Profile1 = styled.img`
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