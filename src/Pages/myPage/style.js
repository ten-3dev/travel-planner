import styled from "styled-components";


import { NavLink as Link } from 'react-router-dom';


export const ProfileBox = styled.div`
    width: 1000px;
    display: flex;
    margin: 150px 0 50px 450px;
    background-color: green;
`

export const SettingBox = styled.div`
    width: 22%;
    display: flex-end;
    align-items: center;

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
    border-bottom: 1px solid #000000 ;
`
export const Box3 = styled.div`
    width: 100%;
    height: 120px;
`

export const Box4 = styled.div`
    width: 100%;
    display: flex;
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

export const Setting = styled.img`
    cursor: pointer;
    width: 60px;
    height: 60px;
    align-items:flex-end ;
    justify-content: flex-start;
    
`

export const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin-bottom: 50px;
    cursor: pointer;
    
`

export const Text = styled.div`
    width: 300px; 
    height: 150px;
    font-size: 30px;
    margin: 100px 0 0 0;
`
export const Text1 = styled.div`
    width: 100%; 
    font-size: 20px;
    margin-left: 7px;
`

export const Text2 = styled.div`
    width: 100%; 
    font-size: 30px;
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
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  //padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
  
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
