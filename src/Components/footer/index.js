import React from "react";
import { MarginTopWrapper } from '../../Common/style';
import * as Styles from './style';

const Footer = () => {
    return(
        <Styles.Wrapper>
            <MarginTopWrapper>
                <Styles.LogoBox>
                    <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`} alt="logo"/>
                    <Styles.LogoTitle>TRAVEL PLANNER</Styles.LogoTitle>
                </Styles.LogoBox>
                <Styles.IconBox>
                    <Styles.Icon src={process.env.PUBLIC_URL + `assets/github.png`} alt="github_img"/>
                    <Styles.Icon src={process.env.PUBLIC_URL + `assets/github.png`} alt="github_img"/>
                    <Styles.Icon src={process.env.PUBLIC_URL + `assets/github.png`} alt="github_img"/>
                    <Styles.Icon src={process.env.PUBLIC_URL + `assets/github.png`} alt="github_img"/>
                    <Styles.Icon src={process.env.PUBLIC_URL + `assets/github.png`} alt="github_img"/>
                </Styles.IconBox>
            </MarginTopWrapper>
        </Styles.Wrapper>
    )
}

export default Footer