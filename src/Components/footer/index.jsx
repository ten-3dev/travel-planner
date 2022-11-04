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
                    <Styles.IconItem onClick={() => window.open('https://github.com/Bamiya')}>
                        <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                        <Styles.IconText>이정도</Styles.IconText>
                    </Styles.IconItem>
                    <Styles.IconItem onClick={() => window.open('https://github.com/Moues1995')}>
                        <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                        <Styles.IconText>석준혁</Styles.IconText>
                    </Styles.IconItem>
                    <Styles.IconItem onClick={() => window.open('https://github.com/nvz90')}>
                        <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                        <Styles.IconText>구대영</Styles.IconText>
                    </Styles.IconItem>
                    <Styles.IconItem onClick={() => window.open('https://github.com/jjijju0918')}>
                        <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                        <Styles.IconText>김지수</Styles.IconText>
                    </Styles.IconItem>
                    <Styles.IconItem onClick={() => window.open('https://github.com/ten-3dev')}>
                        <Styles.Icon src={"assets/github.png"} alt="github_img"/>
                        <Styles.IconText>김민재</Styles.IconText>
                    </Styles.IconItem>
                </Styles.IconBox>
            </MarginTopWrapper>
        </Styles.Wrapper>
    )
}

export default Footer