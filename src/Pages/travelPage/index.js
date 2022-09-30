import React from "react";
import * as Styles from './style';
import Header from "../../Components/header";
import { MarginTopWrapper } from "../../Common/style";


const travelPage = () => {
    return (
        <MarginTopWrapper margin>
          <Styles.InputBox>
                    <Styles.Input placeholder="검색하세요."/>
                </Styles.InputBox>
       </MarginTopWrapper>
      );
}
export default travelPage;