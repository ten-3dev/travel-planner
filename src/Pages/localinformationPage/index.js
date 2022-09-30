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
                <Styles.Hrr>
                    <Styles.Img src={process.env.PUBLIC_URL + "assets/hrr.png"}></Styles.Img>
                </Styles.Hrr>
                <Styles.Btn>+찜하기</Styles.Btn>
                <Styles.ColorBar></Styles.ColorBar>
                <Styles.Hee>
                    <Styles.Baka src={process.env.PUBLIC_URL + "assets/baka.png"}></Styles.Baka>
                </Styles.Hee>
                <Styles.Mating>
                    상세정보
                </Styles.Mating>
                <Styles.ColorBar1></Styles.ColorBar1>
                <Styles.MMatin>
                제 1 관광명소 남산서울타워
                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                </Styles.MMatin>
            </Styles.Contentbook>
        </MarginTopWrapper>

    );
}
export default Information;