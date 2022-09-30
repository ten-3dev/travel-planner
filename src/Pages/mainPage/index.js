import React from "react";
import * as Styles from './style';

const MainPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.Video controls={false} muted autoPlay loop>
                <source src="http://192.168.52.16:8000/video" type="video/mp4" />
            </Styles.Video>
            <Styles.ContentBox>
                <Styles.Title>
                    TRAVEL PLANNER
                    <Styles.ColorBar></Styles.ColorBar>
                </Styles.Title>
                <Styles.InputBox>
                    <Styles.Input placeholder="어디로 여행가시나요?"/>
                    <Styles.Btn>
                        <Styles.Img src={process.env.PUBLIC_URL + "assets/search_icon.png"}/>
                    </Styles.Btn>
                </Styles.InputBox>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default MainPage;