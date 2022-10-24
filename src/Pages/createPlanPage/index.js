import moment from "moment/moment";
import React, { useState, useEffect, useRef } from "react";
import * as Styles from './style';
import Map from "../../Components/kakaoMap";
import Paging from "../../Components/paging";
import { date } from "yup";

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
    const [totalItemsCount1,setStotalItemCount1] = useState(50); // 임시    //@@set추가

    // 찜한 여행지 페이지네이션
    const [page2, setPage2] = useState(1);
    const [totalItemsCount2, setStotalItemCount2] = useState(50); // 임시

    useEffect(() => {
        if(dateList !== undefined){
            let arr = [];
            for(let i=0; i<dateList.length; i++){
                arr[i] = [i+1,[]]
            }
            setDayList(arr);
        }
    },[dateList])

    useEffect(() => {
        console.log(page1 === 1 ? 1 : (page1 - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page1, itemsCount]);

    useEffect(() => {
        console.log(page2 === 1 ? 1 : (page2 - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page2, itemsCount]);

    useEffect(() => { // 새로고침 방지 alert
        console.log("최초 useEffect실행@@");
        tourData();
        window.onbeforeunload = function() {
            return true;
        };
        return () => {
            window.onbeforeunload = null;
        };
    }, []);

    useEffect(() => { // 임시. 이따 지우셈
        // console.log(dateList);
    }, [dateList])

    const onUpdate = (idx) => {
        if(update == null){
            setUpdate(idx);
            settravelOpen(true);
        }else if(update !== null & update !== idx){
            alert("현재 수정하고 있는 DAY가 있습니다.");
        }else{                       
            setTourSelect([]);
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

    //@@@@@@@@
    const pagingHook = useRef(false)
    const [coordinate, setCoordinate] = useState([]);               // 좌표
    const [storagetours, setStorageTours] = useState([]);           // 전체 관광지 
    const [tours, setTours] = useState([]);                         // 검색 관광지
    const [searchKeyword, setSearchKeyword] = useState("");         // 키워드
    const [tourMakerSelect, setTourMakerSelect] = useState();       // 여행지 마커 of/off
    // const [tourMakerSelect2, setTourMakerSelect2] = useState();     // 여행지 마커 of/off
    const [tourSelect, setTourSelect] = useState([]);               // 해당 일정( EX. DAY 1)에 추가한 여행지
    const [dayList, setDayList] = useState();                       // 총 일정목록
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        if(pagingHook.current){
            console.log(page1 === 1 ? 1 : (page1 - 1) * itemsCount + "부터" + itemsCount + "까지");
            console.log("페이징 키워드 " + searchKeyword);
            setTourMakerSelect(Array(totalItemsCount1).fill(false));
        }else{
            pagingHook.current = true;
        }
    }, [page1]);

    // useEffect(() => {
    //     if(pagingHook.current){
    //         console.log(page2 === 1 ? 1 : (page2 - 1) * itemsCount + "부터" + itemsCount + "까지");
    //         console.log("페이징 키워드 " + searchKeyword);
    //         setTourMakerSelect(Array(totalItemsCount2).fill(false));
    //         // setTourMakerSelect2(Array(totalItemsCount2).fill(false));
    //     }else{
    //         pagingHook.current = true;
    //     }
    // }, [page2]);

    useEffect(() => { // 찜 목록 불러오는 event
        if(sessionStorage.getItem("dibs")){
            const dibs = sessionStorage.getItem("dibs").split(" ");
            dibs.pop(); // 쓰레기 값 제거
            tourData2(dibs).then(value => setCart(value));
        }else{
            console.log("찜한거 없음");
        }
    }, [])

    const tourData = () =>{    // 전체 검색 함수
        (async () => {
            const response = await fetch(
                `https://apis.data.go.kr/B551011/KorService/areaBasedSyncList?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&numOfRows=100000&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12`
            );
            console.log("전체 검색 함수 실행")
            const json = await response.json();
            const tourItems = json.response.body.items.item;
            setStotalItemCount1(tourItems.length);
            setStorageTours(tourItems);
            setTours(tourItems);
            setPage1(1);
            setTourMakerSelect(Array(tourItems.length).fill(false));
          })();
    }

    const tourData2 = async (idx) =>{    // 찜하기 함수
        console.log("찜하기 함수 실행")
        let Arr = [];
            for(let i=0; i<idx.length; i++){
                const response = await fetch(
                    `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${idx[i]}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=Y&overviewYN=N`
                );
                const json = await response.json();
                const tourItems = json.response.body.items.item[0];
                Arr[i] = tourItems;
            }
        setStotalItemCount2(Arr.length);
        setPage2(1);
        return Arr;
    }

    const handleOnKeyPress = (e) => {   // 검색 함수
        if (e.key === 'Enter') {
            setSearchKeyword(e.target.value);
            if(e.target.value !== ""){
                let Arr = [];
                storagetours.filter((el,idx) => {if(el.addr1.indexOf(e.target.value) !== -1){Arr = [...Arr,el]}});
                setTours(Arr);
                setStotalItemCount1(Arr.length);
                setPage1(1);
                setTourMakerSelect(Array(Arr.length).fill(false));
            }
        }
    };

    const moveMapLocation = (e,id) =>{
        const coor = e.target.value.split(',');
        const num = coor[2];
        const newCoor = {
            lat: coor[0], lon : coor[1]
        }
        const newArr = tourMakerSelect.fill(false);
        newArr[id] = true;
        setCoordinate(newCoor);
        setTourMakerSelect(newArr);
    }

    const addTour = (el, idx) =>{
        console.log("관광지 추가");
        dayList[idx-1][1] = [...dayList[idx-1][1], el];
        setDayList(dayList);
        setTourSelect([...tourSelect, el]);
    }

    const removeTour = (el, idx) =>{
        console.log("관광지 삭제");

        for(let i=0; i<dayList[idx-1][1].length; i++){
            console.log(el.contentid);
            console.log(dayList[idx-1][1][0].contentid);
            if(el.contentid === dayList[idx-1][1][i].contentid){
                console.log("삭제");
                dayList[idx-1][1] = dayList[idx-1][1].splice(i);
                setDayList(dayList);
            }
        }
    }
    
    const createPlan = () => {
        let count = 0;
        for(let i=0; i<dayList.length; i++){
            count += dayList[i][1].length; 
        }
        if(count < 1){
            alert("플랜생성 시 관광지 하나 이상을 추가하세요");
        }else{
            let planTitle = prompt('플랜명을 입력하세요', '');
            if(planTitle.length < 4){
                alert("플랜명은 최소 3글자 이상 입력하세요.");
            }else{
                let newArr = []
                for(let i=0; i<dayList.length; i++){
                    newArr[i] = {"day":i+1,"id":[]};
                    for(let j=0; j<dayList[i][1].length; j++){
                        newArr[i].id[j] = dayList[i][1][j].contentid;
                    }
                }
                const travelPlanner = {
                    "date" : `${moment(dateList[0]).format("YYYY-MM-DD")}-${moment(dateList[dateList.length -1]).format("YYYY-MM-DD")}`,
                    "email" : "User@email.com",
                    "title" : "ddd",
                    "plan" : newArr
                }
                console.log(JSON.stringify(travelPlanner));
            }
        }
    }

    return(
        <>
            <CreatePlanCalendar open={isModelOpen} setOpen={setIsModelOpen} setDateList={setDateList}/>
            <FilterSelector open={filterOpen} setOpen={setFilterOpen}/>
            {isModelOpen ? null : 
            <Styles.Wrapper>
                <Styles.PlanApplyBtn onClick={createPlan}>적용하기</Styles.PlanApplyBtn>
                <Styles.OpenBtn open={controlOpen} left onClick={() => {(setControlOpen(!controlOpen))}}>{controlOpen ? "<<" : ">>"}</Styles.OpenBtn>
                <Styles.ControlBox open={controlOpen}>
                    <Styles.ContentBox>
                        <Styles.CloseBtn right onClick={onClose} src="assets/x.png"/>
                        <Styles.DateBox>
                            <Styles.TravelDate>{`${moment(dateList[0]).format("YYYY-MM-DD")} ~ ${moment(dateList[dateList.length - 1]).format("YYYY-MM-DD")}`}</Styles.TravelDate>
                            <Styles.TravelCalendar onClick={() => window.location.reload()} src="assets/calendar.png"/>
                        </Styles.DateBox>
                        {dateList.map((el, idx) => {
                            return(
                                <div key={idx}>
                                    <Styles.ListItemBox key={idx}>
                                        <Styles.DayTitle>DAY {idx + 1}</Styles.DayTitle>
                                        {/* idx에 해당하는 dayList 뿌려야됨 */}
                                            {update === (idx + 1) ? dayList[idx][1].map((e, id) => {
                                                return(
                                                    <div key={id}>
                                                        <Styles.DayItem>
                                                            <Styles.DayItemImg src={e.firstimage2 === "" ? "assets/logo.png" : e.firstimage2}/>
                                                            <Styles.DayItemTextBox>
                                                                <Styles.DayItemTitle>{e.title}
                                                                <Styles.LocationImg open={tourMakerSelect[id]} value={[e.mapy, e.mapx, 0]} onClick={(e) => moveMapLocation(e,id)}/>   
                                                                </Styles.DayItemTitle>
                                                                <Styles.DayItemSubTextBox>
                                                                    <Styles.DayItemText>{e.addr1}</Styles.DayItemText>
                                                                    <Styles.ItemBtn remove onClick={() => removeTour(e, update)}>삭제</Styles.ItemBtn>
                                                                </Styles.DayItemSubTextBox>
                                                            </Styles.DayItemTextBox>
                                                        </Styles.DayItem>
                                                    </div>
                                                )
                                            }) : ""}

                                        <Styles.PlanAddBtnBox>
                                            <Styles.PlanAddBtn updated={update === idx + 1} onClick={() => onUpdate(idx + 1)}>{update === idx + 1 ? "취소" : "일정 수정"}</Styles.PlanAddBtn>
                                        </Styles.PlanAddBtnBox>
                                    </Styles.ListItemBox>
                                </div>
                            )
                        })}
                    </Styles.ContentBox>
                </Styles.ControlBox>
                <Styles.Map>
                    <Map lon = {coordinate.lon} lat = {coordinate.lat}/>
                </Styles.Map>
                <Styles.TravelBox open={travelOpen}>
                    <Styles.ContentBox>
                        <Styles.TravelInputBox>
                            <Styles.TravelInput placeholder="검색할 여행지를 입력해주세요." onKeyUp={handleOnKeyPress}/>
                            <Styles.TravelInputBtn>검색</Styles.TravelInputBtn>
                        </Styles.TravelInputBox>
                        <Styles.ListBox>
                            <Styles.ListTitleBox>
                                <Styles.ListTitle>전체 여행지</Styles.ListTitle>
                                <Styles.ListFilter onClick={() => setFilterOpen(true)}>필터</Styles.ListFilter>
                            </Styles.ListTitleBox>
                            <Styles.ScrollBox>
                                {tours === "" ? <Styles.DayItem><Styles.DayItemTitle>"{decodeURIComponent(searchKeyword)}" 에 대한 검색결과가 없습니다.</Styles.DayItemTitle></Styles.DayItem> 
                                :(tours.filter((e,index) => {
                                        if((index >= (page1-1)*itemsCount) && index < page1 * itemsCount)return e;
                                            }).map((tour,id) => {
                                                return(
                                                    <div key ={id}>
                                                        <Styles.DayItem>
                                                            <Styles.DayItemImg src={tour.firstimage2 === "" ? "assets/logo.png" : tour.firstimage2}/>
                                                                <Styles.DayItemTextBox>
                                                                <Styles.DayItemTitle>{tour.title}
                                                                    <Styles.LocationImg open={tourMakerSelect[id]} value={[tour.mapy, tour.mapx, 1]} onClick={(e) => moveMapLocation(e,id)}/>
                                                                </Styles.DayItemTitle>
                                                                <Styles.ItemBox>
                                                                    <Styles.DayItemText>{tour.addr1}</Styles.DayItemText>
                                                                    <Styles.ItemBtn onClick={() => addTour(tour, update)}>추가하기</Styles.ItemBtn>
                                                                </Styles.ItemBox>
                                                            </Styles.DayItemTextBox>
                                                        </Styles.DayItem>
                                                    </div>
                                                )
                                            }))
                                }
                            </Styles.ScrollBox>
                            {tours === "" ? "" : <Paging page={page1} count={totalItemsCount1} setPage={setPage1} itemsCount={itemsCount}/>}
                        </Styles.ListBox>
                        <Styles.ListBox>
                        <Styles.ListTitleBox>
                                <Styles.ListTitle>찜한 여행지</Styles.ListTitle>
                            </Styles.ListTitleBox>
                            <Styles.ScrollBox>
                                {cart.length === 0 ? <Styles.DayItem><Styles.DayItemTitle>찜한 목록이 없습니다.</Styles.DayItemTitle></Styles.DayItem>
                                :(cart.map((el, idx) => {
                                    return(
                                        <div key={idx}>
                                            <Styles.DayItem>
                                                <Styles.DayItemImg src={el.firstimage2 === "" ? "assets/logo.png" : el.firstimage2}/>
                                                    <Styles.DayItemTextBox>
                                                    <Styles.DayItemTitle>{el.title}
                                                        {/* <Styles.LocationImg open={tourMakerSelect[idx]} value={[el.mapy, el.mapx, 2]} onClick={(e) => moveMapLocation(e,idx)}/> */}
                                                    </Styles.DayItemTitle>
                                                    <Styles.ItemBox>
                                                        <Styles.DayItemText>{el.addr1}</Styles.DayItemText>
                                                        <Styles.ItemBtn onClick={() => addTour(el, update)}>추가하기</Styles.ItemBtn>
                                                        <Styles.ItemBtn remove>찜 삭제</Styles.ItemBtn>
                                                    </Styles.ItemBox>
                                                </Styles.DayItemTextBox>
                                            </Styles.DayItem>
                                        </div>
                                    )
                                }))} 
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