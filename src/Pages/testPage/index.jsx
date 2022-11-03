import React from "react";
import * as Styles from './style'; // 원래 하나하나씩 불러올 수 있지만 많아지면 가독성이 떨어지기 때문에 Styles라는 별명을 붙여서 통일

const TestPage = () => { // 함수선언과 똑같음.. 이건 솔직히 중요한건 아니지만 걍 멋있어보였ㅇ...
    return(
        <Styles.Wrapper>이 페이지는 임시로 만들어진 페이지 입니다.</Styles.Wrapper> // style.js 에서 선언한 상수들을 여기서 태그로 사용
    )
}

export default TestPage;