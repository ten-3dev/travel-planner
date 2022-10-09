import styled from "styled-components";

import { NavLink as Link } from 'react-router-dom';



export const ProfileBox = styled.div`
    width: 1200px;
    text-align: center;
    margin: 150px 0 50px 0;
    
`

export const SettingBox = styled.div`
    width: 400px;
    text-align:center;
    margin-left: 400px;
    margin-top: 50px;

`
export const MyWritingBox = styled.div`
    width: 100%;
    display: flex;
    
`

export const CommentsBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const CommentsBox1 = styled.div`
    width: 100%;
    margin-bottom: 50px;
    margin-left: 130px;
    display: flex;
`
export const CommentsBox2 = styled.div`
width: 100%;
margin-bottom: 20px;
border-bottom: 1px solid #000000 ;
margin-top: 50px;
`

export const MyComments = styled.div`
    width: 18%;
    margin-bottom: 20px;
    font-size: 30px;
    margin-left: 130px;
    border-bottom: 1px solid #000000 ;
    padding: 0 0 10px 0;
    font-weight: bold ;
    text-align : left;
`

export const Box = styled.div`
    width: 100%;
    border-bottom: 1px solid #000000 ;
    border-right: 1px solid #000000;
`

export const Box1 = styled.div`
    width: 100%;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    cursor: pointer;
`
export const Box2 = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 15px;
    
`
export const Box3 = styled.div`
    width: 1200px;
    padding-bottom: 30px;
    border-bottom: 3px solid #000000 ;
    
`

export const Box4 = styled.div`
    width: auto;
    text-align: center;
    display: flex;
    justify-content : center;
    
`
export const Box5 = styled.div`
    width: 1200px;
    
    justify-content: center;
    display: flex;
`

export const EditMemberBox = styled.div`
    width: 100px;
    height: 25px;
    background-color: #ECECEC;
    
    border-radius: 10px;
    margin-top: 10px;
    padding-top:5px ;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    
`

export const ModifyDeleteBox = styled.div`
    width: 30%;
    height: 15%;
    background-color: #A4A4A4;
    align-items: center;
    text-align: center;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 50px;
    cursor: pointer;
`
export const MySharingPlanBox = styled.div`
    width: 100%;
    background-color: #FAF3E1;
    border-radius: 30px;
    margin: 20px 200px 20px 100px;
    border: 1px solid #CECECD ;
    padding-top: 20px;
`


export const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin-bottom: 20px;
    box-shadow: 1px 1px 5px 2px;
    cursor: pointer;
    
`
export const SettingsImg= styled.img`
    width: 35px;
    height: 35px;
    margin-top: 5px;
    cursor: pointer;
    
`

export const Text = styled.div`
    width: auto; 
    text-align: center;
    font-size: 30px;
    //margin-left: 85px;
    margin-right: 10px;
    
     
`
export const Text1 = styled.div`
    width: 100%; 
    font-size: 20px;
    margin-left: 7px;
`

export const Text2 = styled.div`
    width: 100%; 
    font-size: 16px;
    font-weight: bold;
`

export const Text3 = styled.div`
    width: 100%; 
    font-size: 25px;
    text-align: center;
    margin-right: 100px;
    margin-bottom: 50px;
`

export const Text4 = styled.div`
    width: 90%; 
    margin: 0 30px 0 30px;
`

export const Text5 = styled.div`
    width: 90%; 
    margin: 0 50px 0 30px;
    text-align: right;
`

export const PlanText = styled.div`
    width: 100%; 
    height: 150px;
    font-size: 20px;
    margin-left: 5px;
`

export const PeriodText = styled.div`
    width: 100%; 
    height: 192px;
    font-size: 20px;
    margin-left: 5px;
`
export const Img = styled.img`
    cursor: pointer;
    width: 140px;
    height: 140px;
    margin-right: 15px;
    margin-top: 5px;
    border-radius: 10px;
`
export const PlanImg = styled.img`
    cursor: pointer;
    width: 250px;
    height: 230px;
    margin-right: 15px;
    margin-top: 5px;
    border-radius: 10px;
`

export const Img1 = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 0 0 30px;
    display: flex;
`






export const Nav = styled.nav`
  width: 1200px;
  height: 70px;
  display: flex;
  margin-left: 157px;
  
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  height: 100%;
  background: ${props => {
    return props.isAction === "myPlan" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
    //transition: all 0.2s ease-in-out;
    background: #BEBEBE;
    color: #808080;
    &.active {
    color: ${props => props.theme.orange };
    background: #BEBEBE;
  }
  }
`;

export const NavLink1 = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  height: 100%;
  background: ${props => {
    return props.isAction === "myComment" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
    //transition: all 0.2s ease-in-out;
    background: #BEBEBE;
    color: #808080;
    &.active {
    color: ${props => props.theme.orange };
    background: #BEBEBE;
  }
  }
`;

export const NavLink2 = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  height: 100%;
  background: ${props => {
    return props.isAction === "sharedPlan" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
    //transition: all 0.2s ease-in-out;
    background: #BEBEBE;
    color: #808080;
    &.active {
    color: ${props => props.theme.orange };
    background: #BEBEBE;
  }
  }
`;

export const NavLink3 = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  height: 100%;
  background: ${props => {
    return props.isAction === "like" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
    //transition: all 0.2s ease-in-out;
    background: #BEBEBE;
    color: #808080;
    &.active {
    color: ${props => props.theme.orange };
    background: #BEBEBE;
  }
  }
`;



  
export const NavMenu = styled.div`
  width: 200px;

  align-items: center;
  border-radius: 10px;
  margin: 0 30px 0 0;
  
`;
  

