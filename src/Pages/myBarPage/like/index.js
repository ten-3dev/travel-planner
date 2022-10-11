
import React, { useEffect, useState } from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
import Paging from '../../../Components/paging';

const Like = () => {
  const [page, setPage] = useState(1);
  const [itemsCount] = useState(6);
  const [totalItemsCount] = useState(50); // 임시

  useEffect(() => {
    console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
    console.log(itemsCount + "까지");
}, [page, itemsCount]);
  return (
    <>
      <MyPage likeAction ="like" />
      <MarginTopWrapper>
        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>공유한 플랜 목록</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.Box2>
                <Styles.ImgBox src={`assets/image32.png`}/>
                  <Styles.ContentBox>
                    <Styles.ContentBox2>
                      <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                    </Styles.ContentBox2>
                    <Styles.ContentBox2>
                      <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/heart.png"}></Styles.Imgheart>
                      <Styles.HeartSumText>300</Styles.HeartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
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
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                    </Styles.ContentBox2>
                    <Styles.ContentBox2>
                      <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/heart.png"}></Styles.Imgheart>
                      <Styles.HeartSumText>300</Styles.HeartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
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
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                    </Styles.ContentBox2>
                    <Styles.ContentBox2>
                      <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/heart.png"}></Styles.Imgheart>
                      <Styles.HeartSumText>300</Styles.HeartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
                    </Styles.ContentBox2>
                  </Styles.ContentBox>
              </Styles.Box2>
            </Styles.LineBox>
          </Styles.SmallBox>
          <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
          <Styles.Box>
            <Styles.Text>관광지</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.Box2>
                <Styles.ImgBox src={`assets/image32.png`}/>
                  <Styles.ContentBox>
                    <Styles.ContentBox2>
                      <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                    </Styles.ContentBox2>
                    <Styles.ContentBox2>
                      <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/heart.png"}></Styles.Imgheart>
                      <Styles.HeartSumText>300</Styles.HeartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
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
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                    </Styles.ContentBox2>
                    <Styles.ContentBox2>
                      <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/heart.png"}></Styles.Imgheart>
                      <Styles.HeartSumText>300</Styles.HeartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
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
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                    </Styles.ContentBox2>
                    <Styles.ContentBox2>
                      <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/heart.png"}></Styles.Imgheart>
                      <Styles.HeartSumText>300</Styles.HeartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
                    </Styles.ContentBox2>
                  </Styles.ContentBox>
              </Styles.Box2>
            </Styles.LineBox>
          </Styles.SmallBox>
          <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
        </Styles.BigBox>
      </MarginTopWrapper>
      
    </>
  );
};
  
export default Like;