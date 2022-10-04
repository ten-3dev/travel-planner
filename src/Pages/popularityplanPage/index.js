import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

const PopulanityPage = () =>{
    return(
        <MarginTopWrapper margin>
            <Styles.TitleBox>
                <Styles.Title>
                    인기 플랜
                </Styles.Title>
            </Styles.TitleBox>
            <Styles.TopBar/>
            <Styles.PlanBox>
                플랜 내용 및 사진 넣기
            </Styles.PlanBox>
        </MarginTopWrapper>
    );
}
export default PopulanityPage;