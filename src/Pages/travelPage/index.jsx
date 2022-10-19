import React, { useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";
import LikeButton from "../../Components/LikeButton/LikeButton2";
import { useLocation } from "react-router-dom";

const TravelPage = (props) => {
    const [page, setPage] = useState(1); // 페이지번호
    const [itemsCount] = useState(10);  // 페이지 당 관광지 수
    const [totalItemsCount] = useState(50); // 총 아이템 개수 설정
    const [tours, setTours] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState();   // 키워드
    const data = useLocation(); //mainPage, travelPage에서 받아온 키워드 값

    const {state} = data;
    const keyWord = decodeURIComponent(state);
    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");

        console.log("state" + state);

        if(state == null){
            tourData2();
            setSearchKeyword("");
            console.log("useLocation NULL");
        }else if(searchKeyword === undefined){  // 처음엔 null이므로 실행할거임 ㅇㅇ;
            tourData(state);                    //검색 키워드 없으면 state 실행
        }else{
            tourData(searchKeyword);            // 검색키워드있으면 이걸로 실행
        }

    }, [page, itemsCount]);

    useEffect(() => {
        window.scroll(0,0)
    },[page])

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
              `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&numOfRows=${itemsCount}&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12&listYN=Y&arrange=C&keyword=${props}`
            );
            console.log("tourData 실행");
            const json = await response.json();
            const tourItems = json.response.body.items.item;
            setTours(tourItems.filter((e) => {return e.firstimage !== ""}));
          })();
    }

    const tourData2 = () =>{
        (async () => {
            const response = await fetch(
                `https://apis.data.go.kr/B551011/KorService/areaBasedSyncList?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&numOfRows=${itemsCount}&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12`
            );
            const json = await response.json();
            const tourItems = json.response.body.items.item;
            console.log(tourItems);
            setTours(tourItems.filter((e) => {return e.firstimage !== ""}));
          })();
    }

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            const value = encodeURIComponent(e.target.value);
            setSearchKeyword(value);
            tourData(value);
        }
    };

    const chageState = (e) => {
        console.log(e.target.value);
    }
    
    return (
        <MarginTopWrapper margin>
            <Styles.InputBox>
                <Styles.Input placeholder="검색하세요." value={keyWord === 'null' ? "#전체" : `#${keyWord}` } onChange={(e) => chageState(e)} onKeyPress={handleOnKeyPress}/>
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
                                    <Styles.Tel>
                                        {tour.tel}
                                    </Styles.Tel>
                                </Styles.Txt>
                                <Styles.LikeBox>
                                    <LikeButton />
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
            <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount} onChange={ (e) => chageState(e)}/>
        </MarginTopWrapper>
      );
}
export default TravelPage;

