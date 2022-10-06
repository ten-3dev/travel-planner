import React from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
  
const SharedPlan = () => {
  return (
    
    < >
      <MyPage isAction2 ="sharedPlan"/>
      <MarginTopWrapper>
        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>공유한 플랜</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.ContentBox>
                <Styles.ContentBox2>
                  <Styles.ContentBox3>
                  <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                  <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                  </Styles.ContentBox3>
                  <Styles.ModifyDeleteBox>공유 삭제</Styles.ModifyDeleteBox>
                </Styles.ContentBox2>
                <Styles.ContentBox2>
                <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Imgheart>
                  <Styles.HeartSumText>300</Styles.HeartSumText>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.ContentBox2>
              </Styles.ContentBox>
            </Styles.LineBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.ContentBox>
                <Styles.ContentBox2>
                  <Styles.ContentBox3>
                  <Styles.ContentText>응가의 경북 여행</Styles.ContentText>
                  <Styles.DayBox>1995-05-09 ~ 2022-10-05</Styles.DayBox>
                  </Styles.ContentBox3>
                  <Styles.ModifyDeleteBox>공유 삭제</Styles.ModifyDeleteBox>
                </Styles.ContentBox2>
                <Styles.ContentBox2>
                <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Imgheart>
                  <Styles.HeartSumText>300</Styles.HeartSumText>
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
  
export default SharedPlan;