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
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.contentBox>
                <Styles.contentText>김광석 길</Styles.contentText>
                <Styles.contentText>볼거없다 가지말자...ㅠ</Styles.contentText>
              </Styles.contentBox>
              <Styles.dayBox>1995-05-09</Styles.dayBox>
            </Styles.lineBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.contentBox>
                <Styles.contentText>김광석 길</Styles.contentText>
                <Styles.contentText>볼거없다 가지말자...ㅠ</Styles.contentText>
              </Styles.contentBox>
              <Styles.dayBox>1995-05-09</Styles.dayBox>
            </Styles.lineBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.contentBox>
                <Styles.contentText>김광석 길</Styles.contentText>
                <Styles.contentText>볼거없다 가지말자...ㅠ</Styles.contentText>
              </Styles.contentBox>
              <Styles.dayBox>1995-05-09</Styles.dayBox>
            </Styles.lineBox>
          </Styles.SmallBox>
          <Styles.PageText>&lt;&nbsp; 1 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp; &gt;</Styles.PageText>
        </Styles.BigBox>

        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>관광지 댓글</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.contentBox>
                <Styles.contentText>김광석 길</Styles.contentText>
                <Styles.contentText>볼거없다 가지말자...ㅠ</Styles.contentText>
              </Styles.contentBox>
              <Styles.dayBox>1995-05-09</Styles.dayBox>
            </Styles.lineBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.contentBox>
                <Styles.contentText>김광석 길</Styles.contentText>
                <Styles.contentText>볼거없다 가지말자...ㅠ</Styles.contentText>
              </Styles.contentBox>
              <Styles.dayBox>1995-05-09</Styles.dayBox>
            </Styles.lineBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/임시프로필사진.png`}/>
              <Styles.contentBox>
                <Styles.contentText>김광석 길</Styles.contentText>
                <Styles.contentText>볼거없다 가지말자...ㅠ</Styles.contentText>
              </Styles.contentBox>
              <Styles.dayBox>1995-05-09</Styles.dayBox>
            </Styles.lineBox>
          </Styles.SmallBox>
          <Styles.PageText>&lt;&nbsp; 1 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp; &gt;</Styles.PageText>
        </Styles.BigBox>

        
      </MarginTopWrapper>
    </>
  );
};
  
export default MyComments;