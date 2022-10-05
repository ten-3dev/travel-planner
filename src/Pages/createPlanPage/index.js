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
        </>
    )
}

export default CreatePlanPage;