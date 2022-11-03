import styled from "styled-components";


export const EditTitle = styled.div`
    font-size: 30px;
    font-weight: 500px;
    margin: 150px 150px 20px;
    font-weight: bold;
`
export const TitleBar = styled.div` 
    width: 170px;
    height: 1px;
    margin-left: 60px;
    margin-top: 15px;
    background-color: gray ;
`
export const ProfileBox = styled.div`
    display: flex;
    table-layout: fixed;
    width: 800px;
    margin: 0 150px 200px ; 
`
export const LeftProfileBox = styled.div`
    width: 300px;
    background-color: rgba(72, 112, 110, 0.16);
    box-shadow: 5px 1px 8px 0 rgb(0 0 0 / 6%);
    border-left: 1px solid rgba(0,0,0,.08);
`
export const LeftContent = styled.div` //클릭했을 때 찐하게 해놓기 자동 첫번째
    width: 120px;
    font-size: 19px;
    margin: 40px 90px 30px;
    text-align: center;
    cursor: pointer;
    border-bottom: ${props => {
        if(props.click) return "2px solid"
        else return "none"
    }};
    
    font-weight: ${props => {
        if(props.click) return "bold"
        else return "none"
    }};
`
export const MemberInforBox = styled.div`
    height: 600px;
    margin-left: 100px;
    padding: 20px 17px 0;
    border-radius: 15px;
    box-shadow: 2px 2px 14px 0;
    border: solid 1px rgba(54, 66, 69, 0.56);
    background-color: #fff;
    box-sizing: border-box;
`
export const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    box-shadow: 0 3px 6px 0 rgb(29 34 53 / 8%);
    margin: 100px 100px 10px;
`
export const MemberContentBox = styled.div`
    margin: 20px 0 0;
    padding: 30px 30px 0;
`
export const MemberEdit = styled.div`
    width: 150px;
    margin-right: 100px;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: bold;
`
export const MemberName = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align:center;
`
export const BasicInformation = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align:center;
`
export const BasicInformationBox = styled.div`
    height: 60px;
    display: flex;
    margin: 0 30px;
`
export const BasicInformationImg = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50px;
    margin-top: 15px;
    box-shadow: 0 3px 6px 0 rgb(29 34 53 / 8%);
`
export const BasicInformationName =styled.div`
    font-size: 25px;
    font-weight: bold;
`
export const BasicInformationEamil = styled.div`
    font-size: 15px;
    color: #929294;
`
export const BasicInformationEamilBox = styled.div`
    margin-top: 10px;
    margin-left: 10px;
`
export const Memberemail = styled.div`
    text-align:center;
    font-size: 15px;
    color: #929294;
`
export const MyProfileBox = styled.div`
    height: 600px;
    margin-left: 100px;
    padding: 20px 17px 0;
    border-radius: 15px;
    box-shadow: 2px 2px 14px 0;
    border: solid 1px rgba(54, 66, 69, 0.56);
    background-color: #fff;
    box-sizing: border-box;
`
export const Content = styled.input`
    margin: 0;
    border: 0;
    outline: none;
    font-size: 15px;
    font-weight: 450;
    display: block;
    width: 350px;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 0 0 9px;
    background-color: #F3F3F3;
    margin-top: 7px;
`
export const EditBtn = styled.button`
    border: 0;
    width: 100px;
    height: 40px;
    margin: 45px 150px;
    font-size: 15px;
    background: rgba(0, 100, 100, 0.5);
    color: white;
    border-radius: 5px;
    cursor: pointer;
`
export const BasicInfoBtn = styled.button`
    border: 0;
    width: 100px;
    height: 40px;
    margin: 85px 150px ;
    font-size: 15px;
    background: rgba(0, 100, 100, 0.5);
    color: white;
    border-radius: 5px;
    cursor: pointer;
`
export const DeleteBtn = styled.button`
    border: none;
    margin-top: 30px;
    margin-left: 200px;
    background-color:transparent;
    color: gray;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
`
export const BtnBox = styled.div`
    width: 100%;
`
export const BasicInforContentBox = styled.div`
    margin: 20px 0 0;
    padding: 20px 30px 0;
`
export const ProfileImgChange = styled.img`
    width: 15px;
    height: 15px;
    border-radius: 50px;
`
export const ProfileImgInput = styled.input`
    display: none ;
`
export const LabelBox = styled.label`
    display:inline-block;
    cursor: pointer;
    margin-top: 5px;
    margin-left: 70px;
`

export const ErrorMessage = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: red;
`

export const WarningMessage = styled.span`
    color: ${props => {
        return props.check ? "green" : "red"
    }}
`

//사진변경가능하게 해야함
