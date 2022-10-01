import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

const calendarPage = () =>{
    return(
        <>
        <Styles.ImageBox>
            <Styles.Image src="assets/image32.png"/>
            <Styles.ShareBtn/>
        </Styles.ImageBox>
        <MarginTopWrapper>
            <Styles.Wrapper>
                <Styles.ContentBox>
                    <Styles.Menu>
                        <Styles.Title/>
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
        </MarginTopWrapper>
        </>
    )
}

export default calendarPage;