import React from "react";
import * as Styles from './style';

const calendarPage = () =>{
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
                <Styles.ImageBox>
                    <Styles.Image src="assets/image32.png"/>
                    <Styles.ShareBtn/>
                </Styles.ImageBox>
                <Styles.Menu>
                    <Styles.PlanInfoList>
                        <Styles.PlanInfo>
                            <Styles.Day/>
                            <Styles.PlanImage/>
                            <Styles.Title/>
                            <Styles.Content/>
                            <Styles.MapBtn/>
                        </Styles.PlanInfo>
                    </Styles.PlanInfoList>
                    <Styles.Map/>
                </Styles.Menu>
                <Styles.Comment>
                    <Styles.ReviewBox>
                        <Styles.Review>
                            <Styles.ReImage/>
                            <Styles.ReContent/>
                            <Styles.ReDate/>
                        </Styles.Review>
                    </Styles.ReviewBox>
                    <Styles.InputBox>
                        <Styles.InputBoxText/>
                        <Styles.Profile/>
                        <Styles.Input/>
                        <Styles.InputBtn/>
                    </Styles.InputBox>
                </Styles.Comment>
            </Styles.ContentBox>
        </Styles.Wrapper>   
    )
}

export default calendarPage;