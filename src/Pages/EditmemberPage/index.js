import React from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";

export const EditmemberPage = () => {
    return(
        <MarginTopWrapper margin>
            <Styles.EditTitle>회원정보수정</Styles.EditTitle>
            <Styles.TitleBar/>
        </MarginTopWrapper>
    );
}
export default EditmemberPage;