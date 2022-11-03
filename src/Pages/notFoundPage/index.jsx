import React from "react";
import { MarginTopWrapper } from '../../Common/style';
import * as Styles from './style';

const NotFoundPage = () => {
    return(
        <MarginTopWrapper margin>
            <Styles.Wrapper>
                <Styles.ErrorCode>404</Styles.ErrorCode>
                <Styles.ErrorContent>페이지를 찾을 수 없습니다.</Styles.ErrorContent>
                <Styles.Button to={"/"}>HOME</Styles.Button>
            </Styles.Wrapper>
        </MarginTopWrapper>
    )
}

export default NotFoundPage;