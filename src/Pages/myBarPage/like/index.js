
import React from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";

const Like = () => {
  return (
    <>
      <MyPage />
      <MarginTopWrapper>
        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>좋아요</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.lineBox>
              <Styles.Box2>
                <Styles.ImgBox src={`assets/image32.png`}/>
                  <Styles.contentBox>
                    <Styles.contentBox2>
                      <Styles.contentText>응가의 경북 여행</Styles.contentText>
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.dayBox>1995-05-09 ~ 2022-10-05</Styles.dayBox>
                    </Styles.contentBox2>
                    <Styles.contentBox2>
                    <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Imgheart>
                      <Styles.heartSumText>300</Styles.heartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
                    </Styles.contentBox2>
                  </Styles.contentBox>
              </Styles.Box2>
            </Styles.lineBox>

            <Styles.lineBox>
              <Styles.Box2>
                <Styles.ImgBox src={`assets/image32.png`}/>
                  <Styles.contentBox>
                    <Styles.contentBox2>
                      <Styles.contentText>응가의 경북 여행</Styles.contentText>
                      <Styles.NameBox>석준혁</Styles.NameBox>
                      <Styles.dayBox>1995-05-09 ~ 2022-10-05</Styles.dayBox>
                    </Styles.contentBox2>
                    <Styles.contentBox2>
                    <Styles.Imgheart src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Imgheart>
                      <Styles.heartSumText>300</Styles.heartSumText>
                      <Styles.ModifyDeleteBox>삭제</Styles.ModifyDeleteBox>
                    </Styles.contentBox2>
                  </Styles.contentBox>
              </Styles.Box2>
            </Styles.lineBox>
          </Styles.SmallBox>
          <Styles.PageText>&lt;&nbsp; 1 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp; &gt;</Styles.PageText>
        </Styles.BigBox>
      </MarginTopWrapper>
      
    </>
  );
};
  
export default Like;