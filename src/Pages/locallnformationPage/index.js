import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

const InformationPage = () => {
    return(
        <MarginTopWrapper margin>
            <Styles.TitleBox>
                <Styles.Title>
                    관광지이름(임시)
                </Styles.Title>
            </Styles.TitleBox>
            <Styles.LikeBox>
                <Styles.Img1 src={"assets/hrr.png"}></Styles.Img1>
                <Styles.Like>+찜하기</Styles.Like>
            </Styles.LikeBox>
            <Styles.TopBar />
            <Styles.TitleImgBox>
                <Styles.Titleimage src={"assets/baka.png"}></Styles.Titleimage>
            </Styles.TitleImgBox>
            <Styles.InformationBox>
                <Styles.InformationTitle>
                    상세정보
                </Styles.InformationTitle>
                <Styles.InformationBar />
            <Styles.InformationContnet>
                제 1 관광명소 남산서울타워
                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
            </Styles.InformationContnet>
            <Styles.Sources>
            [출처: 쮸짱이의 브이로그 히힛]
            </Styles.Sources>
            <Styles.Map>지도</Styles.Map>
            <Styles.DetailedInforBox>
                <Styles.DetaBox>
                    <Styles.DetaFontBox>
                        <Styles.DetaFont>● 문의 및 안내</Styles.DetaFont>
                        <Styles.DetainforMation>043-844-0741</Styles.DetainforMation>
                    </Styles.DetaFontBox>

                    <Styles.DetaFontBox>
                        <Styles.DetaFont>● 주소</Styles.DetaFont>
                        <Styles.DetainforMation>충청북도 충주시 양성면 가곡로 1434</Styles.DetainforMation>
                    </Styles.DetaFontBox>

                    <Styles.DetaFontBox>
                        <Styles.DetaFont>● 휴일</Styles.DetaFont>
                        <Styles.DetainforMation>매주 월요일 휴관(공휴일 월요일 제외)</Styles.DetainforMation>
                    </Styles.DetaFontBox>

                    <Styles.DetaFontBox>
                        <Styles.DetaFont>● 이용요금</Styles.DetaFont>
                        <Styles.DetainforMation>대인 32123원</Styles.DetainforMation>
                    </Styles.DetaFontBox>

                    <Styles.DetaFontBox>
                        <Styles.DetaFont/>
                            <Styles.DetainforMation>소인32123원</Styles.DetainforMation>
                    </Styles.DetaFontBox>

                    <Styles.DetaFontBox>
                        <Styles.DetaFont>● 장애인주차요금</Styles.DetaFont>
                        <Styles.DetainforMation>장애인 주차장있음,무장애 편의시설</Styles.DetainforMation>
                    </Styles.DetaFontBox>

                    <Styles.DetaFontBox>
                        <Styles.DetaFont>● 휠체어</Styles.DetaFont>
                        <Styles.DetainforMation>대여가능(100대)</Styles.DetainforMation>
                    </Styles.DetaFontBox>
                </Styles.DetaBox>
                <Styles.DetaBoxrightBox>
                    <Styles.DetaFontrightBox>
                        <Styles.DetaFont>● 홈페이지</Styles.DetaFont>
                        <Styles.DetainfoRight>043-844-0741</Styles.DetainfoRight>
                    </Styles.DetaFontrightBox>
                    <Styles.DetaFontrightBox>
                        <Styles.DetaFont>● 이용시간</Styles.DetaFont>
                        <Styles.DetainfoRight>충청북도 충주시 양성면 가곡로 1434</Styles.DetainfoRight>
                    </Styles.DetaFontrightBox>
                    <Styles.DetaFontrightBox>
                        <Styles.DetaFont>● 주차</Styles.DetaFont>
                        <Styles.DetainfoRight>매주 월요일 휴관(공휴일 월요일 제외)</Styles.DetainfoRight>
                    </Styles.DetaFontrightBox>
                    <Styles.DetaFontrightBox>
                        <Styles.DetaFont>● 출입통로</Styles.DetaFont>
                        <Styles.DetainfoRight>대인 32123원</Styles.DetainfoRight>
                    </Styles.DetaFontrightBox>
                    <Styles.DetaFontrightBox>
                        <Styles.DetaFont>● 접근로</Styles.DetaFont>
                        <Styles.DetainfoRight>장애인 주차장있음,무장애 편의시설</Styles.DetainfoRight>
                    </Styles.DetaFontrightBox>
                    </Styles.DetaBoxrightBox>
                </Styles.DetailedInforBox>
                <Styles.Talk>톡톡</Styles.Talk>
                <Styles.InformationBar />
                <Styles.TalkMessageBox>
                    <Styles.MessageCommentsBox>
                        <Styles.MessageCommentBox>
                            <Styles.MessageCommentIcon />
                                <Styles.Comment>데이트코스로 너무 좋아요!</Styles.Comment>
                                <Styles.Days>2022.06.24</Styles.Days>
                        </Styles.MessageCommentBox>
                        <Styles.MessageCommentBox>
                            <Styles.MessageCommentIcon />
                            <Styles.Comment>가지마셈 ㅈㄴ 불친절</Styles.Comment>
                            <Styles.Days>2022.06.24</Styles.Days>
                        </Styles.MessageCommentBox>
                        <Styles.MessageCommentBox>
                            <Styles.MessageCommentIcon />
                            <Styles.Comment>너무 피곤해 잠온다</Styles.Comment>
                            <Styles.Days>2022.06.24</Styles.Days>
                        </Styles.MessageCommentBox>
                    </Styles.MessageCommentsBox>
                    <Styles.MymessageBox>
                        <Styles.Reviewcomment>
                            <Styles.Msg>리뷰쓰기</Styles.Msg>
                        </Styles.Reviewcomment>
                        <Styles.MyWriting>
                            <Styles.Profile src={"assets/임시프로필사진.png"} ></Styles.Profile>
                            <Styles.MessageInput placeholder="소중한댓글을 남겨주세요."></Styles.MessageInput>
                            <Styles.MessageBtn>글쓰기</Styles.MessageBtn>
                        </Styles.MyWriting>
                    </Styles.MymessageBox>
                </Styles.TalkMessageBox>
            </Styles.InformationBox>
        </MarginTopWrapper>
    );
}
export default InformationPage;