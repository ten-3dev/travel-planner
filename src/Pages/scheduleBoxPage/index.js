import React from "react";
import * as Styles from './style';

const SchedulePage = () => {
    return(
        <Styles.AllBox>
            <Styles.ScheduleBox>
                <Styles.ScheduleContentBox>플랜제목</Styles.ScheduleContentBox>
                <Styles.ScheduleContentBox>2022-10-01 - 2022-10-07</Styles.ScheduleContentBox>
                <Styles.ScheduleDayBox>DAY1</Styles.ScheduleDayBox>
                <Styles.ScheduleBtnBox>일정추가</Styles.ScheduleBtnBox>
                <Styles.ScheduleDayBox>DAY2</Styles.ScheduleDayBox>
                <Styles.ScheduleBtnBox>일정추가</Styles.ScheduleBtnBox>
                <Styles.ScheduleDayBox>DAY3</Styles.ScheduleDayBox>
                <Styles.ScheduleBtnBox>일정추가</Styles.ScheduleBtnBox>
            </Styles.ScheduleBox>
            <Styles.MapBox>
                 <Styles.MapImg>임시 지도</Styles.MapImg>
            </Styles.MapBox>
        </Styles.AllBox>
    );
}
export default SchedulePage;