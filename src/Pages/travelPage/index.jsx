import React, { useEffect, useState, useRef } from "react";
import * as Styles from "./style";
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";
import { useNavigate, useLocation } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import axios from "axios";


const TravelPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 페이지번호
  const [itemsCount] = useState(10); // 페이지 당 관광지 수
  const [totalItemsCount, setTotalItemCount] = useState(0); // 총 아이템 개수 설정
  const [tours, setTours] = useState([]);
  const [storagetours, setStorageTours] = useState([]); // 전체 관광지
  const [searchKeyword, setSearchKeyword] = useState(""); // 키워드
  const pagingHook = useRef(false);
  const [dibs, setDibs] = useState(false); // 찜 이벤트를 할때마다 렌더링이 되지 않아 업데이트가 안됨 따라서 생성
  const [like, setLike] = useState([]);
  const [rendering, setRendering] = useState(false);
  const location = useLocation(); //mainPage 받아온 키워드 값
  const { state } = location;

  useEffect(() => {
    const search = location.search.split("="); // url 에 있는 search 를 가져옴
    window.scroll(0, 0);
    if (Array.isArray(tours) && tours.length === 0) {
      if (search[0] === '' || search[0] !== '?search') {
        tourData();
      } else {
        if(search[0] === '?search'){
          tourData(decodeURI(search[1]));
        }
      }
    }
    setSearchKeyword(search[1] === undefined ? '전체' : decodeURI(search[1]));
  }, []);

  useEffect(() => {
    getLikes();
  }, []);

  useEffect(() => {
    if (pagingHook.current) {
      window.scroll(0, 0);
    } else {
      pagingHook.current = true;
    }
  }, [page]);

  const tourData = (search) => {
    // 전체 검색 함수
    setRendering(false);
    (async () => {
      const response = await fetch(
        `https://apis.data.go.kr/B551011/KorService/areaBasedSyncList?serviceKey=${process.env.VITE_TOUR_API_KEY}&numOfRows=100000&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12`
      );
      const json = await response.json();
      const tourItems = json.response.body.items.item;
      setStorageTours(tourItems);
      setPage(1);
      if (search === undefined || search === null) {
        setTours(tourItems);
        setTotalItemCount(tourItems.length);
      } else {
        let Arr = [];
        tourItems.filter((el, idx) => {
          if (el.addr1.indexOf(search) !== -1) {
            Arr = [...Arr, el];
          }
        });
        setTours(Arr);
        setTotalItemCount(Arr.length);
      }
      setRendering(true);
    })();
  };
  const handleOnKeyPress = (e) => {
    // 검색 함수
    if (e.key === "Enter") {
      window.open(`http://localhost:3000/travel?search=${e.target.value}`, '_self');
    }
  };

  const infoMove = async (e) => {
    //상세정보 함수
    navigate(`/information?id=${e}`);
  };

  // 찜하기 이벤트
  const onDibs = (tour) => {
    setDibs(!dibs);
    if (sessionStorage.getItem("dibs")) {
      // 세션 스토리지에 찜하기 스토리지가 있으면
      const dibs = sessionStorage.getItem("dibs").split(" ");
      const filterDibs = dibs.filter((id) => id === tour.contentid);
      if (filterDibs.length === 0) {
        // 현재 세션 스토리지 해당 값이 없으면
        sessionStorage.setItem("dibs", sessionStorage.getItem("dibs") + tour.contentid + " ");
      } else {
        const dibs = sessionStorage.getItem("dibs");
        sessionStorage.setItem("dibs", dibs.replace(tour.contentid + " ", ""));
      }
    } else {
      // 없으면
      sessionStorage.setItem("dibs", tour.contentid + " ");
    }
  };

  const getLikes = async () => {
    const data = await axios.post("http://35.216.50.89:8080/getLikes");
    if (data === undefined) {
      getLikes();
    } else {
      setLike(data.data.data.filter((e) => e.type === "T"));
    }
  };

  const addLikes = async (id) => {
    try {
      if (like.filter((e) => e.id === id).length) {
        // 있으면
        await axios.delete(`http://35.216.50.89:8080/removeLikes/${id}`);
      } else {
        await axios.post("http://35.216.50.89:8080/addLikes", { id: id, type: "T" });
      }
      getLikes();
    } catch (e) {
      alert("로그인 후 이용해 주세요.");
    }
  };

  const goCreatePlanPage = () => {
    alert("로그인 후 이용해 주세요.");
    navigate("/login");
  };

  return (
    <MarginTopWrapper margin>
      <Styles.InputBox>
        <Styles.Input placeholder="검색하세요." onKeyUp={handleOnKeyPress} />
      </Styles.InputBox>
      <Styles.ListSumBox>{searchKeyword === null || searchKeyword === "" ? "#전체" : `#${searchKeyword}`}</Styles.ListSumBox>
      <Styles.ContentBox>
        <Styles.TravelListBox>
          {!rendering ? (
            <Styles.Txt>
              <Styles.PlaceTitle>로딩 중...</Styles.PlaceTitle>
            </Styles.Txt>
          ) : tours.length === 0 ? (
            <Styles.Txt>
              <Styles.PlaceTitle>{searchKeyword}" 에 대한 검색결과가 없습니다.</Styles.PlaceTitle>
            </Styles.Txt>
          ) : (
            tours
              .filter((e, index) => {
                if (index >= (page - 1) * itemsCount && index < page * itemsCount) return e;
              })
              .map((tour, idx) => {
                return (
                  <div key={idx}>
                    <Styles.TravelWrapper>
                      <Styles.Image src={tour.firstimage2 === "" ? "assets/logo.png" : tour.firstimage2} onClick={() => infoMove(tour.contentid)} />
                      <Styles.Txt>
                        <Styles.PlaceTitle onClick={() => infoMove(tour.contentid)}>{tour.title}</Styles.PlaceTitle>
                        <Styles.Address>{tour.addr1}</Styles.Address>
                        <Styles.Tel>{tour.tel}</Styles.Tel>
                      </Styles.Txt>
                      <Styles.LikeBox>
                        {like.filter((e) => e.id === tour.contentid).length ? (
                          <HeartFilled style={{ color: "red", fontSize: "30px" }} onClick={() => addLikes(tour.contentid)} />
                        ) : (
                          <HeartOutlined style={{ fontSize: "30px" }} onClick={() => addLikes(tour.contentid)} />
                        )}
                        <Styles.Like
                          onClick={() => onDibs(tour)}
                          dibs={
                            sessionStorage.getItem("dibs")
                              ? sessionStorage
                                  .getItem("dibs")
                                  .split(" ")
                                  .filter((id) => id === tour.contentid).length === 0
                                ? true
                                : false
                              : true
                          }>
                          {sessionStorage.getItem("dibs")
                            ? sessionStorage
                                .getItem("dibs")
                                .split(" ")
                                .filter((id) => id === tour.contentid).length === 0
                              ? "+찜하기"
                              : "-찜 취소"
                            : "+찜하기"}
                        </Styles.Like>
                      </Styles.LikeBox>
                    </Styles.TravelWrapper>
                  </div>
                );
              })
          )}
        </Styles.TravelListBox>
        <Styles.TravelFilterBox>
          <Styles.FilterBoxSticky>
            {!rendering ? null : sessionStorage.getItem("dibs") ? (
              !sessionStorage.getItem("access_token") ? (
                <>
                  <Styles.SteamListButtonImg src={"assets/SteamListButton.png"} onClick={goCreatePlanPage} />
                </>
              ) : (
                <>
                  <Styles.SteamListButtonImg
                    src={"assets/SteamListButton.png"}
                    onClick={() => {
                      navigate("/CreatePlanPage");
                    }}
                  />
                </>
              )
            ) : null}
          </Styles.FilterBoxSticky>
        </Styles.TravelFilterBox>
      </Styles.ContentBox>
      <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount} />
    </MarginTopWrapper>
  );
};
export default TravelPage;
