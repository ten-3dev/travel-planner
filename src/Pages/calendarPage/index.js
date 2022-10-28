import React, { useState, useEffect } from "react"; 
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Map from "../../Components/kakaoMap";
import Comment from "../../Components/Comment";
import { useNavigate, useLocation } from "react-router-dom";

const CalendarPage = () =>{
    const navigate = useNavigate();
    const [dateList, setDateList ] = useState();
    const [dayList, setDayList] = useState();
    const [coordinate, setCoordinate] = useState([]);
    const [controlOpen, setControlOpen] = useState(false);  // 공개/비공개 on/off
    const [mapMarker, setMapMarker] = useState(false); // 지도 of/off

    const data = useLocation(); //mainPage 받아온 키워드 값
    const {state} = data;

    //페이징
    const [page, setPage] = useState(1);
    const [itemsCount] = useState(6);
    const [totalItemsCount] = useState(50); // 임시
    const [tourMakerSelect0, setTourMakerSelect0] = useState();   
    useEffect(() => {
        const toursData = state[0][1];
        state === undefined ? navigate('/myPlan') : setDateList(toursData);
        let count = 0;
        for(let i=0; i<JSON.parse(toursData.plan).length; i++){
            count += JSON.parse(toursData.plan)[i].list.length;
        }
        setMapMarker(Array(count).fill(false));
    },[])

    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page, itemsCount]);

    const moveMapLocation = (e, id) =>{
        const coor = e.target.value.split(',');
        const newCoor = {
            lat: coor[0], lon : coor[1]
        }
        const newArr = mapMarker.fill(false);
        newArr[id] = true;
        setCoordinate(newCoor);
        setMapMarker(newArr);
    }

    return(
        <>
            {dateList === undefined ? "" : 
            <>
                <Styles.ImageBox>
                    <Styles.Image src="assets/image32.png"/>
                    <Styles.IntroTitle>
                        <Styles.IntroText>{dateList.title}</Styles.IntroText>
                        <Styles.IntroDate>{dateList.date.split("~")[0]+" - " + dateList.date.split("~")[1]}</Styles.IntroDate>
                    </Styles.IntroTitle>
                    <Styles.ShareBtn  open={controlOpen} onClick={() => {setControlOpen(!controlOpen)}}></Styles.ShareBtn>
                </Styles.ImageBox>
                <MarginTopWrapper>
                    <Styles.Wrapper>
                        <Styles.ContentBox>
                            <Styles.Menu>
                                <Styles.Title>상세 정보</Styles.Title>
                                <Styles.Box>
                                    <Styles.PlanInfoList>
                                        {JSON.parse(dateList.plan).map((el, idx) => {
                                                return(
                                                    <div key={idx}>
                                                        {console.log("day   "  + idx)}
                                                            <Styles.DayList>
                                                                <Styles.Day>{"Day" + el.day}</Styles.Day>
                                                                <Styles.PlanInfoList>
                                                                    {el.list.map( (day,id) =>{
                                                                        return(
                                                                            <div key={id}>
                                                                                {console.log("id  " +  id)}             
                                                                                <Styles.PlaceInfo>
                                                                                <Styles.PlanImage src= {day?.firstimage2 === "" ? "assets/logo.png" : day?.firstimage2}/>
                                                                                <Styles.Text>
                                                                                    <Styles.PlaceTitle>
                                                                                        {day.title}
                                                                                    </Styles.PlaceTitle>
                                                                                    <Styles.Content>
                                                                                        {day.addr1}
                                                                                    </Styles.Content> 
                                                                                </Styles.Text>
                                                                                <Styles.MapBtnBox open={mapMarker[id]} value={[day.mapy, day.mapx]} onClick={(e) => moveMapLocation(e,id)}/>
                                                                                </Styles.PlaceInfo>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </Styles.PlanInfoList>
                                                            </Styles.DayList>
                                                    </div>
                                                )
                                            })}
                                    </Styles.PlanInfoList>
                                    <Styles.MapBox>
                                        <Map lon = {coordinate.lon} lat = {coordinate.lat}/>
                                    </Styles.MapBox>
                                </Styles.Box>
                            </Styles.Menu>
                            <Comment/>
                        </Styles.ContentBox>
                    </Styles.Wrapper>
                </MarginTopWrapper>
            </>
            }
        </>
    )
}
export default CalendarPage;