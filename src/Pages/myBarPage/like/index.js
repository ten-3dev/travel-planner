
import React, { useEffect, useState } from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
import Paging from '../../../Components/paging';
import { HeartFilled } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Like = () => {
  const navigate = useNavigate();
  const [itemsCount] = useState(4); // 화면에 보여줄 아이템 수

  const [tourLikePage, setTourLikePage] = useState(1); // 현재 페이지 state
  const [likeCount, setLikeCount] = useState({ // 총 개수 state
    tourCount : -1,
    planCount : -1
  });

  const [isLikeLoding, setIsLikeLoding] = useState(false);
  const [tourInfo, setTourInfo] = useState([]);

  const [isDibsLoding, setIsDibsLoding] = useState(false);
  const [dibsInfo, setDibsInfo] = useState([]);

  const [tourDibsPage, setTourDibsPage] = useState(1); // 현재 페이지 state
  const [dibsCount, setDibsCount] = useState(-1);// 총 개수 state

  useEffect(() => {
    if(likeCount.planCount === -1 & likeCount.tourCount === -1){ // 젤 첨이면?
      getTourCount(); //개수를 구함
    }else{
      getTourData();
    }
  }, [tourLikePage])

  useEffect(() => {
    getDibsData(tourDibsPage === 1 ? 0 : (tourDibsPage - 1) * itemsCount);
  }, [tourDibsPage])

  const getTourURL = (id) => {
    return `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${id}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
  }

  // 페이지네이션을 위한 총 개수 구하기
  const getTourCount = async () => {
    const data = await axios.post("http://localhost:8080/getLikesCount");
    if(data !== undefined){
      if(data.data.data.length === 0){
        setIsLikeLoding(true);
        return;
      }
      setLikeCount({
        ...likeCount, 
        tourCount : data.data.data.t_like, 
        planCount : data.data.data.p_like
      });
      getTourData();
    }else{
      getTourCount();
    }
  }


  // 좋아요를 누른 관광지 정보를 가져옴
  const getTourData = async () => {
    setIsLikeLoding(false);
    setTourInfo(tourInfo.length = 0); // 제거하고 시작
    const data = await axios.post("http://localhost:8080/getLikesPagination", {offset: tourLikePage === 1 ? 0 : (tourLikePage - 1) * itemsCount, type: "T"});
    if(data !== undefined){
      const likeData = data.data.data.filter(e => e.type === "T");
      for(let i = 0; i < likeData.length; i++){
        const response = await fetch(getTourURL(likeData[i].id));
        const json = await response.json();
        const tourItems = json.response.body.items.item;
        const tourData = tourInfo;
        tourData.push(tourItems[0])
        setTourInfo(tourData);
      }
      setIsLikeLoding(true);
    }else{
      getTourData();
    }
  }

  // 좋아요 제거 함수
  const likeCancel = async (id) => {
    try{
      await axios.delete(`http://localhost:8080/removeLikes/${id}`)
      setLikeCount({...likeCount, tourCount: likeCount.tourCount - 1});
      console.log(!(likeCount.tourCount * tourLikePage) % itemsCount)
      if(tourInfo.length === 1){
        if(likeCount.tourCount === 1){
          getTourData();  
        }else{
          setTourLikePage(tourLikePage - 1);  
        }
      }else{
        getTourData();
      }
    }catch(e){
      alert("좋아요 에러");
      console.log(e);
    }
  }

  const getDibsData = async (offset) => {
    setIsDibsLoding(false);
    setDibsInfo(dibsInfo.length = 0);
    console.log(offset);
    if(sessionStorage.getItem("dibs")){
      const dibs = sessionStorage.getItem("dibs").split(" ");
      dibs.pop();
      setDibsCount(dibs.length);

      let i = 0;
      while(true){
        // 페이지네이션 작동하도록 하셈... 그럼 찜하기 끝

        // if((offset + i) - 1 === dibs.length){
        //   console.log("Asdfsad");
        //   break;
        // }
        i++;
        console.log(offset, i, dibs.length);
        const response = await fetch(getTourURL(dibs[offset + i]));
        const json = await response.json();
        const dibsItems = json.response.body.items.item;
        const dibsData = dibsInfo;
        dibsData.push(dibsItems[0]);
        setDibsInfo(dibsData);
        if(i === itemsCount){
          break;
        }        
      }
      // for(let i = offset; i < dibs.length; i++){
      //   const response = await fetch(getTourURL(dibs[i]));
      //   const json = await response.json();
      //   const dibsItems = json.response.body.items.item;
      //   const dibsData = dibsInfo;
      //   dibsData.push(dibsItems[0]);
      //   setDibsInfo(dibsData);
      //   if((offset === 0 ? i + 1 : i) === itemsCount){
      //     break;
      //   }
      // }
      console.log(dibsInfo);
    }
    setIsDibsLoding(true);
  }

  const dibsCancel = async (id) => {
    const dibs = sessionStorage.getItem("dibs");
    sessionStorage.setItem("dibs", dibs.replace(id + " ", ""));
    getDibsData();
  }

  return (
    <>
      <MyPage likeAction ="like" />
      <MarginTopWrapper>
      <Styles.LikeText>좋아요 목록</Styles.LikeText>
        <Styles.BigBox>
          <Styles.LikesListBox1>
            <Styles.Box>
              <Styles.Text>공유한 플랜</Styles.Text>
            </Styles.Box>
            <Styles.SmallBox>
              <Styles.LineBox>
                <Styles.Box2>
                  <Styles.ImgBox src={`assets/image32.png`}/>
                    <Styles.ContentBox>
                      <Styles.ContentBox2>
                        <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                        <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                      </Styles.ContentBox2>
                      <Styles.ContentBox2>
                        <Styles.Imgheart>
                          {/* <LikeButton/> */}
                        </Styles.Imgheart>
                        <Styles.HeartSumText>300</Styles.HeartSumText>
                        <Styles.NameBox>석준혁</Styles.NameBox>
                      </Styles.ContentBox2>
                    </Styles.ContentBox>
                </Styles.Box2>
              </Styles.LineBox>
              <Styles.LineBox>
                <Styles.Box2>
                  <Styles.ImgBox src={`assets/image32.png`}/>
                    <Styles.ContentBox>
                      <Styles.ContentBox2>
                        <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                        <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                      </Styles.ContentBox2>
                      <Styles.ContentBox2>
                        <Styles.Imgheart>
                          {/* <LikeButton/> */}
                        </Styles.Imgheart>
                        <Styles.HeartSumText>300</Styles.HeartSumText>
                        <Styles.NameBox>석준혁</Styles.NameBox>
                      </Styles.ContentBox2>
                    </Styles.ContentBox>
                </Styles.Box2>
              </Styles.LineBox>
              <Styles.LineBox>
                <Styles.Box2>
                  <Styles.ImgBox src={`assets/image32.png`}/>
                    <Styles.ContentBox>
                      <Styles.ContentBox2>
                        <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                        <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                      </Styles.ContentBox2>
                      <Styles.ContentBox2>
                        <Styles.Imgheart>
                          {/* <LikeButton/> */}
                        </Styles.Imgheart>
                        <Styles.HeartSumText>300</Styles.HeartSumText>
                        <Styles.NameBox>석준혁</Styles.NameBox>
                      </Styles.ContentBox2>
                    </Styles.ContentBox>
                </Styles.Box2>
              </Styles.LineBox>
              {/* <Paging page={tourLikePage} count={tourLikePageTotalItemsCount} setPage={setTourLikePage} itemsCount={itemsCount}/> */}
            </Styles.SmallBox>
            <Styles.Box>
              <Styles.Text>관광지</Styles.Text>
            </Styles.Box>
            <Styles.SmallBox>
              {!isLikeLoding ? "로딩 중..." : likeCount.tourCount <= 0 ? "좋아요를 누른 항목이 없습니다." : tourInfo.map((el, idx) => { 
                return(
                  <Styles.LineBox key={idx}>
                    <Styles.KeepBox3>
                      <Styles.ImgBox2 src={el?.firstimage2 === "" ? "assets/logo.png" : el?.firstimage2}/>
                        <Styles.KeepBox>
                          <Styles.KeepBox2>
                            <Styles.ContentText onClick={() => navigate(`/information?id=${el?.contentid}`)}>{el?.title}</Styles.ContentText>
                            <Styles.AddressText>{el?.addr1 + " " + el?.addr2}</Styles.AddressText>
                          </Styles.KeepBox2>
                          <Styles.KeepBox2>
                            <Styles.KeepContentText>
                              {el?.overview}
                            </Styles.KeepContentText>
                            <Styles.KeepDeleteBox2>
                              <HeartFilled style={{ color: 'red', fontSize: '30px', cursor: "pointer"}} onClick={() => likeCancel(el?.contentid)}/>
                            </Styles.KeepDeleteBox2>
                          </Styles.KeepBox2>
                        </Styles.KeepBox>
                    </Styles.KeepBox3>
                  </Styles.LineBox>
                )
              })}
              {isLikeLoding && likeCount?.tourCount > itemsCount &&
                <Paging page={tourLikePage} count={likeCount?.tourCount} setPage={setTourLikePage} itemsCount={itemsCount}/>
               }
            </Styles.SmallBox>
          </Styles.LikesListBox1>
        </Styles.BigBox>
        <Styles.LikeText>찜 목록</Styles.LikeText>
        <Styles.LikesListBox>
            <Styles.SmallBox2>
              {!sessionStorage.getItem("dibs") ? "찜하기로 선택된 항목이 없습니다." : !isDibsLoding ? "로딩 중..." : dibsInfo.map((el, idx) => {
                return(
                  <Styles.LineBox key={idx}>
                    <Styles.KeepBox3>
                      <Styles.ImgBox2 src={el?.firstimage2 === "" ? "assets/logo.png" : el?.firstimage2}/>
                        <Styles.KeepBox>
                          <Styles.KeepBox2>
                            <Styles.ContentText onClick={() => navigate(`/information?id=${el?.contentid}`)}>{el?.title}</Styles.ContentText>
                            <Styles.AddressText>{el?.addr1 + " " + el?.addr2}</Styles.AddressText>
                          </Styles.KeepBox2>
                          <Styles.KeepBox2>
                            <Styles.KeepContentText>
                            {el?.overview}
                            </Styles.KeepContentText>
                            <Styles.KeepDeleteBox onClick={() => dibsCancel(el?.contentid)}>찜 삭제</Styles.KeepDeleteBox>
                          </Styles.KeepBox2>
                        </Styles.KeepBox>
                    </Styles.KeepBox3>
                  </Styles.LineBox>
                )
              })}
              {isDibsLoding && dibsCount > itemsCount &&
                <Paging page={tourDibsPage} count={dibsCount} setPage={setTourDibsPage} itemsCount={itemsCount}/>
              }
            </Styles.SmallBox2>
          </Styles.LikesListBox>
      </MarginTopWrapper>
      
    </>
  );
};
  
export default Like;