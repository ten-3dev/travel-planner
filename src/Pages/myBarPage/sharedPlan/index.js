import React, { useEffect, useState } from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
import Paging from '../../../Components/paging';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SharedPlan = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [itemsCount] = useState(6);
  const [totalItemsCount] = useState(50); // 임시
  const [plan, setPlan] = useState();
  useEffect(() => {
    getUserPlan();
    console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
    console.log(itemsCount + "까지");
}, [page, itemsCount]);

  const getUserPlan = async () => { // DB에 있는 플랜데이터 
    const data = await axios.get('http://localhost:8080/getUserPlan');
    if(!data){
        getUserPlan();
    }else{
      console.log(data.data.data);
      setPlan(Object.entries(data.data.data));
    }
  }

  const infoMove = (e) => {
    navigate('/calendar', {state : plan})
  }
  return (
    
    < >
      <MyPage sharedPlanAction ="sharedPlan"/>
      <MarginTopWrapper>
        <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>공유한 플랜</Styles.Text>
          </Styles.Box>
          {plan === undefined ? "" : (plan.map((el, idx) => {
            return(
              <id key={idx}>
          <Styles.SmallBox>
            <Styles.LineBox>
              <Styles.ImgBox onClick={() => {infoMove(el[1])}} src={`assets/image32.png`}/>
              <Styles.ContentBox>
                <Styles.ContentBox2>
                  <Styles.ContentBox3>
                    <Styles.ContentText onClick={() => {infoMove(el[1])}}>{el[1].title}</Styles.ContentText>
                    <Styles.DayBox>{el[1].date}</Styles.DayBox>
                  </Styles.ContentBox3>
                  <Styles.ModifyDeleteBox>공유 삭제</Styles.ModifyDeleteBox>
                </Styles.ContentBox2>
                <Styles.ContentBox2>
                  <Styles.Imgheart>
                    {/* <LikeButton/> */}
                  </Styles.Imgheart>
                  <Styles.HeartSumText>300</Styles.HeartSumText>
                  <Styles.NameBox>{el[1].name}</Styles.NameBox>
                </Styles.ContentBox2>
              </Styles.ContentBox>
            </Styles.LineBox>
            {/* <Styles.LineBox>
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
                  <Styles.Imgheart>
                  
                  </Styles.Imgheart>
                  <Styles.HeartSumText>300</Styles.HeartSumText>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.ContentBox2>
              </Styles.ContentBox>
            </Styles.LineBox> */}
          </Styles.SmallBox>
          </id>
            )
          }))}
          <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
        </Styles.BigBox>
      </MarginTopWrapper>
      
    </>
  );
};
  
export default SharedPlan;