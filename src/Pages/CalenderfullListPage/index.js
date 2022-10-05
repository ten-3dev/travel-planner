import React from "react";
import * as Styles from './style';

export const CalenderfullListPage = () =>{
    return(
        <Styles.AllBox>
             <Styles.ScheduleBox>
                <Styles.CalenderBox>
                    <Styles.CalenderDay>2022-03-21 ~ 2022-09-18</Styles.CalenderDay>
                    <Styles.CalenderImg src={"assets/달력.png"}></Styles.CalenderImg>
                </Styles.CalenderBox>
                <Styles.ScheduleDayBox>DAY1</Styles.ScheduleDayBox>
                <Styles.ContentBox>
                    <Styles.CalenderImg src={"assets/plan_ex1.png"} ></Styles.CalenderImg>

                    <Styles.ContentTitle>낙동강 경천대(경천대 전망대)</Styles.ContentTitle>
                    <Styles.ContentTextBox>
                        <Styles.ContentText>경주 상주시</Styles.ContentText>
                        <Styles.ContentText>054-536-7040</Styles.ContentText>
                        <Styles.ContentText>#2021대한민국안심여행캠페인#가족여행#경천대</Styles.ContentText>
                    </Styles.ContentTextBox>
                    
                </Styles.ContentBox>
                <Styles.ScheduleBtnBox>일정추가</Styles.ScheduleBtnBox>
                <Styles.ScheduleDayBox>DAY2</Styles.ScheduleDayBox>
                <Styles.ScheduleBtnBox>일정추가</Styles.ScheduleBtnBox>
                <Styles.ScheduleDayBox>DAY3</Styles.ScheduleDayBox>
                <Styles.ScheduleBtnBox>일정추가</Styles.ScheduleBtnBox>
            </Styles.ScheduleBox>
    </Styles.AllBox>
    );
}
export default CalenderfullListPage;