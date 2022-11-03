import React, { useEffect, useState } from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
import Paging from '../../../Components/paging';

const MyComments = () => {
  // 공유한 플랜 댓글
  const [page1, setPage1] = useState(1);
  const [itemsCount] = useState(6);
  const [totalItemsCount1] = useState(50); // 임시

  // 관광지 댓글
  const [page2, setPage2] = useState(1);
  const [totalItemsCount2] = useState(50); // 임시

  useEffect(() => {
    console.log(page1 === 1 ? 1 : (page1 - 1) * itemsCount + "부터");
    console.log(itemsCount + "까지");
}, [page1, itemsCount]);

useEffect(() => {
  console.log(page2 === 1 ? 1 : (page2 - 1) * itemsCount + "부터");
  console.log(itemsCount + "까지");
}, [page2, itemsCount]);
  return (
    < >
       <MyPage myCommentAction="myComment"/>
      <MarginTopWrapper>
        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>공유한 플랜 댓글</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/기본프로필.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentTe>볼거없다 가지말자...</Styles.ContentTe>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/기본프로필.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentTe>볼거없다 가지말자...ㅠ</Styles.ContentTe>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/기본프로필.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentTe>볼거없다 가지말자...ㅠ</Styles.ContentTe>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
          </Styles.SmallBox>
          <Paging page={page1} count={totalItemsCount1} setPage={setPage1} itemsCount={itemsCount}/>
        </Styles.BigBox>

        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>관광지 댓글</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.ImgBox src={`assets/기본프로필.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentTe>볼거없다 가지말자...ㅠ</Styles.ContentTe>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox><Styles.LineBox>
              <Styles.ImgBox src={`assets/기본프로필.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentTe>볼거없다 가지말자...ㅠ</Styles.ContentTe>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox><Styles.LineBox>
              <Styles.ImgBox src={`assets/기본프로필.png`}/>
              <Styles.ContentBox>
                <Styles.ContentText>김광석 길</Styles.ContentText>
                <Styles.ContentTe>볼거없다 가지말자...ㅠ</Styles.ContentTe>
              </Styles.ContentBox>
              <Styles.DayBox>1995-05-09</Styles.DayBox>
            </Styles.LineBox>
          </Styles.SmallBox>
          <Paging page={page2} count={totalItemsCount2} setPage={setPage2} itemsCount={itemsCount}/>
        </Styles.BigBox>

        
      </MarginTopWrapper>
    </>
  );
};
  
export default MyComments;