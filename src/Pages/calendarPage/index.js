import React, { useState, useEffect } from "react"; 
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Map from "../../Components/kakaoMap";
import Comment from "../../Components/Comment";

const daysList =[   // 대충 시험용 데이터
    {key: '1', image: 'assets/image32.png', title:'서울 강남', content: '여긴 강남', coordinate:[37.497944, 127.027618]},
    {key: '2', image: 'assets/image35.png', title:'대구 동성로', content: '여긴 동성로', coordinate:[37.498944, 127.027618]},
    {key: '3', image: 'assets/heart.png', title:'부산 해운대', content: '여긴 해운대', coordinate:[35.1584, 129.16]},
    {key: '4', image: 'assets/image32.png', title:'영진직업전문학교', content: '쿠쿠', coordinate:[35.87572504970846, 128.68151215551117]},
    {key: '5', image: 'assets/github.png', title:'대구 동성로', content: '여긴 동성로', coordinate:[ 35.865467 ,128.593369]},
    {key: '6', image: 'assets/myProfile.png', title:'부산 해운대', content: '여긴 해운대 부산', coordinate:[35.1884, 129.166957]},
]

const CalendarPage = () =>{
    const [days] = useState(daysList);
    const [coordinate, setCoordinate] = useState([]);
    const [controlOpen, setControlOpen] = useState(false);  // 공개/비공개 on/off
    const [mapMarker, setMapMarker] = useState(false); // 지도 of/off

    const moveMapLocation = (e) =>{
        const coor = e.target.value.split(',');
        const newCoor = {
            lat: coor[0], lon : coor[1]
        }
        setCoordinate(newCoor);
        setMapMarker(!mapMarker);
    }


    
    //페이징
    const [page, setPage] = useState(1);
    const [itemsCount] = useState(6);
    const [totalItemsCount] = useState(50); // 임시

    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page, itemsCount]);

    return(
        <>
        <Styles.ImageBox>
            <Styles.Image src="assets/image32.png"/>
            <Styles.IntroTitle>
                <Styles.IntroText>즐거운(?) 코딩 여행</Styles.IntroText>
                <Styles.IntroDate>2022-10-22 - 2022-10-23</Styles.IntroDate>
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
                                    <Styles.DayList>
                                        <Styles.Day>Day1</Styles.Day>
                                        <Styles.PlanInfoList>
                                            {days.map( (day,id) =>{
                                                return(
                                                    <div key={id}>             
                                                        <Styles.PlaceInfo>
                                                        <Styles.PlanImage src= {day.image}/>
                                                        <Styles.Text>
                                                            <Styles.PlaceTitle>
                                                                {day.title}
                                                            </Styles.PlaceTitle>
                                                            <Styles.Content>
                                                                {day.content}
                                                            </Styles.Content> 
                                                        </Styles.Text>
                                                        <Styles.MapBtnBox open={mapMarker} value={day.coordinate} onClick={moveMapLocation}/>
                                                        </Styles.PlaceInfo>
                                                    </div>
                                                )
                                            })}
                                        </Styles.PlanInfoList>
                                    </Styles.DayList>
                                    <Styles.DayList>
                                        <Styles.Day>Day2</Styles.Day>
                                        <Styles.PlanInfoList>
                                            <Styles.PlaceInfo>
                                                <Styles.PlanImage src= "assets/image32.png"/>
                                                <Styles.Text>
                                                    <Styles.PlaceTitle>
                                                        여기는 여행장소 제목
                                                    </Styles.PlaceTitle>
                                                    <Styles.Content>
                                                        만남은 쉽고 이별은 어려워
                                                        눈빛에 베일 듯 우린 날카로워
                                                        마침표를 찍고 난 조금 더 멀리 가려 해
                                                        만남은 쉽고 이별은 참 어려워 
                                                    </Styles.Content> 
                                                </Styles.Text>
                                                <Styles.MapBtnBox/>
                                            </Styles.PlaceInfo>
                                        </Styles.PlanInfoList>
                                    </Styles.DayList>
                                    <Styles.DayList>
                                        <Styles.Day>Day3</Styles.Day>
                                        <Styles.PlanInfoList>
                                            <Styles.PlaceInfo>
                                                <Styles.PlanImage src= "assets/image32.png"/>
                                                <Styles.Text>
                                                    <Styles.PlaceTitle>
                                                        여기는 여행장소 제목
                                                    </Styles.PlaceTitle>
                                                    <Styles.Content>
                                                        만남은 쉽고 이별은 어려워
                                                        눈빛에 베일 듯 우린 날카로워
                                                        마침표를 찍고 난 조금 더 멀리 가려 해
                                                        만남은 쉽고 이별은 참 어려워 
                                                    </Styles.Content> 
                                                </Styles.Text>
                                                <Styles.MapBtnBox/>
                                            </Styles.PlaceInfo>
                                        </Styles.PlanInfoList>
                                    </Styles.DayList>
                                </Styles.PlanInfoList>
                                <Styles.MapBox>
                                    <Map lat = {coordinate.lat} lon = {coordinate.lon}/>
                                </Styles.MapBox>
                            </Styles.Box>
                        </Styles.Menu>
                        <Comment/>
                    </Styles.ContentBox>
                </Styles.Wrapper>
            </MarginTopWrapper>
        </>
    )
}

export default CalendarPage;