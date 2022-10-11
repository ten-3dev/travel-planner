import React,{ useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";

const SharedPlanPage = () =>{
    const [clicked, setClicked] = useState("Latest");
    const [page, setPage] = useState(1);
    const [itemsCount] = useState(6);
    const [totalItemsCount] = useState(50); // 임시

    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page, itemsCount]);

    return(
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
            <Styles.PlanBox>
                <Styles.PlanContentBox>
                    <Styles.PlanImg src={"assets/plan_ex1.png"}></Styles.PlanImg>
                    <Styles.ContentListBox>
                        <Styles.ContentBox>JD의 서울 여행</Styles.ContentBox>
                        <Styles.ContentBox>2022-03-21 - 2022-09-18</Styles.ContentBox>
                        <Styles.LikeListfontBox>
                            <Styles.LikefontBox>
                                <Styles.LikeImg src={"assets/hrr.png"}></Styles.LikeImg>
                                <Styles.ContentBox>1</Styles.ContentBox>
                            </Styles.LikefontBox>
                            <Styles.ContentBox>By.JD</Styles.ContentBox>
                        </Styles.LikeListfontBox>
                    </Styles.ContentListBox>
                </Styles.PlanContentBox>
                <Styles.PlanContentBox>
                    <Styles.PlanImg src={"assets/plan_ex1.png"}></Styles.PlanImg>
                    <Styles.ContentListBox>
                        <Styles.ContentBox>JD의 서울 여행</Styles.ContentBox>
                        <Styles.ContentBox>2022-03-21 - 2022-09-18</Styles.ContentBox>
                        <Styles.LikeListfontBox>
                            <Styles.LikefontBox>
                                <Styles.LikeImg src={"assets/hrr.png"}></Styles.LikeImg>
                                <Styles.ContentBox>1</Styles.ContentBox>
                            </Styles.LikefontBox>
                            <Styles.ContentBox>By.JD</Styles.ContentBox>
                        </Styles.LikeListfontBox>
                    </Styles.ContentListBox>
                </Styles.PlanContentBox>
                <Styles.PlanContentBox>
                    <Styles.PlanImg src={"assets/plan_ex1.png"}></Styles.PlanImg>
                    <Styles.ContentListBox>
                        <Styles.ContentBox>JD의 서울 여행</Styles.ContentBox>
                        <Styles.ContentBox>2022-03-21 - 2022-09-18</Styles.ContentBox>
                        <Styles.LikeListfontBox>
                            <Styles.LikefontBox>
                                <Styles.LikeImg src={"assets/hrr.png"}></Styles.LikeImg>
                                <Styles.ContentBox>1</Styles.ContentBox>
                            </Styles.LikefontBox>
                            <Styles.ContentBox>By.JD</Styles.ContentBox>
                        </Styles.LikeListfontBox>
                    </Styles.ContentListBox>
                </Styles.PlanContentBox>
                <Styles.PlanContentBox>
                    <Styles.PlanImg src={"assets/plan_ex1.png"}></Styles.PlanImg>
                    <Styles.ContentListBox>
                        <Styles.ContentBox>JD의 서울 여행</Styles.ContentBox>
                        <Styles.ContentBox>2022-03-21 - 2022-09-18</Styles.ContentBox>
                        <Styles.LikeListfontBox>
                            <Styles.LikefontBox>
                                <Styles.LikeImg src={"assets/hrr.png"}></Styles.LikeImg>
                                <Styles.ContentBox>1</Styles.ContentBox>
                            </Styles.LikefontBox>
                            <Styles.ContentBox>By.JD</Styles.ContentBox>
                        </Styles.LikeListfontBox>
                    </Styles.ContentListBox>
                </Styles.PlanContentBox>
                <Styles.PlanContentBox>
                    <Styles.PlanImg src={"assets/plan_ex1.png"}></Styles.PlanImg>
                    <Styles.ContentListBox>
                        <Styles.ContentBox>JD의 서울 여행</Styles.ContentBox>
                        <Styles.ContentBox>2022-03-21 - 2022-09-18</Styles.ContentBox>
                        <Styles.LikeListfontBox>
                            <Styles.LikefontBox>
                                <Styles.LikeImg src={"assets/hrr.png"}></Styles.LikeImg>
                                <Styles.ContentBox>1</Styles.ContentBox>
                            </Styles.LikefontBox>
                            <Styles.ContentBox>By.JD</Styles.ContentBox>
                        </Styles.LikeListfontBox>
                    </Styles.ContentListBox>
                </Styles.PlanContentBox>
                <Styles.PlanContentBox>
                    <Styles.PlanImg src={"assets/plan_ex1.png"}></Styles.PlanImg>
                    <Styles.ContentListBox>
                        <Styles.ContentBox>JD의 서울 여행</Styles.ContentBox>
                        <Styles.ContentBox>2022-03-21 - 2022-09-18</Styles.ContentBox>
                        <Styles.LikeListfontBox>
                            <Styles.LikefontBox>
                                <Styles.LikeImg src={"assets/hrr.png"}></Styles.LikeImg>
                                <Styles.ContentBox>1</Styles.ContentBox>
                            </Styles.LikefontBox>
                            <Styles.ContentBox>By.JD</Styles.ContentBox>
                        </Styles.LikeListfontBox>
                    </Styles.ContentListBox>
                </Styles.PlanContentBox>
            </Styles.PlanBox>
            <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
        </MarginTopWrapper>
    );
}
export default SharedPlanPage;