import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

export const Video = styled.video`
    z-index: -1;
    position: absolute;
    width: auto;
    height: auto;
    min-height: 100%;
    min-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ContentBox = styled.div`
    width: 1000px;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-left: -500px;
    margin-top: -150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    font-size: 60px;
    font-weight: 500;
    color: white;
    margin-bottom: 40px;
    position: relative;
`

export const ColorBar = styled.div`
    position: absolute;
    width: 270px;
    height: 7px;
    background-color: rgba(91,189,220,0.9);
    top: 1px;
    right: 0;

`

export const InputBox = styled.div`
    width: 700px;
    height: 48px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    background-color: #F3F3F3;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const InputPreView = styled.div`
    width: 650px;
    height: 330px;
    background-color: #F5F5F5;
    position: absolute;
    top: 60px;
    border-radius: 5px;
    padding: 15px 30px 30px 30px;
    box-sizing: border-box;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: ${props => {
        return props.display ? "block" : "none"
    }};
`

export const InputPreItem = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 400;
    :hover{
        text-decoration: underline;
    }
`

export const Input = styled.input`
    margin: 0;
    padding: 0;
    border: 0;
    flex: 1;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    padding-left: 9px;
    font-weight: 450;
    background-color: #F3F3F3;
    margin-left: 7px;
`

export const Btn = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 5px;
    background-color: rgba(106, 136, 82, 0.6);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    width: 35px;
`

export const BottomBox = styled.div`
    width: 100%;
    background-color: ${props => {
        return props.color ? props.color : "white"
    }};
`

export const BottomContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 120px;
    box-sizing: border-box;
    padding: ${props => {
        return props.padding ? `${props.padding} 40px 0 40px` : "0 40px"
    }};
    padding-bottom: ${props => {
        return props.paddingBottom ? props.paddingBottom : "0"
    }};
    flex-direction: ${props => {
        return props.column ? "column" : "row"
    }}
`

export const BottomContentImg = styled.img`
`
export const BottomContentWords = styled.div`
    text-align: center;
`

export const BottonContentTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 15px;
`

export const BottomContentText = styled.div`
    width: 350px;
    word-break: keep-all;
`

export const BottomContentSBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const BottomContentBtn = styled.div`
    background-color: #8397FF;
    width: 200px;
    height: 45px;
    border-radius: 5px;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 60px;
`

export const CarouselTitle = styled.div`
    font-size: 35px;
    margin-bottom: 25px;
`

export const SliderCustom = styled(Slider)`
    width: 930px;
    margin-bottom: 20px;
`

export const SliderBox = styled.div`
    height: 370px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 25px;
    cursor: pointer;
`

export const SliderImg = styled.img`
    width: 240px;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
`

export const SliderInfo = styled.div`
    width: 100%;
    height: 140px;
    border: 0.5px solid black;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 15px 15px 0;
    display: flex;
    flex-direction: column;
`

export const SliderInfoText = styled.div`
    font-weight: bold;
    font-size: ${props => {
        return props.size ? props.size : "16px"
    }};
    margin-left: 5px;
`

export const SliderInfoBottomBox = styled.div`
    width: 100%;
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SliderInfoBox = styled.div`
    display: flex;
`

export const SliderInfoImg = styled.img`
    width: 25px;
    margin-right: 5px;
`

export const SliderArrow = styled.img`
    width: 20px;
    height: 40px;
    transform: ${props => {
        return props.prev ? "rotate( 180deg )" : ""
    }};
`