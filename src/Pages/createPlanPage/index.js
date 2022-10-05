import React, { useState, useContext, useEffect } from "react";
import * as Styles from './style';
import { UserContext } from "../../Store/users";


const CreatePlanCalendar = () => {
    return(
        <>adfasdfasdfsadf</>
    )
}

const CreatePlanPage = () => {
    const [isModelOpen, setIsModelOpen] = useState(true); //로그인용 모달
    const context = useContext(UserContext);
    const { setLayoutOpen } = context;

    useEffect(() => {
        setLayoutOpen(false);
    });

    return(
        <Styles.ModalCustom isOpen={isModelOpen} style={{overlay: {zIndex: "1"}}} ariaHideApp={false}>
            <CreatePlanCalendar/>
            <button onClick={() => setIsModelOpen(!isModelOpen)}>닫기</button>
        </Styles.ModalCustom>
    )
}

export default CreatePlanPage;