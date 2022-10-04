import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

const MyPage = () => {
    return (
        <MarginTopWrapper margin>
            <Styles.ProfileBox>
                <Styles.SettingBox>
                    <Styles.Profile src={`assets/임시프로필사진.png`}/>
                    <Styles.Setting src={`assets/settings.png`}/>
                </Styles.SettingBox>
                <Styles.Text>tetrisGosu</Styles.Text>
            </Styles.ProfileBox>
            <Styles.MyWritingBox>
                <Styles.Box>
                    <Styles.Box1>내가 쓴 댓글</Styles.Box1>
                    <Styles.Box1>3</Styles.Box1>
                </Styles.Box>
                <Styles.Box>
                    <Styles.Box1>나의 플랜</Styles.Box1>
                    <Styles.Box1>7</Styles.Box1>
                </Styles.Box>
                <Styles.Box2>
                    <Styles.Box1>공유한 플랜</Styles.Box1>
                    <Styles.Box1>2</Styles.Box1>
                </Styles.Box2>
            </Styles.MyWritingBox>
            <Styles.CommentsBox2>
                <Styles.MyComments>내가 쓴 댓글</Styles.MyComments>
                <Styles.CommentsBox1>
                    <Styles.Img src={`assets/plan_ex1.png`}/>
                    <Styles.CommentsBox>
                        <Styles.Text2>김광석 길(대구)</Styles.Text2>
                        <Styles.Text1>볼거 1도 없음..가지마셈..</Styles.Text1>
                        <Styles.Text2>★ ★ ★ ★</Styles.Text2>
                    </Styles.CommentsBox>
                    <Styles.Text3>1995-05-09</Styles.Text3>
                </Styles.CommentsBox1>
                <Styles.CommentsBox1>
                    <Styles.Img src={`assets/plan_ex1.png`}/>
                    <Styles.CommentsBox>
                        <Styles.Text2>김광석 길(대구)</Styles.Text2>
                        <Styles.Text1>볼거 1도 없음..가지마셈..</Styles.Text1>
                        <Styles.Text2>★ ★ ★ ★</Styles.Text2>
                    </Styles.CommentsBox>
                    <Styles.Text3>1995-05-09</Styles.Text3>
                </Styles.CommentsBox1>
                <Styles.CommentsBox1>
                    <Styles.Img src={`assets/plan_ex1.png`}/>
                    <Styles.CommentsBox>
                        <Styles.Text2>김광석 길(대구)</Styles.Text2>
                        <Styles.Text1>볼거 1도 없음..가지마셈..</Styles.Text1>
                        <Styles.Text2>★ ★ ★ ★</Styles.Text2>
                    </Styles.CommentsBox>
                    <Styles.Text3>1995-05-09</Styles.Text3>
                </Styles.CommentsBox1>
                <Styles.Text3> 1 2 3 4 </Styles.Text3>
            </Styles.CommentsBox2>
            <Styles.CommentsBox2>
                <Styles.MyComments>나의 여행 일정</Styles.MyComments>
                <Styles.CommentsBox1>
                    <Styles.PlanImg src={`assets/image32.png`}/>
                    <Styles.CommentsBox>
                        <Styles.Text2>대구</Styles.Text2>
                        <Styles.PlanText>풀네임: 외톨이 여행</Styles.PlanText>
                        <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                    </Styles.CommentsBox>
                    <Styles.CommentsBox>
                        <Styles.PeriodText>2022-10-03 ~ 2022-10-04</Styles.PeriodText>
                        <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                    </Styles.CommentsBox>
                </Styles.CommentsBox1>
                <Styles.CommentsBox1>
                    <Styles.PlanImg src={`assets/image32.png`}/>
                    <Styles.CommentsBox>
                        <Styles.Text2>대구</Styles.Text2>
                        <Styles.PlanText>풀네임: 외톨이 여행</Styles.PlanText>
                        <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                    </Styles.CommentsBox>
                    <Styles.CommentsBox>
                        <Styles.PeriodText>2022-10-03 ~ 2022-10-04</Styles.PeriodText>
                        <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                    </Styles.CommentsBox>
                </Styles.CommentsBox1>
                <Styles.CommentsBox1>
                    <Styles.PlanImg src={`assets/image32.png`}/>
                    <Styles.CommentsBox>
                        <Styles.Text2>대구</Styles.Text2>
                        <Styles.PlanText>풀네임: 외톨이 여행</Styles.PlanText>
                        <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                    </Styles.CommentsBox>
                    <Styles.CommentsBox>
                        <Styles.PeriodText>2022-10-03 ~ 2022-10-04</Styles.PeriodText>
                        <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                    </Styles.CommentsBox>
                </Styles.CommentsBox1>
                <Styles.Text3> 1 2 3 4 </Styles.Text3>
            </Styles.CommentsBox2>
            <Styles.CommentsBox2>
                <Styles.MyComments>나의 공유 플랜</Styles.MyComments>
                <Styles.CommentsBox1>
                    <Styles.PlanImg src={`assets/image32.png`}/>
                    <Styles.MySharingPlanBox>
                        <Styles.Box3>
                            <Styles.Text4>서울 여행</Styles.Text4>
                            <Styles.Text4>2022-09-24 ~ 2022-09-26</Styles.Text4> 
                        </Styles.Box3>
                        <Styles.Box4>
                            <Styles.Img1 src={"assets/hrr.png"}/>
                            <Styles.Text1>1</Styles.Text1>
                            <Styles.Text5>By.JH</Styles.Text5>
                        </Styles.Box4>
                    </Styles.MySharingPlanBox>
                </Styles.CommentsBox1>
                <Styles.CommentsBox1>
                    <Styles.PlanImg src={`assets/image32.png`}/>
                    <Styles.MySharingPlanBox>
                        <Styles.Box3>
                            <Styles.Text4>서울 여행</Styles.Text4>
                            <Styles.Text4>2022-09-24 ~ 2022-09-26</Styles.Text4> 
                        </Styles.Box3>
                        <Styles.Box4>
                            <Styles.Img1 src={"assets/hrr.png"}/>
                            <Styles.Text1>1</Styles.Text1>
                            <Styles.Text5>By.JH</Styles.Text5>
                        </Styles.Box4>
                    </Styles.MySharingPlanBox>
                </Styles.CommentsBox1>
                <Styles.Text3> 1 2 3 4 </Styles.Text3>
            </Styles.CommentsBox2>
        </MarginTopWrapper>
    )
}

export default MyPage;