import React, { useState, useEffect } from "react";
import * as Styles from './style';

const CreatePlanCalendar = ({open, setOpen, setDateList}) => {
    const [value, onChange] = useState(new Date());

    const getApply = () => {
        // 날짜 사이 일 수 구함
        const diffDate = value[0].getTime() - value[1].getTime();
        const dateN = Math.ceil(Math.abs(diffDate / (1000 * 60 * 60 * 24)));

        const dateArr = [(value[0])];
        
        // 오늘보다 이전 날짜면 끝냄
        if(dateArr[0] < new Date().setHours(0, 0, 0, 0)){ // 시간을 0으로 초기화
            alert("현재 날짜 이후로 선택해주세요.");
            onChange(new Date());
            return;
        }

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
    
    //박스를 움직이게 하는 state
    const [controlOpen, setControlOpen] = useState(false); // Control
    const [travelOpen, settravelOpen] = useState(false); // Travel

    useEffect(() => { // 임시. 이따 지우셈
        console.log(dateList);
    }, [dateList])

    window.onbeforeunload = (event) => { // 리로드/뒤로가기 트리거
        const e = event || window.event;
        e.preventDefault();
        if (e) {
          e.returnValue = '';
        }
        return '';
    };

    return(
        <>
            <CreatePlanCalendar open={isModelOpen} setOpen={setIsModelOpen} setDateList={setDateList}/>
            {isModelOpen ? null : 
            <Styles.Wrapper>
                <Styles.ControlBox open={controlOpen}>
                    <Styles.ContentBox>
                        <Styles.OpenBtn right onClick={() => {setControlOpen(!controlOpen)}}>{controlOpen ? "<<" : ">>"}</Styles.OpenBtn>
                    </Styles.ContentBox>
                </Styles.ControlBox>
                <Styles.Map>

                </Styles.Map>
                <Styles.TravelBox open={travelOpen}>
                    <Styles.ContentBox>
                        <Styles.OpenBtn left onClick={() => {settravelOpen(!travelOpen)}}>{travelOpen ? ">>" : "<<"}</Styles.OpenBtn>
                    </Styles.ContentBox>
                </Styles.TravelBox>
            </Styles.Wrapper>
            }
        </>
    )
}

export default CreatePlanPage;