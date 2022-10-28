import React, { useState, useEffect } from "react"; 
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Map from "../../Components/kakaoMap";
import Comment from "../../Components/Comment";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CalendarPage = () =>{
    const navigate = useNavigate();
    const [dateList, setDateList ] = useState();
    const [coordinate, setCoordinate] = useState([]);
    const [mapMarker, setMapMarker] = useState(false); // 지도 of/off

    useEffect(() => {
        if(location.search === ""){
            alert("url이 잘못되었습니다.");
            history.back();
        }else{
            getUserPlanById(location.search.split("=")[1]);
        }
    },[])

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

    const getUserPlanById = async (id) => { // DB에 있는 플랜데이터 
        const data = await axios.get(`http://localhost:8080/getUserPlanById/${id}`);
        setDateList(data.data.data);
        let count = 0;
        for(let i=0; i<JSON.parse(data.data.data.plan).length; i++){
            count += JSON.parse(data.data.data.plan)[i].list.length;
        }
        setMapMarker(Array(count).fill(false));
      }
      
      const infoMove = (e) => {
        navigate(`/information?id=${e}`);
      }

    const onShareBtn = async () => {
        try{
            await axios.put('http://localhost:8080/updateSharePlan', {id: location.search.split("=")[1]})
            getUserPlanById(location.search.split("=")[1]);
        }catch(e){
            alert("공유 버튼 에러");
            console.log(e);
        }
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
                    <Styles.ShareBtn  open={dateList.type} onClick={onShareBtn}></Styles.ShareBtn>
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
                                                                                    <Styles.PlaceTitle onClick={() => {infoMove(day.contentid)}}>{day.title}</Styles.PlaceTitle>
                                                                                    <Styles.Content>{day.addr1} </Styles.Content> 
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