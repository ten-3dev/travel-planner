import styled from "styled-components";


export const TitleBox = styled.div`
    width: 100%;
    margin-top: 200px;
`
export const Title = styled.div`
    font-size: 30px;
    font-weight: 500px;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
    font-weight: bold;
`
export const TopBar = styled.div` 
    width: 100%;
    height: 3px;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: grey ;
    opacity: 0.2;
`
export const PlanBox = styled.div` //전체박스
    width: 100%;
    margin-bottom: 50px;
    cursor: pointer;
    display: flex;
    margin-bottom: 100px;
`
export const PlanContentBox = styled.div` //첫번째 내용박스
    width: 400px;
    height: 300px;
    margin: 50px 50px 50px;
    cursor: pointer;

`
export const PlansecondContentBox = styled.div` // 두번째 내용박스
    width: 400px;
    height: 300px;
    margin: 50px 50px 50px;
    cursor: pointer;
`
export const PlansecondBox = styled.div` // 두번째 전체박스
    width: 100%;
    margin-bottom: 200px;
    display: flex;
`
export const Pagination = styled.div` //임시 페이지네이션
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
`
export const PlanImg = styled.img`
    width: 300px;
    border-radius: 12px;
`
export const LikeImg = styled.img`
    /* width: 35px;
    margin-top: 25px;
    display: flex; */
    width: 25px;
    margin-right: 5px;
`
export const LikeListfontBox = styled.div` //아직
    width: 100%;
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LikefontBox = styled.div`
    display: flex;
`
export const ContentBox = styled.div`
    font-size: 16px;
    font-weight: bold;
`
export const ContentListBox = styled.div`
    width: 100%;
    height: 140px;
    //margin-top: 10px;
    border: 0.5px solid black;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 15px 15px 0;
    display: flex;
    flex-direction: column;
    //margin-bottom: 30px;
`