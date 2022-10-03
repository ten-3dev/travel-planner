import styled from "styled-components";

export const Title = styled.div`
    font-size: 30px;
    font-weight: 500px;
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
export const TopBar = styled.div` 
    width: 100%;
    height: 3px;
    margin-top: 10px;
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
    font-size: 20px;
    margin-bottom: 20px;
    word-break: keep-all;
`
export const Sources = styled.div`
    font-size: 15px;
    margin-bottom: 20px;
    margin-right:75px;
    font-weight: bold;
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
    height:200px;
    background-color:grey;
`
export const DetailedInforBox = styled.div`
    margin-bottom:30px;
    //background-color:wheat;
    align-items: center;
    display: flex;
`
export const DetaBox = styled.div`
    width: 50%;
`
export const DetaBoxrightBox = styled.div`
    width: 50%;
` 
export const DetaFontBox = styled.div`
    align-items: center;
    display: flex;
`
export const DetaFontrightBox = styled.div`
    display: flex;
    align-self: flex-start;
    margin-bottom: 22px;
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
export const Img1 = styled.img`
    width: 2%;
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

//상세정보 홈페이지 박스를 문의안내 줄 위치에 나오게 하기 임시방편해둠
//DetaFontrightBox 안에  margin-bottom: 22px; 대칭 맞춰놨지만 수정해야할듯
//칸이 넓혀서 맞춘거임 한번 컨펌받구 수정할거 해보기
//페이지네이션 댓글 나의 글쓰기 밑에 만들기 라이브러리 사용예정
