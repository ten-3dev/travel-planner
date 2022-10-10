import React from "react";
import * as Styles from './style';

const Pagination = ({allDataArr, setinitNum}) => {
    // const [nowNum, setNowNum] = useState();
    return(
        <Styles.Wrapper>
            
        </Styles.Wrapper>
    )
}

export default Pagination;


// 1. 먼저 useEffect 로 총 데이터 갯수를 가져와야함
// 2. 가져오고 만약에 6개만 들고올거면 useState에 가져올 수랑 몇부터(초기값) 가져올 껀지 선언
// 3. 현재 페이지네이션이 몇인지 알기 위해 useState 선언
// 페이지네이션을 클릭을 하면, 3번이 업데이트되고, 클릭해서 2번도 업데이트가 되면 useEffect가 잡아서 다시 api호출

// const [cutProduct] = useState(6); // 몇개 가져올지 선언
// const [initNum, setInitNum] = useSatte(1) // 몇부터 시작할지 선언
// const [nowNum, setNowNum] = useState(1) // 현재 자기가 몇번째 페이지인지 알기 위해 선언 // 참고로 예는 pagination/index.js 에 있어야하는거임 (그니깐 여기)

// useEffect(() => {
//     const data = [] // 임시 api 호출
// }, [initNum]) // initNum이 변경되면 useEffect 호출

// 위처럼 선언해두고 만약 페이지네이션을 클릭 했으면 먼저 setNowNum으로 변경을 시킨 후
// 다른 페이지에서 props로 받아온 setInitNum을 변경을 시킴.

// 그럼 다른 페이지에서는 initNum을 변경할때마다 실행되는 useEffect를 선언해서 다시 api를 호출시킴