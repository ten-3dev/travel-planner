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
            <Styles.TravelWrapper2>
            <Styles.Bar2/>
            <Styles.TravelWrapper>
                <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                <Styles.Btn>+찜하기</Styles.Btn>
            </Styles.TravelWrapper>
            <Styles.Bar2/>
            <Styles.Bar2/>
            <Styles.TravelWrapper>
                <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                <Styles.Btn>+찜하기</Styles.Btn>
            </Styles.TravelWrapper>
            <Styles.Bar2/>
            <Styles.Bar2/>
            <Styles.TravelWrapper>
                <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                <Styles.Btn>+찜하기</Styles.Btn>
            </Styles.TravelWrapper>
            <Styles.Bar2/>
            <Styles.Bar2/>
            <Styles.TravelWrapper>
                <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                <Styles.Btn>+찜하기</Styles.Btn>
            </Styles.TravelWrapper>
            <Styles.Bar2/>
            <Styles.Bar2/>
            <Styles.TravelWrapper>
                <Styles.Img src={process.env.PUBLIC_URL + `assets/logo.png`}/>
                <Styles.Btn>+찜하기</Styles.Btn>
            </Styles.TravelWrapper>
            <Styles.Bar2/>
            </Styles.TravelWrapper2>
            

        </MarginTopWrapper>
      );
}
export default travelPage;