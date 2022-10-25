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
    position:relative;
`

export const Box1 = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 15px;
`
export const Box = styled.div`
    width: 1200px;
    padding-bottom: 30px;
    border-bottom: 3px solid #000000 ;
`

export const Box2 = styled.div`
    width: auto;
    text-align: center;
    display: flex;
    justify-content : center;
`

export const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin-left: 50px;
    box-shadow: 1px 1px 5px 2px;
    position:absolute;
    
`

export const MyProfileBox = styled.div`
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
`
export const SettingsImg= styled.img`
    width: 40px;
    height: 40px;
    margin-top: 130px;
    margin-left: 165px;
    position:absolute;
    cursor: pointer;
`

export const Text = styled.div`
    width: auto; 
    text-align: center;
    font-size: 30px;
    margin-right: 10px;   
`

export const Text1 = styled.div`
    width: 100%; 
    font-size: 16px;
    font-weight: bold;
`

export const Nav = styled.nav`
  width: 980px;
  height: 70px;
  display: flex;
  
  margin-left: 120px; 
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  height: 100%;
  background: ${props => {
    return props.isaction === "myPlan" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
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
    return props.isaction === "myComment" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
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
    return props.isaction === "sharedPlan" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
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
    return props.isaction === "like" ? "#BEBEBE" :"#ECECEC"
  }
  };
  cursor: pointer;
  &:hover {
    background: #BEBEBE;
    color: #808080;
    &.active {
    color: ${props => props.theme.orange };
    background: #BEBEBE;
  }
  }
`;

export const NavMenu = styled.div`
  width: 300px;
  align-items: center;
  border-radius: 10px;
  margin: 0 30px 0 0;
`;