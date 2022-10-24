
import React, { useEffect, useState } from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
import Paging from '../../../Components/paging';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import axios from 'axios';


const Like = () => {
  const [page, setPage] = useState(1);
  const [itemsCount] = useState(6);
  const [totalItemsCount] = useState(50); // 임시
  const [like, setLike] = useState([]);
  const [tourInfo, setTourInfo] = useState([]);

  useEffect(() => {
    console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
    console.log(itemsCount + "까지");
  }, [page, itemsCount]);

  useEffect(() => {
    getLikes();
    const getDataTour = async () => {
      await tourData();
    }
    getDataTour();
  }, [])

  useEffect(() => {
  }, [like])

  const getLikes = async () => {
    if(!sessionStorage.getItem("access_token")) return;
    const data = await axios.post("http://localhost:8080/getLikes");
    if(data === undefined){
        getLikes();
    }else{
        setLike(data.data.data.filter(e => e.type === "T"));
    }
  }

  const tourData = async () =>{    //키워드 별 검색 함수
    if(like.length !== 0){
      for(let i = 0; i < like.length; i++){
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${like[i].id}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
        );
        const json = await response.json();
        const tourItems = json.response.body.items.item;
        // setTourInfo(tourInfo.push({...tourItems[0], like: like[i]}))
        const data = tourInfo;
        data.push({...tourItems[0]});
        setTourInfo(data);
      }
    }
    console.log("tour: ", tourInfo);
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
              <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
            </Styles.SmallBox>
            <Styles.Box>
              <Styles.Text>관광지</Styles.Text>
            </Styles.Box>
            <Styles.SmallBox>
              {tourInfo.map((el, idx) => { 
                return(
                  <Styles.LineBox key={idx}>
                    <Styles.KeepBox3>
                      <Styles.ImgBox2 src={`assets/image32.png`}/>
                        <Styles.KeepBox>
                          <Styles.KeepBox2>
                            <Styles.ContentText>{el?.title}</Styles.ContentText>
                            <Styles.AddressText>{el?.addr1 + " " + el?.addr2}</Styles.AddressText>
                          </Styles.KeepBox2>
                          <Styles.KeepBox2>
                            <Styles.KeepContentText>
                              제목 클릭하여 상세정보 확인
                            </Styles.KeepContentText>
                            <Styles.KeepDeleteBox2>
                              <HeartFilled style={{ color: 'red', fontSize: '30px', cursor: "pointer"}}/>
                            </Styles.KeepDeleteBox2>
                          </Styles.KeepBox2>
                        </Styles.KeepBox>
                    </Styles.KeepBox3>
                  </Styles.LineBox>
                )
              })}
              <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
            </Styles.SmallBox>
          </Styles.LikesListBox1>
        </Styles.BigBox>
        <Styles.LikeText>찜 목록</Styles.LikeText>
        <Styles.LikesListBox>
            <Styles.SmallBox2>
              <Styles.LineBox>
                <Styles.KeepBox3>
                  <Styles.ImgBox2 src={`assets/image32.png`}/>
                    <Styles.KeepBox>
                      <Styles.KeepBox2>
                        <Styles.ContentText>더베이101</Styles.ContentText>
                        <Styles.AddressText>부산 해운대구 동백로 52 더베이101</Styles.AddressText>
                      </Styles.KeepBox2>
                      <Styles.KeepBox2>
                        <Styles.KeepContentText>
                          부산 해운대를 대표하는해양레져 
                          클럽하우스 화려한 야경과 맛있는 음식을 즐기는
                           뭐라뭐라뭐라 쏼라쏼라쏼라 등등등등등등등이며 여러가지 뭐가 있을꺼임
                        </Styles.KeepContentText>
                        <Styles.KeepDeleteBox>찜 삭제</Styles.KeepDeleteBox>
                      </Styles.KeepBox2>
                    </Styles.KeepBox>
                </Styles.KeepBox3>
              </Styles.LineBox>
              <Styles.LineBox>
                <Styles.KeepBox3>
                  <Styles.ImgBox2 src={`assets/image32.png`}/>
                    <Styles.KeepBox>
                      <Styles.KeepBox2>
                        <Styles.ContentText>더베이101</Styles.ContentText>
                        <Styles.AddressText>부산 해운대구 동백로 52 더베이101</Styles.AddressText>
                      </Styles.KeepBox2>
                      <Styles.KeepBox2>
                        <Styles.KeepContentText>
                          부산 해운대를 대표하는해양레져 
                          클럽하우스 화려한 야경과 맛있는 음식을 즐기는
                           뭐라뭐라뭐라 쏼라쏼라쏼라 등등등등등등등이며 여러가지 뭐가 있을꺼임
                        </Styles.KeepContentText>
                        <Styles.KeepDeleteBox>찜 삭제</Styles.KeepDeleteBox>
                      </Styles.KeepBox2>
                    </Styles.KeepBox>
                </Styles.KeepBox3>
              </Styles.LineBox>
              <Styles.LineBox>
                <Styles.KeepBox3>
                  <Styles.ImgBox2 src={`assets/image32.png`}/>
                    <Styles.KeepBox>
                      <Styles.KeepBox2>
                        <Styles.ContentText>더베이101</Styles.ContentText>
                        <Styles.AddressText>부산 해운대구 동백로 52 더베이101</Styles.AddressText>
                      </Styles.KeepBox2>
                      <Styles.KeepBox2>
                        <Styles.KeepContentText>
                          부산 해운대를 대표하는해양레져 
                          클럽하우스 화려한 야경과 맛있는 음식을 즐기는
                           뭐라뭐라뭐라 쏼라쏼라쏼라 등등등등등등등이며 여러가지 뭐가 있을꺼임
                        </Styles.KeepContentText>
                        <Styles.KeepDeleteBox>찜 삭제</Styles.KeepDeleteBox>
                      </Styles.KeepBox2>
                    </Styles.KeepBox>
                </Styles.KeepBox3>
              </Styles.LineBox>
              <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
            </Styles.SmallBox2>
          </Styles.LikesListBox>
      </MarginTopWrapper>
      
    </>
  );
};
  
export default Like;