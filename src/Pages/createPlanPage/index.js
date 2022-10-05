import React, { useState, useContext, useEffect } from "react";
import * as Styles from './style';
import { UserContext } from "../../Store/users";

const CreatePlanCalendar = ({open, setOpen, setDateList}) => {
    const [value, onChange] = useState(new Date());

    const getApply = () => {
        // 날짜 사이 일 수 구함
        const diffDate = value[0].getTime() - value[1].getTime();
        const dateN = Math.ceil(Math.abs(diffDate / (1000 * 60 * 60 * 24)));

        const dateArr = [(value[0])];

        // 반복문을 이용해 내일을 구하고 또 내일내일을 구하는 식으로 리스트를 만듦
        for(let i = 0; i < dateN - 1; i++){
            const date = dateArr[dateArr.length - 1];
            const tomorrow = new Date(date);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            dateArr.push(tomorrow);
        }
        
        setDateList(dateArr);
        setOpen(false);
    }

    return(
        <Styles.ModalCustom isOpen={open} style={{overlay: {zIndex: "1"}}} ariaHideApp={false}>
            <Styles.CalendarCustom onChange={onChange} value={value} selectRange />
            <Styles.BtnBox>
                <Styles.Btn onClick={() => setOpen(false)}>이전</Styles.Btn>
                <Styles.Btn onClick={() => getApply()}>적용하기</Styles.Btn>
            </Styles.BtnBox>
        </Styles.ModalCustom>
    )
}

const CreatePlanPage = () => {
    const [isModelOpen, setIsModelOpen] = useState(true); //로그인용 모달
    const [dateList, setDateList] = useState();

    const context = useContext(UserContext);
    const { setLayoutOpen } = context;

    useEffect(() => {
        setLayoutOpen(false);
    });

    useEffect(() => {
        console.log(dateList);
    }, [dateList])

    return(
        <>
            <CreatePlanCalendar open={isModelOpen} setOpen={setIsModelOpen} setDateList={setDateList}/>
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
        </>
    )
}

export default CreatePlanPage;