import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import * as Styles from './style';
import Map from "../../Components/kakaoMap";

const CreatePlanCalendar = ({open, setOpen, setDateList}) => { // 팝업
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

// const DayList = () => {
//     return(
//         <Styles.ListItemBox>
//             <Styles.DayTitle>DAY 1</Styles.DayTitle>
//             <Styles.DayItem>
//                 <Styles.DayItemImg></Styles.DayItemImg>
//                     <Styles.DayItemTextBox>
//                         <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
//                         <Styles.DayItemText>경북 상주시</Styles.DayItemText>
//                     </Styles.DayItemTextBox>
//                 </Styles.DayItem>
//                 <Styles.DayItem>
//                     <Styles.DayItemImg></Styles.DayItemImg>
//                     <Styles.DayItemTextBox>
//                         <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
//                         <Styles.DayItemText>경북 상주시</Styles.DayItemText>
//                     </Styles.DayItemTextBox>
//                 </Styles.DayItem>
//                 <Styles.PlanAddBtnBox>
//                     <Styles.PlanAddBtn onClick={() => settravelOpen(!travelOpen)}>일정 수정</Styles.PlanAddBtn>
//                 </Styles.PlanAddBtnBox>
//         </Styles.ListItemBox>
//     )
// }

const CreatePlanPage = () => {
    const [isModelOpen, setIsModelOpen] = useState(true); //로그인용 모달
    const [dateList, setDateList] = useState();
    
    //박스를 움직이게 하는 state
    const [controlOpen, setControlOpen] = useState(false); // Control
    const [travelOpen, settravelOpen] = useState(false); // Travel

    const [update, setUpdate] = useState(null);

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

    const onUpdate = (idx) => {
        if(update == null){
            setUpdate(idx);
            settravelOpen(true);
        }else if(update !== null & update !== idx){
            alert("현재 수정하고 있는 DAY가 있습니다.");
        }else{
            setUpdate(null);
            settravelOpen(false);
        }
    }

    return(
        <>
            <CreatePlanCalendar open={isModelOpen} setOpen={setIsModelOpen} setDateList={setDateList}/>
            {isModelOpen ? null : 
            <Styles.Wrapper>
                <Styles.OpenBtn open={controlOpen} left onClick={() => {setControlOpen(!controlOpen)}}>{controlOpen ? "<<" : ">>"}</Styles.OpenBtn>
                <Styles.ControlBox open={controlOpen}>
                    <Styles.ContentBox>
                        <Styles.CloseBtn right onClick={() => setControlOpen(!controlOpen)}></Styles.CloseBtn>
                        <Styles.DateBox>
                            <Styles.TravelDate>{`${moment(dateList[0]).format("YYYY-MM-DD")} ~ ${moment(dateList[dateList.length - 1]).format("YYYY-MM-DD")}`}</Styles.TravelDate>
                            <Styles.TravelCalendar></Styles.TravelCalendar>
                        </Styles.DateBox>
                        {dateList.map((el, idx) => {
                            return(
                                <Styles.ListItemBox key={idx}>
                                    <Styles.DayTitle>DAY {idx + 1}</Styles.DayTitle>
                                    <Styles.DayItem>
                                        <Styles.DayItemImg></Styles.DayItemImg>
                                        <Styles.DayItemTextBox>
                                            <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                        </Styles.DayItemTextBox>
                                    </Styles.DayItem>
                                    <Styles.DayItem>
                                        <Styles.DayItemImg></Styles.DayItemImg>
                                        <Styles.DayItemTextBox>
                                            <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                        </Styles.DayItemTextBox>
                                    </Styles.DayItem>
                                    <Styles.PlanAddBtnBox>
                                        <Styles.PlanAddBtn updated={update === idx + 1} onClick={() => onUpdate(idx + 1)}>{update === idx + 1 ? "취소" : "일정 수정"}</Styles.PlanAddBtn>
                                    </Styles.PlanAddBtnBox>
                                </Styles.ListItemBox>
                            )
                        })}
                    </Styles.ContentBox>
                </Styles.ControlBox>
                <Styles.Map>
                    <Map/>
                </Styles.Map>
                <Styles.TravelBox open={travelOpen}>
                    <Styles.ContentBox>
                        <Styles.CloseBtn left onClick={() => settravelOpen(!travelOpen)}></Styles.CloseBtn>
                        <Styles.TravelInputBox>
                            <Styles.TravelInput placeholder="검색할 여행지를 입력해주세요." />
                            <Styles.TravelInputBtn>검색</Styles.TravelInputBtn>
                        </Styles.TravelInputBox>
                        <Styles.ListBox>
                            <Styles.ListTitleBox>
                                <Styles.ListTitle>추천 여행지</Styles.ListTitle>
                                <Styles.ListFilter>필터</Styles.ListFilter>
                            </Styles.ListTitleBox>
                            <Styles.ScrollBox>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                            </Styles.ScrollBox>
                        </Styles.ListBox>
                        <Styles.ListBox>
                        <Styles.ListTitleBox>
                                <Styles.ListTitle>찜한 여행지</Styles.ListTitle>
                            </Styles.ListTitleBox>
                            <Styles.ScrollBox>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)</Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                            </Styles.ScrollBox>
                        </Styles.ListBox>
                    </Styles.ContentBox>
                </Styles.TravelBox>
            </Styles.Wrapper>
            }
        </>
    )
}

export default CreatePlanPage;