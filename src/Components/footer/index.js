import React from "react";
import { useLocation } from 'react-router-dom';
import { MarginTopWrapper } from '../../Common/style';
import * as Styles from './style';

const Footer = () => {
    const location = useLocation();
    return(
        <Styles.Wrapper open={location.pathname === '/CreatePlanPage' ? false : true}>
            <MarginTopWrapper>
                <Styles.LogoBox>
                    <Styles.Img src={"assets/logo.png"} alt="logo"/>
                    <Styles.LogoTitle>TRAVEL PLANNER</Styles.LogoTitle>
                </Styles.LogoBox>
                <Styles.IconBox>
                    <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                    <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                    <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                    <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                    <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                </Styles.IconBox>
            </MarginTopWrapper>
        </Styles.Wrapper>
    )
}

export default Footer