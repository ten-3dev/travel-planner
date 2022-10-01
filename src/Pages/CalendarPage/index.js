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
                    <Styles.Information/>
                    <Styles.Map/>
                </Styles.Menu>
                <Styles.Comment>
                    <Styles.ReviewBox>
                        <Styles.Review/>
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