import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import * as Styles from './style';
import Map from "../../Components/kakaoMap";
import Paging from "../../Components/paging";

const CreatePlanCalendar = ({open, setOpen, setDateList}) => { // 팝업
    const [value, onChange] = useState(new Date());

    const getApply = () => {
        // 클릭을 안했을때 (당일로 여행을 가서 바로 적용을 눌렀을때)
        if(!Array.isArray(value)){
            setDateList([value]);
            setOpen(false);
            return;
        }

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
        <Styles.ModalCustom isOpen={open} style={{overlay: {zIndex: "1", backgroundColor: "white"}}} ariaHideApp={false}>
            <Styles.CalendarCustom onChange={onChange} value={value} selectRange />
            <Styles.BtnBox>
                <Styles.Btn onClick={() => setOpen(false)}>이전</Styles.Btn>
                <Styles.Btn onClick={() => getApply()}>적용하기</Styles.Btn>
            </Styles.BtnBox>
        </Styles.ModalCustom>
    )
}

const FilterSelector = ({open, setOpen}) => {
    const [filterData, setFilterData] = useState([
        {text: "동물1", state: false},
        {text: "동물2", state: false},
        {text: "동물3", state: false},
        {text: "동물4", state: false},
        {text: "동물5", state: false},
        {text: "동물6", state: false},
        {text: "동물7", state: false},
        {text: "동물8", state: false},
        {text: "동물9", state: false},
    ]);


    const filterClick = (idx) => {
        const changeArr = filterData.map((el, index) => {
            return idx === index ? {...el, state: !el.state} : el;
        })

        setFilterData(changeArr);
    }

    return(
        <Styles.ModalCustom isOpen={open} style={{overlay: {zIndex: "2"}}} ariaHideApp={false} filter>
            <Styles.FilterBox>
                {filterData.map((el, idx) => {
                    return(
                        <Styles.FilterItemBox key={idx} onClick={() => filterClick(idx)}>
                            <Styles.FilterCheckBox type="checkbox" readOnly checked={el.state || false}/>
                            <Styles.FilterItemText>{el.text}</Styles.FilterItemText>
                        </Styles.FilterItemBox>
                    )
                })}
            </Styles.FilterBox>
            <Styles.FilterBtnBox>
                <Styles.FilterBtn onClick={() => setOpen(false)}>닫기</Styles.FilterBtn>
            </Styles.FilterBtnBox>
        </Styles.ModalCustom>
    )
}

const CreatePlanPage = () => {
    const [isModelOpen, setIsModelOpen] = useState(true); //날짜 모달
    const [filterOpen, setFilterOpen] = useState(false);
    const [dateList, setDateList] = useState();
    
    //박스를 움직이게 하는 state
    const [controlOpen, setControlOpen] = useState(false); // Control
    const [travelOpen, settravelOpen] = useState(false); // Travel

    const [update, setUpdate] = useState(null);

    // 추천 여행지 페이지네이션
    const [page1, setPage1] = useState(1);
    const [itemsCount] = useState(6);
    const [totalItemsCount1] = useState(50); // 임시

    // 찜한 여행지 페이지네이션
    const [page2, setPage2] = useState(1);
    const [totalItemsCount2] = useState(50); // 임시

    useEffect(() => {
        console.log(page1 === 1 ? 1 : (page1 - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page1, itemsCount]);

    useEffect(() => {
        console.log(page2 === 1 ? 1 : (page2 - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page2, itemsCount]);

    useEffect(() => { // 새로고침 방지 alert
        window.onbeforeunload = function() {
            return true;
        };
    
        return () => {
            window.onbeforeunload = null;
        };
    }, []);

    useEffect(() => { // 임시. 이따 지우셈
        console.log(dateList);
    }, [dateList])

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

    const onClose = () => {
        if(update !== null){
            return alert("아직 작업중인 DAY가 있습니다.");
        }
        setControlOpen(!controlOpen);
    }

    return(
        <>
            <CreatePlanCalendar open={isModelOpen} setOpen={setIsModelOpen} setDateList={setDateList}/>
            <FilterSelector open={filterOpen} setOpen={setFilterOpen}/>
            {isModelOpen ? null : 
            <Styles.Wrapper>
                <Styles.PlanApplyBtn>적용하기</Styles.PlanApplyBtn>
                <Styles.OpenBtn open={controlOpen} left onClick={() => {setControlOpen(!controlOpen)}}>{controlOpen ? "<<" : ">>"}</Styles.OpenBtn>
                <Styles.ControlBox open={controlOpen}>
                    <Styles.ContentBox>
                        <Styles.CloseBtn right onClick={onClose} src="assets/x.png"/>
                        <Styles.DateBox>
                            <Styles.TravelDate>{`${moment(dateList[0]).format("YYYY-MM-DD")} ~ ${moment(dateList[dateList.length - 1]).format("YYYY-MM-DD")}`}</Styles.TravelDate>
                            <Styles.TravelCalendar onClick={() => window.location.reload()} src="assets/calendar.png"/>
                        </Styles.DateBox>
                        {dateList.map((el, idx) => {
                            return(
                                <Styles.ListItemBox key={idx}>
                                    <Styles.DayTitle>DAY {idx + 1}</Styles.DayTitle>
                                    <Styles.DayItem>
                                        <Styles.DayItemImg></Styles.DayItemImg>
                                        <Styles.DayItemTextBox>
                                            <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                            </Styles.DayItemTitle>
                                            <Styles.DayItemSubTextBox>
                                                <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                                <Styles.DayItemRemove>삭제</Styles.DayItemRemove>
                                            </Styles.DayItemSubTextBox>
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
                        <Styles.TravelInputBox>
                            <Styles.TravelInput placeholder="검색할 여행지를 입력해주세요." />
                            <Styles.TravelInputBtn>검색</Styles.TravelInputBtn>
                        </Styles.TravelInputBox>
                        <Styles.ListBox>
                            <Styles.ListTitleBox>
                                <Styles.ListTitle>추천 여행지</Styles.ListTitle>
                                <Styles.ListFilter onClick={() => setFilterOpen(true)}>필터</Styles.ListFilter>
                            </Styles.ListTitleBox>
                            <Styles.ScrollBox>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                            </Styles.ScrollBox>
                            <Paging page={page1} count={totalItemsCount1} setPage={setPage1} itemsCount={itemsCount}/>
                        </Styles.ListBox>
                        <Styles.ListBox>
                        <Styles.ListTitleBox>
                                <Styles.ListTitle>찜한 여행지</Styles.ListTitle>
                            </Styles.ListTitleBox>
                            <Styles.ScrollBox>
                                <Styles.DayItem>
                                    <Styles.DayItemImg></Styles.DayItemImg>
                                    <Styles.DayItemTextBox>
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
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
                                        <Styles.DayItemTitle>낙동강 경천대(경천대 전망대)
                                            <Styles.LocationImg src={"assets/image35.png"} />
                                        </Styles.DayItemTitle>
                                        <Styles.ItemBox>
                                            <Styles.DayItemText>경북 상주시</Styles.DayItemText>
                                            <Styles.LikeImg src="assets/heart.png"/>
                                            <Styles.ItemBtn>추가하기</Styles.ItemBtn>
                                        </Styles.ItemBox>
                                    </Styles.DayItemTextBox>
                                </Styles.DayItem>
                            </Styles.ScrollBox>
                            <Paging page={page2} count={totalItemsCount2} setPage={setPage2} itemsCount={itemsCount}/>
                        </Styles.ListBox>
                    </Styles.ContentBox>
                </Styles.TravelBox>
            </Styles.Wrapper>
            }
        </>
    )
}

export default CreatePlanPage;