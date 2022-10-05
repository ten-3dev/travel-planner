import React, { useContext } from "react";
import { MarginTopWrapper } from '../../Common/style';
import * as Styles from './style';
import { UserContext } from "../../Store/users";


const Footer = () => {
    const context = useContext(UserContext);
    const { layoutOpen } = context;
    return(
        <Styles.Wrapper open={layoutOpen}>
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