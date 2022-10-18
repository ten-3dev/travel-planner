import React, { useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";
import LikeButton from "../../Components/LikeButton/LikeButton2";
import { useLocation } from "react-router-dom";

const TravelPage = (props) => {
    const [page, setPage] = useState(1);
    const [itemsCount] = useState(6);
    const [totalItemsCount] = useState(50); // 임시
    const [tours, setTours] = useState([]);

    const data = useLocation();

    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");

        const { state }= data;
        if(state !== null){
            tourData(state);
        }
    }, [page, itemsCount]);

    // 관광타입(contentTypeId) 코드표.
    // 관광지 12
    // 문화시설 14
    // 행사/공연/축제 15
    // 여행코스 25
    // 레포츠 28
    // 숙박 32
    // 쇼핑 38
    // 음식점 39

    const tourData = (props) =>{
        (async () => {
            const response = await fetch(
              `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=${`foMVynPSBOYhWmlC8s%2BKfpDr%2BvSx28OYvMbw0XupmbJLmOJG88qv9BJM2%2BrP8FOceqJSmGi969LghG0WhbxxyA%3D%3D`}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12&listYN=Y&arrange=C&keyword=${props}`
            );
            const json = await response.json();
            const tourItems = json.response.body.items.item;
            setTours(tourItems.filter((e) => {return e.firstimage !== ""}));
          })();
          
    }

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            tourData(encodeURIComponent(e.target.value));
        }
    };
    
    return (
        <MarginTopWrapper margin>
            <Styles.InputBox>
                <Styles.Input placeholder="검색하세요." onKeyPress={handleOnKeyPress}/>
            </Styles.InputBox>
            <Styles.ListSumBox>총 69건</Styles.ListSumBox>
            <Styles.ContentBox>
                <Styles.TravelListBox>
                {tours.map( (tour,id) =>{
                     return(
                        <div key={id}>
                            <Styles.TravelWrapper>
                                <Styles.Image src={tour.firstimage2}/>
                                <Styles.Txt>
                                    <Styles.PlaceTitle>
                                        {tour.title}
                                    </Styles.PlaceTitle>
                                    <Styles.Address>
                                        {tour.addr1}
                                    </Styles.Address>
                                    <Styles.Address>
                                        {tour.tel}
                                    </Styles.Address>
                                </Styles.Txt>
                                <Styles.LikeBox>
                                    <LikeButton/>
                                    <Styles.Like>+찜하기</Styles.Like>
                                </Styles.LikeBox>
                            </Styles.TravelWrapper>
                        </div>
                    )
                })}
                </Styles.TravelListBox>
                <Styles.TravelFilterBox>
                <Styles.FilterBoxSticky>
                    <Styles.Text>필터</Styles.Text>
                    <Styles.TravelFilterTag>
                        <Styles.TravelFilterTagBox>
                            <Styles.GridTagBoxItem/>
                        </Styles.TravelFilterTagBox>
                    </Styles.TravelFilterTag>
                    <Styles.SteamListButtonImg src={"assets/SteamListButton.png"}/>
                </Styles.FilterBoxSticky>
                </Styles.TravelFilterBox>
            </Styles.ContentBox>
            <Styles.SteamListButtonBox>
            </Styles.SteamListButtonBox>
            <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
        </MarginTopWrapper>
      );
}
export default TravelPage;