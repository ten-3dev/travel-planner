import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 200vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const ImageBox = styled.div`
    border : 1px solid red;
    display: flex;
    width: 100%;
    height: 470px;
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
    border: 3px solid green;
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    width: 100%;
    height:80%;
    
`

export const Menu = styled.div`
    border: 3px solid blue;
    
    display:flex;
    flex-direction: column;
    width: 100%;
    height:800px;


`

export const Title = styled.div`
    border: 3px solid black;
    display: inline-block;
    line-height: 50px;
    width: 100%;
    height: 50px;
    font-weight: bold;
    font-size: 30px;
`
export const Box = styled.div`
    border: 3px solid gray;
    display: flex;
    height: calc(100% - 50px);

`

export const PlanInfoList = styled.div`
    border: 3px solid orange;
    
    display: flex;
    overflow-y: auto;
        ::-webkit-scrollbar {   // 스크롤 전체
            width: 15px;
        }
        ::-webkit-scrollbar-thumb { // 스크롤바
            background-color: #2f3542;
            border-radius: 10px;
            background-clip: padding-box;
            border: 3px solid transparent;
        }
        ::-webkit-scrollbar-track { //스크롤 여백
            background-color: grey;
            border-radius: 10px;
            box-shadow: inset 0px 0px 5px white;
        }
    flex: 1;
    flex-direction: column;
    height: ${props =>{
        return props.height ? `${props.height}` : "300px"
    }};
    margin: ${props => {
        return props.margin ? `${props.margin}` : ""
    }};
   
`

export const DayList = styled.div`
    border: 3px solid pink;
    display: flex;
    padding: 10px 0 10px 0;
    margin: 0 0 50px 0;

`

export const Day = styled.div`
    border: 3px solid purple;
    
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

`

export const PlaceInfo = styled.div`
    border: 4px solid darkblue;
    height: 100px;      
    display: flex;
    margin-bottom: 50px;

`

export const PlanImage = styled.img`
    border: 1px solid gold;
    width: 20%;

`

export const Text = styled.div`
    border: 1px solid gray;
    display: flex;
    width: 65%;
    height: 100%;
    margin-left: 15px;
    flex-direction: column;
    
`

export const PlaceTitle = styled.div`
    border: 1px solid darkblue;
    
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
    border: 1px solid saddlebrown;
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

export const MapBtn = styled.img`
    border: 3px solid skyblue;
    height: 50%;
    margin: 25px;

`

export const Map = styled.img`
    border: 3px solid skyblue;
    display: flex;
    width:45%;

`

export const Comment = styled.div`
    border: 3px solid yellow;
    display:flex;
    box-sizing: border-box;
    width: 100%;
    margin-top: 200px;
    height: 400px;
`

export const ReviewBox = styled.div`

`

export const Review = styled.div`   

`

export const ReImage = styled.div`

`

export const ReContent = styled.div`

`

export const ReDate = styled.div`

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
 