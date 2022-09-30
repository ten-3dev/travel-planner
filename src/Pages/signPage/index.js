import React from "react";
import * as Styles from './style';

const SignPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.ContentBox>
            <div>SIGN UP</div>
            <div>아이디
                비번
                비번확인
                이름
                이메일
                연락처
                생년월일
                성별
            </div>
            <div> 가입하기 버튼, 이전페이지 버튼</div>
            </Styles.ContentBox>
        </Styles.Wrapper>
    )
}

export default SignPage;