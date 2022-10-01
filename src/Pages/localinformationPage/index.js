import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

const Information = () => {
    return(
        <MarginTopWrapper margin>
            <Styles.Contentbook>
                <Styles.Title>
                    관광지이름(임시)
                </Styles.Title>
                <Styles.Hrr1>
                    <Styles.Img1 src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Img1>
                </Styles.Hrr1>
                <Styles.Btn>+찜하기</Styles.Btn>
                <Styles.ColorBar2></Styles.ColorBar2>
                <Styles.Hrr2>
                    <Styles.Img2 src={process.env.PUBLIC_URL + "assets/baka.png"}></Styles.Img2>
                </Styles.Hrr2>
                <Styles.Cont>
                    <Styles.Infor1>
                    상세정보
                    </Styles.Infor1>
                    <Styles.ColorBar1></Styles.ColorBar1>
                    <Styles.Infor2>
                    제 1 관광명소 남산서울타워
                    국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                    최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                    </Styles.Infor2>
                    <Styles.Infor3>
                    [출처: 쮸짱이의 브이로그 히힛]
                    </Styles.Infor3>
                    <Styles.Hrr3>
                        <Styles.Img3 src={process.env.PUBLIC_URL + "assets/임시지도.png"} ></Styles.Img3>
                    </Styles.Hrr3>
                    <Styles.Hrr4>
                        <Styles.Img4 src={process.env.PUBLIC_URL + "assets/임시내용.png"}></Styles.Img4>
                    </Styles.Hrr4>
                    <Styles.Infor4>톡톡</Styles.Infor4>
                    <Styles.ColorBar1></Styles.ColorBar1>
                    <Styles.Cont2>
                        <Styles.CoBar3></Styles.CoBar3>
                        <Styles.Infor5>응원메시지</Styles.Infor5>
                        <Styles.Im5 src={process.env.PUBLIC_URL + "assets/임시프로필사진.png"} ></Styles.Im5>
                        <Styles.Input placeholder="소중한댓글을 남겨주세요."></Styles.Input>
                        <Styles.Btn2>글쓰기</Styles.Btn2>
                    </Styles.Cont2>
                </Styles.Cont>
        
            </Styles.Contentbook>
        </MarginTopWrapper>

    );
}
export default Information;