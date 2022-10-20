import React, { useEffect, useState } from "react";
import * as Styles from './style';
import Paging from "../../Components/paging"

const Comment = (props) => {
    const [page, setPage] = useState(1); 
    const [itemsCount] = useState(10);
    const [totalItemsCount, setStotalItemCount] = useState(0); 

    
    return(
        <>
             <Styles.Comment>
                <Styles.Title>톡톡</Styles.Title>
                <Styles.CommentBox>
                    <Styles.ReviewBox>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>
                                만남은 쉽고 이별은 어려워
                                눈빛에 베일 듯 우린 날카로워
                                마침표를 찍고 난 조금 더 멀리 가려 해
                                만남은 쉽고 이별은 참 어려워
                                아직도 기억나 차 안의 공기가
                                처음 들었을 때 마음이 짜릿했던 뭔가가
                                6살이었지만 알았었지 뭔가 다르단 건
                                그렇게 쉽게 만나게 되는 거야 꿈이란 건
                                시간이 흘러서 이제 음악은 내 놀이가 됐고
                                듣고 따라만 부르기엔 내게는 뭔가 부족했어
                                그래서 실행에 옮겼지 방에서 혼자 꿈만 꾸던 모습
                                만남은 쉽고 이별은 어려워
                                눈빛에 베일 듯 우린 날카로워
                                마침표를 찍고 난 조금 더 멀리 가려 해
                                만남은 쉽고 이별은 참 어려워
                                아직도 기억나 차 안의 공기가
                                처음 들었을 때 마음이 짜릿했던 뭔가가
                                6살이었지만 알았었지 뭔가 다르단 건
                                그렇게 쉽게 만나게 되는 거야 꿈이란 건
                                시간이 흘러서 이제 음악은 내 놀이가 됐고
                                듣고 따라만 부르기엔 내게는 뭔가 부족했어
                                그래서 실행에 옮겼지 방에서 혼자 꿈만 꾸던 모습
                                만남은 쉽고 이별은 어려워
                                눈빛에 베일 듯 우린 날카로워
                                마침표를 찍고 난 조금 더 멀리 가려 해
                                만남은 쉽고 이별은 참 어려워
                                아직도 기억나 차 안의 공기가
                                처음 들었을 때 마음이 짜릿했던 뭔가가
                                6살이었지만 알았었지 뭔가 다르단 건
                                그렇게 쉽게 만나게 되는 거야 꿈이란 건
                                시간이 흘러서 이제 음악은 내 놀이가 됐고
                                듣고 따라만 부르기엔 내게는 뭔가 부족했어
                                그래서 실행에 옮겼지 방에서 혼자 꿈만 꾸던 모습
                                만남은 쉽고 이별은 어려워
                                눈빛에 베일 듯 우린 날카로워
                                마침표를 찍고 난 조금 더 멀리 가려 해
                                만남은 쉽고 이별은 참 어려워
                                아직도 기억나 차 안의 공기가
                                처음 들었을 때 마음이 짜릿했던 뭔가가
                                6살이었지만 알았었지 뭔가 다르단 건
                                그렇게 쉽게 만나게 되는 거야 꿈이란 건
                                시간이 흘러서 이제 음악은 내 놀이가 됐고
                                듣고 따라만 부르기엔 내게는 뭔가 부족했어
                                그래서 실행에 옮겼지 방에서 혼자 꿈만 꾸던 모습
                            </Styles.ReContent>
                            <Styles.ReDate>2022-10-11</Styles.ReDate>
                        </Styles.Review>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>내용</Styles.ReContent>
                            <Styles.ReDate>날짜</Styles.ReDate>
                        </Styles.Review>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>내용</Styles.ReContent>   
                            <Styles.ReDate>날짜</Styles.ReDate>
                        </Styles.Review>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>내용</Styles.ReContent>   
                            <Styles.ReDate>날짜</Styles.ReDate>
                        </Styles.Review>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>내용</Styles.ReContent>   
                            <Styles.ReDate>날짜</Styles.ReDate>
                        </Styles.Review>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>내용</Styles.ReContent>   
                            <Styles.ReDate>날짜</Styles.ReDate>
                        </Styles.Review>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>내용</Styles.ReContent>   
                            <Styles.ReDate>날짜</Styles.ReDate>
                        </Styles.Review>
                        <Styles.Review>
                            <Styles.RefirstBox>
                                <Styles.ReImage src="assets/myProfile.png"/>
                                <Styles.ReName>이름</Styles.ReName>
                            </Styles.RefirstBox>
                            <Styles.ReContent>내용</Styles.ReContent>   
                            <Styles.ReDate>날짜</Styles.ReDate>
                        </Styles.Review>
                        <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
                    </Styles.ReviewBox>
                    <Styles.InputBox>
                        <Styles.ReviewTextBox>
                            <Styles.ReviewText>리뷰남기기</Styles.ReviewText>
                        </Styles.ReviewTextBox>
                        <Styles.Profile src="assets/myProfile.png"/>
                        <Styles.InputComment placeholder="댓글 입력"/>
                        <Styles.InputBtn>등록</Styles.InputBtn>
                    </Styles.InputBox>
                </Styles.CommentBox>
            </Styles.Comment>
        </>
    )
}

export default Comment;