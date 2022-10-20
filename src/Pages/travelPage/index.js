import React, { useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";
import LikeButton from "../../Components/LikeButton/LikeButton2";
import { useLocation } from "react-router-dom";

const TravelPage = () => {
    const [page, setPage] = useState(1); // 페이지번호
    const [itemsCount] = useState(10);  // 페이지 당 관광지 수
    const [totalItemsCount, setStotalItemCount] = useState(0); // 총 아이템 개수 설정
    const [tours, setTours] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");   // 키워드
    const data = useLocation(); //mainPage, travelPage에서 받아온 키워드 값

    useEffect(() => {
        window.scroll(0,0)
        console.log("최초 useEffect실행@@");
        const {state} = data;
        if(state == null){
            tourData2();
        }else{
            tourData(state);
        }
        
    },[]);

    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터" + itemsCount + "까지");
        window.scroll(0,0)
        if(searchKeyword === ""){        
            tourData2();
        }else{
            tourData(searchKeyword);
        }
    }, [page]);

    // 관광타입(contentTypeId) 코드표.
    // 관광지 12
    // 문화시설 14
    // 행사/공연/축제 15
    // 여행코스 25
    // 레포츠 28
    // 숙박 32
    // 쇼핑 38
    // 음식점 39

    const tourData = (props) =>{    //키워드 별 검색 함수
        (async () => {
            const response = await fetch(
              `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&numOfRows=100000&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12&listYN=Y&arrange=C&keyword=${props}`
            );
            console.log("tourData 실행");
            const json = await response.json();
            if(json.response.body.items === ""){
                setTours("");
            }else{
                const tourItems = json.response.body.items.item;
                const filterTourItems = tourItems.filter((e) => {return e.firstimage !== ""});
                console.log(filterTourItems);
                setStotalItemCount(filterTourItems.length);
                // for(var i = (page -1) ; i < filterTourItems.length; 1++ ){
                    
            
                // }
                setTours(filterTourItems);
            }
          })();
    }

    const tourData2 = () =>{    // 전체 검색 함수
        (async () => {
            const response = await fetch(
                `https://apis.data.go.kr/B551011/KorService/areaBasedSyncList?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&numOfRows=${itemsCount}&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12`
            );
            const json = await response.json();
            const tourItems = json.response.body.items.item;
            setTours(tourItems.filter((e) => {return e.firstimage !== ""}));
          })();
    }


    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            const value = encodeURIComponent(e.target.value);
            setSearchKeyword(value);
            setPage(1);
            if(value === "" ){
                console.log("111111111111");
                tourData2();
            }else{
                console.log("2222222222222");
                tourData(value);
            }
        }
    };

    return (
        <MarginTopWrapper margin>
            <Styles.InputBox>
                <Styles.Input placeholder="검색하세요." onKeyUp={handleOnKeyPress}/>
            </Styles.InputBox>
            <Styles.ListSumBox>{searchKeyword === (null || "") ? "#전체" : `#${decodeURIComponent(searchKeyword)}` }</Styles.ListSumBox>
            <Styles.ContentBox>
                <Styles.TravelListBox>
                {tours === "" ?
                     <Styles.Txt>
                        <Styles.PlaceTitle>"{decodeURIComponent(searchKeyword)}" 에 대한 검색결과가 없습니다.</Styles.PlaceTitle>
                     </Styles.Txt>
                 : (tours.map( (tour,id) =>{
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
                }))}
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

