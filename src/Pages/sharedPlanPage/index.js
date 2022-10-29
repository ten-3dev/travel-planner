import React,{ useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";
import axios from 'axios';

const SharedPlanPage = () =>{
    const [clicked, setClicked] = useState("Latest");
    const [page, setPage] = useState(1);
    const [itemsCount] = useState(6);
    const [totalItemsCount] = useState(50); // 임시
    const [plan, setPlan] = useState();

    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page, itemsCount]);

    useEffect(() => {
        getUserPlan(); 
    },[]);
    
      const getUserPlan = async () => { // DB에 있는 플랜데이터 
        const data = await axios.get('http://localhost:8080/getShareMyPlan');
        if(!data){
            getUserPlan();
        }else{
          console.log(data.data.data);
         
          setPlan(Object.entries(data.data.data));
        }
      }

    return(
        < >
        <MarginTopWrapper margin>
            <Styles.TitleBox>
                <Styles.Title>
                    공유된 플랜
                </Styles.Title>
            </Styles.TitleBox>
            <Styles.LatestpopularBox>
                <Styles.LatestBtn click={clicked === "Latest"} onClick={() => setClicked("Latest")}>최신순</Styles.LatestBtn>
                <Styles.Sign>|</Styles.Sign>
                <Styles.PopularBtn click={clicked === "Popular"} onClick={() => setClicked("Popular")}>인기순</Styles.PopularBtn>
            </Styles.LatestpopularBox>
            <Styles.TopBar/>
            {plan === undefined ? "" : (plan.map((el, idx) => {
                 return(
            <Styles.PlanBox key={idx}>
                <Styles.PlanContentBox>
                    <Styles.PlanImg src={JSON.parse(el[1].plan)[0].list[0].firstimage2  === "" ? "assets/logo.png" : JSON.parse(el[1].plan)[0].list[0].firstimage2}></Styles.PlanImg>
                    <Styles.ContentListBox>
                        <Styles.ContentBox>{el[1].title}</Styles.ContentBox>
                        <Styles.ContentBox>{el[1].date}</Styles.ContentBox>
                        <Styles.LikeListfontBox>
                            <Styles.LikefontBox>
                                <Styles.LikeImg src={"assets/heart.png"}></Styles.LikeImg>
                                <Styles.ContentBox>1</Styles.ContentBox>
                            </Styles.LikefontBox>
                            <Styles.ContentBox>{el[1].name}</Styles.ContentBox>
                            
                        </Styles.LikeListfontBox>
                    </Styles.ContentListBox>
                </Styles.PlanContentBox>
            </Styles.PlanBox>
                 )
            }))}
            <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
            
        </MarginTopWrapper>
        </>
    )
}
export default SharedPlanPage;