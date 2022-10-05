import styled from "styled-components";

export const EditTitle = styled.div`
    font-size: 40px;
    font-weight: 500px;
    margin-bottom: 15px;
    margin-top: 200px;
    text-align: center;
    font-weight: bold;
`
export const TitleBar = styled.div` 
    width: 100%;
    height: 3px;
    margin-top: 10px;
    margin-bottom: 100px;
    background-color: black ;
    //opacity: 0.2;
`
export const MemberInforBox = styled.div`
    width: 100%;
`
export const MemberContentBox = styled.div`
    margin: 40px 40px 100px;
    width: 900px;
    display: flex;
`
export const MemberEdit = styled.div`
    width: 200px;
    font-size: 25px;
    font-weight: bold;
`
export const MemberConrent = styled.input` //칸박스 수정해야함 rgba로 변경하고 아이디~비번까지는 글씨 투명 나머지는 글씨 잘보이게 
    width: 400px;
    height: 50px;
    font-size: 25px;
    text-align: center; 
    cursor: pointer;
    border-radius: 9px;
    background-color: #F5F5F5;

`
export const GenderCheck = styled.div` //성별버튼 만들어야함
    width: 400px;
    font-size: 25px;
    cursor: pointer;
    border-radius: 12px;
`
export const Btn = styled.button`
    border: 0;
    width: 150px;
    height: 40px;
    margin: 30px 10px;
    font-size: 25px;
    background: rgba(0, 100, 100, 0.5);
    color: white;
    border-radius: 5px;
    cursor: pointer;
`
export const DeleteBtn = styled.button`
    border: 0;
    width: 150px;
    height: 40px;
    margin: 30px 10px;
    font-size: 25px;
    background-color: red;
    //background: rgba(0, 50, 100, 1);
    color: white;
    border-radius: 5px;
    cursor: pointer;
`
export const BtnBox = styled.div`
    width: 400px;
    margin: 30px 400px;
    width: 900px;
    display: flex;
`