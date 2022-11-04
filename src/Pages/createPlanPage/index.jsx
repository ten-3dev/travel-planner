import moment from "moment/moment";
import React, { useState, useEffect, useRef } from "react";
import * as Styles from "./style";
import Map from "../../Components/kakaoMap";
import Paging from "../../Components/paging";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CreatePlanCalendar = ({ open, setOpen, setDateList }) => {
  // 팝업
  const [value, onChange] = useState(new Date());

  // 이전 버튼을 눌렀을 때
  const onBack = () => {
    window.history.back();
  };

  const getApply = () => {
    // 클릭을 안했을때 (당일로 여행을 가서 바로 적용을 눌렀을때)
    if (!Array.isArray(value)) {
      setDateList([value]);
      setOpen(false);
      return;
    }

    // 날짜 사이 일 수 구함
    const diffDate = value[0].getTime() - value[1].getTime();
    const dateN = Math.ceil(Math.abs(diffDate / (1000 * 60 * 60 * 24)));

    const dateArr = [value[0]];

    // 오늘보다 이전 날짜면 끝냄
    if (dateArr[0] < new Date().setHours(0, 0, 0, 0)) {
      // 시간을 0으로 초기화
      alert("현재 날짜 이후로 선택해주세요.");
      onChange(new Date());
      return;
    }

    // 반복문을 이용해 내일을 구하고 또 내일내일을 구하는 식으로 리스트를 만듦
    for (let i = 0; i < dateN - 1; i++) {
      const date = dateArr[dateArr.length - 1];
      const tomorrow = new Date(date);
      tomorrow.setDate(tomorrow.getDate() + 1);

      dateArr.push(tomorrow);
    }

    setDateList(dateArr);
    setOpen(false);
  };

  return (
    <Styles.ModalCustom isOpen={open} style={{ overlay: { zIndex: "1", backgroundColor: "white" } }} ariaHideApp={false}>
      <Styles.CalendarCustom onChange={onChange} value={value} selectRange />
      <Styles.BtnBox>
        <Styles.Btn onClick={onBack}>이전</Styles.Btn>
        <Styles.Btn onClick={() => getApply()}>적용하기</Styles.Btn>
      </Styles.BtnBox>
    </Styles.ModalCustom>
  );
};

const CreatePlanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isModelOpen, setIsModelOpen] = useState(true); //날짜 모달
  const [dateList, setDateList] = useState();

  //박스를 움직이게 하는 state
  const [controlOpen, setControlOpen] = useState(false); // Control
  const [travelOpen, settravelOpen] = useState(false); // Travel

  const [update, setUpdate] = useState(null);

  // 추천 여행지 페이지네이션
  const [page1, setPage1] = useState(1);
  const [itemsCount] = useState(6);
  const [totalItemsCount1, setStotalItemCount1] = useState(50); // 임시    //@@set추가

  // 찜한 여행지 페이지네이션
  const [page2, setPage2] = useState(1);
  const [itemsCount2] = useState(6);
  const [totalItemsCount2, setStotalItemCount2] = useState(50); // 임시

  // 페이지 이동 시 마커 삭제
  const pagingHook = useRef(false);

  // 마커 클릭 시 지도
  const [coordinate, setCoordinate] = useState([]); // 좌표
  const [tourMakerSelect0, setTourMakerSelect0] = useState(); // 추가한 관광지 지도 마커
  const [tourMakerSelect1, setTourMakerSelect1] = useState(); // 전체 관광지 지도 마커
  const [tourMakerSelect2, setTourMakerSelect2] = useState(); // 찜하기 관광지 지도 마커

  // 관광지
  const [searchKeyword, setSearchKeyword] = useState(""); // 키워드
  const [tourStorage, setTourStorage] = useState(); // 전체 관광지
  const [tours, setTours] = useState([]); // 키워드 검색 결과 관광지
  const [cart, setCart] = useState([]); // 찜
  const [tourSelect, setTourSelect] = useState([]); // 필요없는데 필요함..? 렌더링안됨
  const [dayList, setDayList] = useState(); // 총 일정목록

  const [isUpdate, setIsUpdate] = useState(false);
  const [rendering, setRendering] = useState(false); // 찜 로딩
  const [rendering2, setRendering2] = useState(false); // 전체 여행지 로딩

  useEffect(() => {
    // 새로고침 방지 alert
    tourData();
    window.onbeforeunload = function () {
      return true;
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  // 수정인지 생성인지 구분
  useEffect(() => {
    if (location.state) {
      setIsModelOpen(false);
      setIsUpdate(true);
      const date = location.state.updateData.date.split("~");
      const dateArr = [];
      let firstDate = new Date(date[0]);
      while (firstDate <= new Date(date[1])) {
        dateArr.push(new Date(firstDate));
        firstDate.setDate(firstDate.getDate() + 1);
      }
      setDateList(dateArr);
    }
  }, []);

  useEffect(() => {
    // 찜 목록 불러오는 event
    if (sessionStorage.getItem("dibs")) {
      const dibs = sessionStorage.getItem("dibs").split(" ");
      dibs.pop(); // 쓰레기 값 제거
      tourData2(dibs).then((value) => setCart(value));
    } else {
      setRendering(true);
    }
  }, []);

  useEffect(() => {
    if (dateList !== undefined) {
      let arr = [];
      for (let i = 0; i < dateList.length; i++) {
        arr[i] = [i + 1, []];
      }
      setDayList(arr);
    }
  }, [dateList]);

  useEffect(() => {
    if (pagingHook.current) {
      console.log(page1 === 1 ? 1 : (page1 - 1) * itemsCount + "부터" + itemsCount + "까지");
      console.log("페이징 키워드 " + searchKeyword);
      setTourMakerSelect1(Array(totalItemsCount1).fill(false));
    } else {
      pagingHook.current = true;
    }
  }, [page1]);

  useEffect(() => {
    if (pagingHook.current) {
      console.log(page2 === 1 ? 1 : (page2 - 1) * itemsCount2 + "부터" + itemsCount2 + "까지");
      setTourMakerSelect2(Array(totalItemsCount2).fill(false));
    } else {
      pagingHook.current = true;
    }
  }, [page2]);

  useEffect(() => {
    if (pagingHook.current) {
      setTourMakerSelect1(Array(totalItemsCount1).fill(false));
      setTourMakerSelect2(Array(totalItemsCount2).fill(false));
    } else {
      pagingHook.current = true;
    }
  }, [page2]);

  useEffect(() => {
    console.log(page1 === 1 ? 1 : (page1 - 1) * itemsCount + "부터");
    console.log(itemsCount + "까지");
  }, [page1, itemsCount]);

  useEffect(() => {
    console.log(page2 === 1 ? 1 : (page2 - 1) * itemsCount2 + "부터");
    console.log(itemsCount + "까지");
  }, [page2, itemsCount2]);

  useEffect(() => {
    if (dayList && location.state) {
      onUpdateSetDate();
    }
  }, [dayList]);

  const onUpdateSetDate = () => {
    const plans = JSON.parse(location.state.updateData.plan);
    for (let i = 0; i < plans.length; i++) {
      for (let j = 0; j < plans[i].list.length; j++) {
        addTour(plans[i].list[j], plans[i].day);
      }
    }
  };

  const postPlanData = async (el) => {
    // 플랜
    try {
      if (isUpdate) {
        await axios.put("http://localhost:8080/updatePlan", { ...el, id: `${location.state.updateData.id}` });
      } else {
        await axios.post("http://localhost:8080/createPlan", el);
      }
      navigate("/");
    } catch (e) {
      alert(e.response.data.msg);
      navigate("/");
    }
  };

  const onUpdate = (idx) => {
    if (update == null) {
      setUpdate(idx);
      settravelOpen(true);
    } else if ((update !== null) & (update !== idx)) {
      alert("현재 수정하고 있는 DAY가 있습니다.");
    } else {
      setTourSelect([]);
      setUpdate(null);
      settravelOpen(false);
      setTourMakerSelect0(Array(dayList[idx - 1][1].length).fill(false)); // 취소 클릭 시 마커 초기화
    }
  };

  const onClose = () => {
    if (update !== null) {
      return alert("아직 작업중인 DAY가 있습니다.");
    }
    setControlOpen(!controlOpen);
  };

  const tourData = async () => {
    // 전체 검색 함수
    setRendering2(false);
    (async () => {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService/areaBasedSyncList?serviceKey=${process.env.VITE_TOUR_API_KEY}&numOfRows=30000&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12`
      );
      console.log("전체 검색 함수 실행");
      const json = await response.json();
      const tourItems = json.response.body.items.item;
      setStotalItemCount1(tourItems.length);
      setTours(tourItems);
      setTourStorage(tourItems);
      setPage1(1);
      setTourMakerSelect1(Array(tourItems.length).fill(false));
      setRendering2(true);
    })();
  };

  const tourData2 = async (idx) => {
    // 찜하기 함수
    setRendering(false);
    console.log("찜하기 함수 실행");
    let Arr = [];
    for (let i = 0; i < idx.length; i++) {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.VITE_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${idx[i]}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=Y&overviewYN=N`
      );
      const json = await response.json();
      const tourItems = json.response.body.items.item[0];
      Arr[i] = tourItems;
      setStotalItemCount2(Arr.length);
      setPage2(1);
      setTourMakerSelect2(Array(Arr.length).fill(false));
    }
    setRendering(true);
    return Arr;
  };

  const deleteDibs = (el) => {
    // 찜 삭제
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].contentid === el.contentid) {
        cart.splice(i, 1);
        setCart(cart);
        setTourSelect([...tourSelect]); // 렌더링 요정
        const dibs = sessionStorage.getItem("dibs");
        sessionStorage.setItem("dibs", dibs.replace(el.contentid + " ", ""));
        setStotalItemCount2(totalItemsCount2 - 1);
      }
    }
    if(!Math.ceil(cart.length / itemsCount2) - 1 === page2){
      setPage2(Math.ceil(cart.length / itemsCount2));
    }
  };

  const handleOnKeyPress = (e) => {
    // 검색 함수
    if (e.key === "Enter") {
      setSearchKeyword(e.target.value);
      if (e.target.value !== "") {
        let Arr = [];
        tourStorage.filter((el, idx) => {
          if (el.addr1.indexOf(e.target.value) !== -1) {
            Arr = [...Arr, el];
          }
        });
        setTours(Arr);
        setStotalItemCount1(Arr.length);
        setTourMakerSelect1(Array(Arr.length).fill(false));
      } else {
        setTours(tourStorage);
        setStotalItemCount1(tourStorage.length);
        setTourMakerSelect1(Array(tourStorage.length).fill(false));
      }
      setPage1(1);
    }
  };

  const handleBlur = (e) => {
    // input창 벗어 날 시 렌더링
    setSearchKeyword(e.target.value);
  };

  const onSubmit = () => {
    // 검색 클릭 함수
    console.log(searchKeyword);
    if (searchKeyword !== "") {
      let Arr = [];
      tourStorage.filter((el, idx) => {
        if (el.addr1.indexOf(searchKeyword) !== -1) {
          Arr = [...Arr, el];
        }
      });
      setTours(Arr);
      setStotalItemCount1(Arr.length);
      setPage1(1);
      setTourMakerSelect1(Array(Arr.length).fill(false));
    }
  };

  const moveMapLocation = (e, id) => {
    // 마커 클릭 함수
    console.log(e);
    const coor = e.target.value.split(",");
    const newCoor = { lat: coor[0], lon: coor[1] };
    const num = coor[2];
    if (num == 0) {
      const newArr = tourMakerSelect1.fill(false);
      newArr[id] = true;
      setTourMakerSelect1(Array(tourMakerSelect1.length).fill(false));
      setTourMakerSelect2(Array(tourMakerSelect1.length).fill(false));
      setTourMakerSelect0(newArr);
    } else if (num == 1) {
      const newArr = tourMakerSelect1.fill(false);
      newArr[id] = true;
      setTourMakerSelect0(Array(tourMakerSelect1.length).fill(false));
      setTourMakerSelect2(Array(tourMakerSelect1.length).fill(false));
      setTourMakerSelect1(newArr);
    } else {
      const newArr = tourMakerSelect2.fill(false);
      newArr[id] = true;
      setTourMakerSelect0(Array(tourMakerSelect2.length).fill(false));
      setTourMakerSelect1(Array(tourMakerSelect2.length).fill(false));
      setTourMakerSelect2(newArr);
    }
    setCoordinate(newCoor);
  };

  const addTour = (el, idx) => {
    // 관광지 추가 함수
    console.log("관광지 추가");
    console.log(dayList);
    dayList[idx - 1][1] = [...dayList[idx - 1][1], el];
    setDayList(dayList);
    setTourMakerSelect0(Array(dayList[idx - 1][1].length).fill(false));
    setTourSelect([...tourSelect, el]);
  };

  const removeTour = (idx, idx2) => {
    // 추가한 관광지 삭제 함수
    console.log("관광지 삭제");
    for (let i = 0; i < dayList[idx2 - 1][1].length; i++) {
      if (idx === i) {
        dayList[idx2 - 1][1].splice(i, 1);
        setDayList(dayList);
        setTourSelect([...tourSelect]); // 추가하면 렌더링됨 어째서?
      }
    }
  };

  const checkTitle = () => {
    // 플랜 확인
    console.log("체크타이틀 실시");
    let count = 0;

    for (let i = 0; i < dayList.length; i++) {
      count += dayList[i][1].length;
    }

    if (count < 1) {
      return alert("플랜생성 시 관광지 하나 이상을 추가하세요");
    } else {
      let planTitle = prompt("플랜명을 입력하세요", "");
      if (planTitle === null) {
        return;
      }
      if (planTitle.length === 0 || planTitle.length < 4 || planTitle.length > 15) {
        return alert("플랜명은 최소 4글자에서 최대 15글자 입니다.");
      } else {
        createPlan(planTitle);
      }
    }
  };

  const createPlan = async (el) => {
    console.log("플랜생성 실행");

    let newArr = [];
    for (let i = 0; i < dayList.length; i++) {
      newArr[i] = { day: i + 1, list: [] };
      for (let j = 0; j < dayList[i][1].length; j++) {
        newArr[i].list[j] = {
          addr1: dayList[i][1][j].addr1,
          addr2: dayList[i][1][j].addr2,
          contentid: dayList[i][1][j].contentid,
          firstimage: dayList[i][1][j].firstimage,
          firstimage2: dayList[i][1][j].firstimage2,
          mapx: dayList[i][1][j].mapx,
          mapy: dayList[i][1][j].mapy,
          tel: dayList[i][1][j].tel,
          title: dayList[i][1][j].title,
          zipcode: dayList[i][1][j].zipcode,
        };
      }
    }
    const travelPlanner = {
      email: "",
      title: el,
      plan: JSON.stringify(newArr),
      type: 0,
      date: `${moment(dateList[0]).format("YYYY-MM-DD")}~${moment(dateList[dateList.length - 1]).format("YYYY-MM-DD")}`,
    };
    postPlanData(travelPlanner);
  };

  return (
    <>
      {!isUpdate && <CreatePlanCalendar open={isModelOpen} setOpen={setIsModelOpen} setDateList={setDateList} />}
      {isModelOpen ? null : (
        <Styles.Wrapper>
          <Styles.PlanApplyBtn onClick={checkTitle}>적용하기</Styles.PlanApplyBtn>
          <Styles.OpenBtn
            open={controlOpen}
            left
            onClick={() => {
              setControlOpen(!controlOpen);
            }}>
            {controlOpen ? "<<" : ">>"}
          </Styles.OpenBtn>
          <Styles.ControlBox open={controlOpen}>
            <Styles.ContentBox>
              <Styles.CloseBtn right onClick={onClose} src="assets/x.png" />
              <Styles.DateBox>
                <Styles.TravelDate>{`${moment(dateList[0]).format("YYYY-MM-DD")} ~ ${moment(dateList[dateList.length - 1]).format(
                  "YYYY-MM-DD"
                )}`}</Styles.TravelDate>
                {!isUpdate && <Styles.TravelCalendar onClick={() => window.location.reload()} src="assets/calendar.png" />}
              </Styles.DateBox>
              {dateList.map((el, idx) => {
                return (
                  <div key={idx}>
                    <Styles.ListItemBox key={idx}>
                      <Styles.DayTitle>DAY {idx + 1}</Styles.DayTitle>
                      {update === idx + 1
                        ? dayList[idx][1].map((e, id) => {
                            return (
                              <div key={id}>
                                <Styles.DayItem>
                                  <Styles.DayItemImg
                                    src={e.firstimage2 === "" ? "assets/logo.png" : e.firstimage2}
                                    onClick={() => window.open(`http://localhost:3000/information?id=${e.contentid}`)}
                                  />
                                  <Styles.DayItemTextBox notcolumn={true}>
                                    <Styles.DayItemTextBox>
                                      <Styles.DayItemTitle onClick={() => window.open(`http://localhost:3000/information?id=${e.contentid}`)}>
                                        {e.title}
                                      </Styles.DayItemTitle>
                                      <Styles.LocationImg open={tourMakerSelect0[id]} value={[e.mapy, e.mapx, 0]} onClick={(e) => moveMapLocation(e, id)} />
                                    </Styles.DayItemTextBox>
                                    <Styles.DayItemSubTextBox>
                                      <Styles.DayItemText>{e.addr1.split(" ")[0] + e.addr1.split(" ")[1]}</Styles.DayItemText>
                                      <Styles.ItemBtn remove onClick={() => removeTour(id, update)}>
                                        삭제
                                      </Styles.ItemBtn>
                                    </Styles.DayItemSubTextBox>
                                  </Styles.DayItemTextBox>
                                </Styles.DayItem>
                              </div>
                            );
                          })
                        : ""}
                      <Styles.PlanAddBtnBox>
                        <Styles.PlanAddBtn
                          updated={update === idx + 1 ? (dayList[idx][1].length !== 0 ? false : true) : false}
                          onClick={() => onUpdate(idx + 1)}>
                          {update === idx + 1 ? (dayList[idx][1].length === 0 ? "취소" : "완료") : "일정 수정"}
                        </Styles.PlanAddBtn>
                      </Styles.PlanAddBtnBox>
                    </Styles.ListItemBox>
                  </div>
                );
              })}
            </Styles.ContentBox>
          </Styles.ControlBox>
          <Styles.Map>
            <Map lon={coordinate.lon} lat={coordinate.lat} />
          </Styles.Map>
          <Styles.TravelBox open={travelOpen}>
            <Styles.ContentBox>
              <Styles.TravelInputBox>
                <Styles.TravelInput placeholder="검색할 여행지를 입력해주세요." onBlur={(e) => handleBlur(e)} onKeyUp={handleOnKeyPress} />
                <Styles.TravelInputBtn onClick={onSubmit}>검색</Styles.TravelInputBtn>
              </Styles.TravelInputBox>
              <Styles.ListBox>
                <Styles.ListTitleBox>
                  <Styles.ListTitle>전체 여행지</Styles.ListTitle>
                </Styles.ListTitleBox>
                <Styles.ScrollBox>
                  {!rendering2 ? (
                    <Styles.DayItemTextBox>
                      <Styles.DayItemTitle>로딩 중...</Styles.DayItemTitle>
                    </Styles.DayItemTextBox>
                  ) : tours.length === 0 ? (
                    <Styles.DayItem>
                      <Styles.DayItemTitle>"{decodeURIComponent(searchKeyword)}" 에 대한 검색결과가 없습니다.</Styles.DayItemTitle>
                    </Styles.DayItem>
                  ) : (
                    tours
                      .filter((e, index) => {
                        if (index >= (page1 - 1) * itemsCount && index < page1 * itemsCount) return e;
                      })
                      .map((tour, id) => {
                        return (
                          <div key={id}>
                            <Styles.DayItem>
                              <Styles.DayItemImg
                                src={tour.firstimage2 === "" ? "assets/logo.png" : tour.firstimage2}
                                onClick={() => window.open(`http://localhost:3000/information?id=${tour.contentid}`)}
                              />
                              <Styles.DayItemTextBox notcolumn={true}>
                                <Styles.DayItemTextBox>
                                  <Styles.DayItemTitle onClick={() => window.open(`http://localhost:3000/information?id=${tour.contentid}`)}>
                                    {tour.title}
                                  </Styles.DayItemTitle>
                                  <Styles.LocationImg open={tourMakerSelect1[id]} value={[tour.mapy, tour.mapx, 1]} onClick={(e) => moveMapLocation(e, id)} />
                                </Styles.DayItemTextBox>
                                <Styles.ItemBox>
                                  <Styles.DayItemText>{tour.addr1}</Styles.DayItemText>
                                  <Styles.ItemBtn onClick={() => addTour(tour, update)}>추가하기</Styles.ItemBtn>
                                </Styles.ItemBox>
                              </Styles.DayItemTextBox>
                            </Styles.DayItem>
                          </div>
                        );
                      })
                  )}
                </Styles.ScrollBox>
                {tours === "" ? "" : <Paging page={page1} count={totalItemsCount1} setPage={setPage1} itemsCount={itemsCount} />}
              </Styles.ListBox>
              <Styles.ListBox>
                <Styles.ListTitleBox>
                  <Styles.ListTitle>찜한 여행지</Styles.ListTitle>
                </Styles.ListTitleBox>
                <Styles.ScrollBox>
                  {!rendering ? (
                    <Styles.DayItemTextBox>
                      <Styles.DayItemTitle>로딩 중...</Styles.DayItemTitle>
                    </Styles.DayItemTextBox>
                  ) : cart.length === 0 ? (
                    <Styles.DayItem>
                      <Styles.DayItemTitle>찜한 목록이 없습니다.</Styles.DayItemTitle>
                    </Styles.DayItem>
                  ) : (
                    cart
                      .filter((e, index) => {
                        if (index >= (page2 - 1) * itemsCount2 && index < page2 * itemsCount2) return e;
                      })
                      .map((el, idx) => {
                        return (
                          <div key={idx}>
                            <Styles.DayItem>
                              <Styles.DayItemImg
                                src={el.firstimage2 === "" ? "assets/logo.png" : el.firstimage2}
                                onClick={() => window.open(`http://localhost:3000/information?id=${el.contentid}`)}
                              />
                              <Styles.DayItemTextBox notcolumn={true}>
                                <Styles.DayItemTextBox>
                                  <Styles.DayItemTitle onClick={() => window.open(`http://localhost:3000/information?id=${el.contentid}`)}>
                                    {el.title}
                                  </Styles.DayItemTitle>
                                  <Styles.LocationImg open={tourMakerSelect2[idx]} value={[el.mapy, el.mapx, 2]} onClick={(e) => moveMapLocation(e, idx)} />
                                </Styles.DayItemTextBox>
                                <Styles.ItemBox>
                                  <Styles.DayItemText>{el.addr1}</Styles.DayItemText>
                                  <Styles.ItemBtn onClick={() => addTour(el, update)}>추가하기</Styles.ItemBtn>
                                  <Styles.ItemBtn remove onClick={() => deleteDibs(el)}>
                                    찜 삭제
                                  </Styles.ItemBtn>
                                </Styles.ItemBox>
                              </Styles.DayItemTextBox>
                            </Styles.DayItem>
                          </div>
                        );
                      })
                  )}
                </Styles.ScrollBox>
                {cart.length === 0 ? null : <Paging page={page2} count={totalItemsCount2} setPage={setPage2} itemsCount={itemsCount2} />}
              </Styles.ListBox>
            </Styles.ContentBox>
          </Styles.TravelBox>
        </Styles.Wrapper>
      )}
    </>
  );
};

export default CreatePlanPage;
