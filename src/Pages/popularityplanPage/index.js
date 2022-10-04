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
                <Styles.PlanContentBox>
                    첫번째
                </Styles.PlanContentBox>
                <Styles.PlanContentBox>
                    두번째
                </Styles.PlanContentBox>
                <Styles.PlanContentBox>
                    세번째
                </Styles.PlanContentBox>
            </Styles.PlanBox>
            
            <Styles.PlansecondBox>
                <Styles.PlansecondContentBox>
                    네번째
                </Styles.PlansecondContentBox>
                <Styles.PlansecondContentBox>
                    다섯번째
                </Styles.PlansecondContentBox>
                <Styles.PlansecondContentBox>
                    여섯번째
                </Styles.PlansecondContentBox>
            </Styles.PlansecondBox>

        </MarginTopWrapper>
    );
}
export default PopulanityPage;