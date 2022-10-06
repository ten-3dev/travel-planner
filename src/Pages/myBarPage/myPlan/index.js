import React from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";

const MyPlan = () => {
  return (
    <>
    <MyPage isAction="myPlan"/>
    <MarginTopWrapper>
      <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>나의 플랜</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.ContentBox>
                <Styles.ContentBox2>
                  <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                  <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                </Styles.ContentBox2>
                <Styles.ContentBox2>
                  <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                  <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.ContentBox2>
              </Styles.ContentBox>
            </Styles.LineBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.ContentBox>
                <Styles.ContentBox2>
                  <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                  <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                </Styles.ContentBox2>
                <Styles.ContentBox2>
                  <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                  <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.ContentBox2>
              </Styles.ContentBox>
            </Styles.LineBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.ContentBox>
                <Styles.ContentBox2>
                  <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                  <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                </Styles.ContentBox2>
                <Styles.ContentBox2>
                  <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                  <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.ContentBox2>
              </Styles.ContentBox>
            </Styles.LineBox>
            
          </Styles.SmallBox>
          <Styles.PageText>&lt;&nbsp; 1 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp; &gt;</Styles.PageText>
        </Styles.BigBox>
    </MarginTopWrapper>
      
    </>
  );
};
  
export default MyPlan;