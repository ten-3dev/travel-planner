import React, { useEffect, useState } from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";
import Paging from '../../../Components/paging';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { set } from 'react-hook-form';

const MyPlan = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState();

  useEffect(() => {
    getUserPlan();

}, []);

  const getUserPlan = async () => { // DB에 있는 플랜데이터 
    const data = await axios.get('http://localhost:8080/getUserPlan');
    if(!data){
        getUserPlan();
    }else{
      const planArr = Object.entries(data.data.data);
      setPlan(planArr);
    }
  }

  const deleteUserPlan = async (id) => {
    if(window.confirm("삭제하시겠습니까?")){
      await axios.delete(`http://localhost:8080/deleteUserPlan/${id}`);
      getUserPlan();
    }
  }

  const infoMove = (e) => {
    navigate(`/calendar?id=${e.id}`);
  }

  const onPlanEdit = (el) => {
    console.log(el);
    navigate('/createPlanPage', {state: {updateData : el[1], date: el[1].date}})
  }

  return (
    <>
    <MyPage myPlanAction="myPlan"/>
    <MarginTopWrapper>
      <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>나의 플랜</Styles.Text>
          </Styles.Box>
              {plan === undefined ? "" : (plan.map((el, idx) => {
                return(
                  <div key={idx}>
                    <Styles.SmallBox>
                      <Styles.LineBox>
                      <Styles.ImgBox src= {JSON.parse(el[1].plan)[0].list[0].firstimage2  === "" ? "assets/logo.png" : JSON.parse(el[1].plan)[0].list[0].firstimage2}/> 
                      <Styles.ContentBox>
                        <Styles.ContentBox2>
                          <Styles.ContentText>{el[1].title}</Styles.ContentText>
                          <Styles.DayBox>{el[1].date}</Styles.DayBox>
                        </Styles.ContentBox2>
                        <Styles.ContentBox2>
                          <Styles.ModifyDeleteBox onClick={() => {infoMove(el[1])}}>일정 보기</Styles.ModifyDeleteBox>
                          <Styles.ModifyDeleteBox onClick={() => onPlanEdit(el)}>일정 수정</Styles.ModifyDeleteBox>
                          <Styles.ModifyDeleteBox onClick={() => {deleteUserPlan(el[1].id)}}>일정 삭제</Styles.ModifyDeleteBox>
                          <Styles.NameBox>{el[1].name}</Styles.NameBox>
                      </Styles.ContentBox2>
                    </Styles.ContentBox>
                    </Styles.LineBox>
                  </Styles.SmallBox>
                  </div>
                )
              }))}
        </Styles.BigBox>
    </MarginTopWrapper>
      
    </>
  );
};
  
export default MyPlan;