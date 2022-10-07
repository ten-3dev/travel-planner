import React, { useState, useRef } from "react"; //eslint-disable-line no-unused-vars
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Map from "../../Components/kakaoMap";

const daysList =[   // 대충 시험용 데이터
    {key: '1', image: 'assets/image32.png', title:'서울 강남', content: '여긴 강남', coordinate:[37.497944, 127.027618]},
    {key: '21', image: 'assets/image35.png', title:'대구 동성로', content: '여긴 동성로', coordinate:[37.498944, 127.027618]},
    {key: '34', image: 'assets/hrr.png', title:'부산 해운대', content: '여긴 해운대', coordinate:[35.1584, 129.16]},
    {key: '42', image: 'assets/image32.png', title:'영진직업전문학교', content: '쿠쿠', coordinate:[35.87572504970846, 128.68151215551117]},
    {key: '55', image: 'assets/github.png', title:'대구 동성로', content: '여긴 동성로', coordinate:[ 35.865467 ,128.593369]},
    {key: '6', image: 'assets/myProfile.png', title:'부산 해운대', content: '여긴 해운대 부산', coordinate:[35.1884, 129.166957]},
]

const CalendarPage = () =>{
    const [days, setDays] = useState(daysList); //eslint-disable-line no-unused-vars

    const [coordinate, setCoordinate] = useState([]);

    const moveMapLocation = (e) =>{ //클릭시 버튼배경 회색으로 해보기@
        const coor = e.target.value.split(',');
        const newCoor = {
            lat: coor[0], lon : coor[1]
        }
        setCoordinate(newCoor);
    }
    

    return(
        <>
        <Styles.ImageBox>
            <Styles.Image src="assets/image32.png"/>
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
                                                        <Styles.MapBtnBox value={day.coordinate} onClick={moveMapLocation}/>
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
                        <Styles.ShareBtn/>
                        <Styles.Comment>
                            <Styles.Title>톡톡</Styles.Title>
                            <Styles.CommentBox>
                                <Styles.Review>
                                    <Styles.ReImage/>
                                    <Styles.ReContent/>
                                    <Styles.ReDate/>
                                </Styles.Review>
                                <Styles.InputBox>
                                    <Styles.InputText/>
                                    <Styles.Profile/>
                                    <Styles.Input/>
                                    <Styles.InputBtn/>
                              </Styles.InputBox>
                            </Styles.CommentBox>
                        </Styles.Comment>
                    </Styles.ContentBox>
                </Styles.Wrapper>
            </MarginTopWrapper>
        </>
    )
}

export default CalendarPage;