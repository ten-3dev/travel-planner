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
    display: flex;
    width: 100%;
    height: 700px;
    margin-top:150px;
    
`

export const Image = styled.img`
    width: 100%;
`

export const ShareBtn = styled.div`
    width: 100px;
    height: 30px;
    margin: 5px 5px 5px -90%;
    border-radius: 5px;
    background-color: #ABE4C7; 

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
    //border: 3px solid blue;
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
    //border: 3px solid orange;
    
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
   // border: 3px solid pink;
    display: flex;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #eeeeef;
    padding: 25px 0 23px 0;

`

export const Day = styled.div`
    //border: 3px solid purple;
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
    //border: 4px solid darkblue;
    height: 100px;      
    display: flex;
    border-bottom: 1px solid #eeeeef;
    padding: 0 0 23px 0;

`

export const PlanImage = styled.img`
    //border: 1px solid gold;
    width: 20%;
    border-radius: 10px;
`

export const Text = styled.div`
    //border: 1px solid gray;
    display: flex;
    width: 65%;
    height: 100%;
    margin-left: 15px;
    flex-direction: column;
    
`

export const PlaceTitle = styled.div`
    //border: 1px solid darkblue;
    
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
   // border: 1px solid saddlebrown;
    width: 100%;
    padding: 0;
    display: block;
    margin-top: 3px;
    overflow: hidden;
    display: -webkit-box;
    max-height: 48px;
    word-break: keep-all;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    
`

export const MapBtnBox = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    height: 100%;
    cursor: pointer;
    padding: 15px;
    margin: 0 25px 25px 25px;
    background-color: white;//#D7D7D7
    

`
export const MapBtn = styled.img`
    height: 100%;

`

export const MapBox = styled.div`
    border: 1px solid black;
    width: 600px;
    height: 750px;
    z-index: 0;

`

export const Comment = styled.div`
    //border: 3px solid yellow;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 800px;
    margin-top: 200px;
    
`

export const CommentBox = styled.div`
    background-color: rgba(49, 49, 49, 0.2);
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 50px 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Review = styled.div`   
    //border: 2px solid black;
    display: flex;
    width: 60%;
    height: 20px;

    border-bottom: 1px solid #eeeeef;
    padding: 25px 0 23px 0;

    
`

export const ReImage = styled.div`

    opacity: .1;

`

export const ReContent = styled.div`

`

export const ReDate = styled.div`

`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputText = styled.textarea`
    width: 800px;
    height: 200px;

`

export const Profile = styled.div`

`

export const Input = styled.div`

`

export const InputBtn = styled.div`

`
 