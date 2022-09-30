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
                <Styles.Btn>+찜하기</Styles.Btn>
                <Styles.ColorBar></Styles.ColorBar>
            </Styles.Contentbook>
        </MarginTopWrapper>

    );
}
export default Information;