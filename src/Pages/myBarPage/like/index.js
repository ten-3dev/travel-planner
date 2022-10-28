
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

  // 관광지 좋아요 로딩 state
  const [isLikeLoding, setIsLikeLoding] = useState(false);
  const [tourInfo, setTourInfo] = useState([]);

  // 관광지 찜하기 로딩 state
  const [isDibsLoding, setIsDibsLoding] = useState(false);
  const [dibsInfo, setDibsInfo] = useState([]);

  useEffect(() => {
    getTourData();
    getDibsData();
  }, [])

  const getTourURL = (id) => {
    return `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${id}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=N&overviewYN=Y`
  }

  // 좋아요를 누른 관광지 정보를 가져옴
  const getTourData = async () => {
    setIsLikeLoding(false);
    try{
      const data = await axios.post("http://localhost:8080/getLikes");
      if(data){
        setTourInfo(tourInfo.length = 0);
        const likeData = data.data.data.filter(e => e.type === 'T');
        if(likeData.length === 0){
          setIsLikeLoding(true);
          return;  
        }
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
    }catch(e){
      alert("좋아요 에러");
      console.log(e);
    }
  }

  // 좋아요 제거 함수
  const likeCancel = async (id) => {
    try{
      await axios.delete(`http://localhost:8080/removeLikes/${id}`)
      getTourData();
    }catch(e){
      alert("좋아요 에러");
      console.log(e);
    }
  }

  // 찜하기 목록 가져오는 함수
  const getDibsData = async () => {
    setIsDibsLoding(false);
    setDibsInfo(dibsInfo.length = 0);
    if(sessionStorage.getItem("dibs")){
      const dibs = sessionStorage.getItem("dibs").split(" ");
      dibs.pop();
      for(let i = 0; i < dibs.length; i++){
        const response = await fetch(getTourURL(dibs[i]));
        const json = await response.json();
        const dibsItems = json.response.body.items.item;
        const dibsData = dibsInfo;
        dibsData.push(dibsItems[0]);
        setDibsInfo(dibsData);
      }
    }
    setIsDibsLoding(true);
  }

  // 찜하기 취소 함수
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
                        <HeartFilled style={{ color: 'red', fontSize: '30px', cursor: "pointer"}}/>
                        </Styles.Imgheart>
                        <Styles.HeartSumText></Styles.HeartSumText>
                        <Styles.NameBox>석준혁</Styles.NameBox>
                      </Styles.ContentBox2>
                    </Styles.ContentBox>
                </Styles.Box2>
              </Styles.LineBox>
            </Styles.SmallBox>
            <Styles.Box>
              <Styles.Text>관광지</Styles.Text>
            </Styles.Box>
            <Styles.SmallBox>
              {!isLikeLoding ? `로딩 중...` : tourInfo === 0 ? "좋아요를 누른 항목이 없습니다." : tourInfo.map((el, idx) => { 
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
            </Styles.SmallBox2>
          </Styles.LikesListBox>
      </MarginTopWrapper>
      
    </>
  );
};
  
export default Like;