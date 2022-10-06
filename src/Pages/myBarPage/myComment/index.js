import React from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";

const MyComments = () => {
  return (
    < >
      <MyPage />
      <MarginTopWrapper>
        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>공유한 플랜 댓글</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentText>볼거없다 가지말자...ㅠddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Styles.ContentText>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentText>볼거없다 가지말자...ㅠ</Styles.ContentText>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentText>볼거없다 가지말자...ㅠ</Styles.ContentText>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
            
          </Styles.SmallBox>
          <Styles.PageText>&lt;&nbsp; 1 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp; &gt;</Styles.PageText>
        </Styles.BigBox>

        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>관광지 댓글</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentText>볼거없다 가지말자...ㅠ</Styles.ContentText>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox><Styles.LineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentText>볼거없다 가지말자...ㅠ</Styles.ContentText>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox><Styles.LineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentText>볼거없다 가지말자...ㅠ</Styles.ContentText>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
          </Styles.SmallBox>
          <Styles.PageText>&lt;&nbsp; 1 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp; &gt;</Styles.PageText>
        </Styles.BigBox>

        
      </MarginTopWrapper>
    </>
  );
};
  
export default MyComments;