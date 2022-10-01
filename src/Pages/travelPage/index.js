import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";


const travelPage = () => {
    return (
        <MarginTopWrapper margin>
            <Styles.InputBox>
                <Styles.Input placeholder="검색하세요."/>
            </Styles.InputBox>
            <Styles.Bar/>
            <h2>69건 임시</h2>
            <Styles.ContentBox>
                <Styles.TravelWrapper2>
                    <Styles.Bar2/>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.BtnBox>
                            <Styles.Img1 src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Img1>
                            <Styles.Btn>+찜하기</Styles.Btn>
                        </Styles.BtnBox>  
                    </Styles.TravelWrapper>
                    <Styles.Bar2/>
                    <Styles.Bar2/>
                    <Styles.TravelWrapper>
                        <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                        <Styles.BtnBox>
                            <Styles.Img1 src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Img1>
                            <Styles.Btn>+찜하기</Styles.Btn>
                        </Styles.BtnBox>
                    </Styles.TravelWrapper>
                    <Styles.Bar2/>
                    <Styles.Bar2/>
                    <Styles.TravelWrapper>
                        <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                        <Styles.BtnBox>
                            <Styles.Img1 src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Img1>
                            <Styles.Btn>+찜하기</Styles.Btn>
                        </Styles.BtnBox>
                    </Styles.TravelWrapper>
                    <Styles.Bar2/>
                    <Styles.Bar2/>
                    <Styles.TravelWrapper>
                        <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                        <Styles.BtnBox>
                            <Styles.Img1 src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Img1>
                            <Styles.Btn>+찜하기</Styles.Btn>
                        </Styles.BtnBox>
                    </Styles.TravelWrapper>
                    <Styles.Bar2/>
                    <Styles.Bar2/>
                    <Styles.TravelWrapper>
                        <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                        <Styles.BtnBox>
                            <Styles.Img1 src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Img1>
                            <Styles.Btn>+찜하기</Styles.Btn>
                        </Styles.BtnBox>
                    </Styles.TravelWrapper>
                    <Styles.Bar2/>
                </Styles.TravelWrapper2>
                <Styles.TravelWrapper4>
                    <Styles.Text>필터</Styles.Text>
                    <Styles.TravelWrapper3>
                    
                    </Styles.TravelWrapper3>
                </Styles.TravelWrapper4>
                
            </Styles.ContentBox>

        </MarginTopWrapper>
      );
}
export default travelPage;