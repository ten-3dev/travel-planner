import styled from "styled-components"; // 먼저 styled-components 라이브러리를 사용할 것이기 때문에 import 해준다.

export const Wrapper = styled.div`
    width: 100%;
    background-color: aliceblue;
    margin-top: 20px;
    text-align: center;
`

// Wrapper 설명
// export = export를 붙여야만 다른 파일에서 사용해야합니다.
// const = 상수란 의미
// Wrapper = 상수 이름임 암거나 해도 됨     예) Background, Input, Title
// styled.div = styled-components 중에 div태그를 사용한다는 의미