import React, { useEffect, useState } from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
import Paging from '../../../Components/paging';
import axios from 'axios';

const MyPlan = () => {
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
  return (
    <>
    <MyPage myPlanAction="myPlan"/>
    <MarginTopWrapper>
      <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>나의 플랜</Styles.Text>
          </Styles.Box>
              {/* {plan.map((el, idx => {return e}).map((el, idx) => {
                return(
                  <id key={idx}>
                    <Styles.SmallBox>
                      <Styles.LineBox>
                      <Styles.ImgBox src={`assets/image32.png`}/>
                      <Styles.ContentBox>
                        <Styles.ContentBox2>
                          <Styles.ContentText>{el.title}</Styles.ContentText>
                          <Styles.DayBox>{el.date}</Styles.DayBox>
                        </Styles.ContentBox2>
                        <Styles.ContentBox2>
                          <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                          <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                          <Styles.NameBox>{el.name}</Styles.NameBox>
                      </Styles.ContentBox2>
                    </Styles.ContentBox>
                    </Styles.LineBox>
                  </Styles.SmallBox>
                  </id>
                )
              }))} */}
          <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
        </Styles.BigBox>
    </MarginTopWrapper>
      
    </>
  );
};
  
export default MyPlan;