import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    /* height: 100%; */
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const ImageBox = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 850px;
    margin-top:150px;
    
`
export const Profile1 = styled.img`
    top:0;
    left: 0;
    width: 100px;
    height: 100px;
    margin-right: 60px;
`

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
export const Image = styled.img`
    width: 100%;
    height: calc(100% - 150px);
`

export const IntroTitle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    left: 100px;
    bottom: 200px;
`
export const IntroText = styled.div`
    font-size:30px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;

`

export const IntroDate = styled.div`
    font-size: 18px;
    color: white;

`

export const ShareBtn = styled.button`
    position: absolute;
    display: flex;
    border: none;
    cursor: pointer;
    background: ${props => {
        return (!props.open ? "url(/assets/lockon.png) " : "url(/assets/lockoff.png) ") +"no-repeat scroll 0 0 transparent"
    }};
    background-size: contain ;
    right: 18%;
    bottom: 0;
    min-width: 100px;
    min-height: 100px;

`

export const ContentBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    width: 100%;
    justify-content: space-between;
`

export const Menu = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height:800px;


`

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
export const Box = styled.div`
    display: flex;
    height: calc(100% - 50px);

`

export const PlanInfoList = styled.div`    
    display: flex;
    overflow-y: auto;
        // 스크롤 디자인
        ::-webkit-scrollbar {   // 스크롤 전체
            width: 15px;
        }
        ::-webkit-scrollbar-thumb { // 스크롤바
            background-color: #807E7E;
            border-radius: 10px;
            background-clip: padding-box;
            border: 2px solid transparent;
        }
        ::-webkit-scrollbar-track { //스크롤 여백
            background-color: #CBCBCB;
            border-radius: 10px;
            box-shadow: inset 0px 0px 5px white;
        }
    flex: 1;
    flex-direction: column;
`

export const DayList = styled.div`
    display: flex;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #eeeeef;
    padding: 25px 0 23px 0;

`

export const Day = styled.div`
    overflow: hidden;
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #D7D7D7;
    border-radius: 10px;
    margin-right: 10px;
`

export const PlaceInfo = styled.div`
    height: 100px;      
    display: flex;
    border-bottom: 1px solid #eeeeef;
    padding: 0 0 23px 0;

`

export const PlanImage = styled.img`
    cursor: pointer;
    width: 20%;
    border-radius: 10px;
`

export const Text = styled.div`
    display: flex;
    width: 65%;
    height: 100%;
    margin-left: 15px;
    flex-direction: column;
    
`

export const PlaceTitle = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
    
`

export const Content = styled.div`
    display: -webkit-box;
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    padding: 0;
    margin-top: 3px;
    max-height: 48px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #666;
        
`

export const MapBtnBox = styled.button`
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    background: ${props => {
        return (props.open ? "url(/assets/image35_1.png) " : "url(/assets/image35.png) ") + "no-repeat scroll 0 0 transparent"
    }};
    background-size: contain ;

    width: 60px;
    margin: 10px 15px 0 0;
    
`

export const MapBox = styled.div`
    width: 600px;
    height: 750px;
    z-index: 0;

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
 