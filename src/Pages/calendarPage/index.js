import React, { useState, useEffect } from "react"; 
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Map from "../../Components/kakaoMap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {HeartOutlined, HeartFilled} from '@ant-design/icons';

const CalendarPage = () =>{
    const navigate = useNavigate();
    const [dateList, setDateList ] = useState();
    const [coordinate, setCoordinate] = useState([]);
    const [mapMarker, setMapMarker] = useState([]); // 지도 of/off
    const [comments, setComments] = useState([]);
    const [content,setContent] = useState("");
    const [email, setEmail] = useState();
    const [like, setLike] = useState([]);

    useEffect(() => {
        if(location.search === ""){
            alert("url이 잘못되었습니다.");
            history.back();
        }else{
            sessionStorage.getItem("access_token") !== null ? getEmail() : "";  //  비로그인 시 (토큰없음) getEmail() 실행 X
            getcontent();   // 댓글 렌더링
            getUserPlanById(location.search.split("=")[1]);
        }
    },[])

    useEffect(() => {
        getLikes();
    },[])

    const getEmail = async () => { // DB에 있는 회원데이터를 불러옴
        const data = await axios.get('http://localhost:8080/getUserInfo');
        if(!data){
            getEmail();
        }else{
            setEmail(data.data.data.email);
        }
    }

    const getcontent = async () => {
        const data = await axios.get(`http://localhost:8080/getComment?id=${location.search.split("=")[1]}`)
        setComments(data.data.data.filter(e => e.type === "P"));
    }

    const getUserPlanById = async (id) => { // DB에 있는 플랜데이터
        const data = await axios.get(`http://localhost:8080/getPlansById/${id}`);
        if(data){
            setDateList(data.data.data);
            let count = 0;
            for(let i=0; i<JSON.parse(data.data.data.plan).length; i++){
                count += JSON.parse(data.data.data.plan)[i].list.length;
            }
            setMapMarker(Array(count).fill(false));
        }else{
            getUserPlanById(id);
        }
    }
    
    const moveMapLocation = (e, id) =>{
        const coor = e.target.value.split(',');
        const newCoor = {
            lat: coor[0], lon : coor[1]
        }
        const newArr = mapMarker.fill(false);
        newArr[id] = true;
        setCoordinate(newCoor);
        setMapMarker(newArr);
    }
    
    const writing = async (id) => { //등록아직...
        if(!sessionStorage.getItem("access_token")){
            alert("로그인 후 이용해 주세요");
            return;
        }
        if( window.confirm("등록하시겠습니까?")){
            try{
                await axios.post('http://localhost:8080/addComment',{id,content,type: "P"});
                getcontent();
                alert("댓글 추가 성공");
                setContent("");

            }catch(e){
                alert(e.response.data.msg);
            }
        }
    }
    
    const infoMove = (e) => {
    navigate(`/information?id=${e}`);
    }

    const onShareBtn = async () => {
        try{
            await axios.put('http://localhost:8080/updateSharePlan', {id: location.search.split("=")[1]})
            getUserPlanById(location.search.split("=")[1]);
        }catch(e){
            alert("사용자 본인만 이용할 수 있는 버튼 입니다.");
        }
    }

    const getLikes = async () => {
        const data = await axios.post("http://localhost:8080/getLikes");
        if(data === undefined){
            getLikes();
        }else{
            setLike(data.data.data.filter(e => e.type === "P"));
        }
    }

    const addLikes = async (id) => {
        try{
            if(like.filter(e => e.id == id).length){ // 있으면
                await axios.delete(`http://localhost:8080/removeLikes/${id}`)
            }else{
                await axios.post('http://localhost:8080/addLikes', {id: id, type: "P"})
            }
            getLikes();
        }catch(e){
            alert("로그인 후 이용해 주세요.");
        }
    }

    return(
        <>
            {dateList === undefined ? "" : 
            <>
                {console.log(JSON.parse(dateList.plan)[0].list[0].firstimage)}
                <Styles.ImageBox>
                    <Styles.Image src={JSON.parse(dateList.plan)[0].list[0].firstimage !== "" ? JSON.parse(dateList.plan)[0].list[0].firstimage : "assets/logo.png"}/>
                    <Styles.IntroTitle>
                        <Styles.IntroText>{dateList.title}</Styles.IntroText>
                        <Styles.IntroDate>{dateList.date.split("~")[0]+" - " + dateList.date.split("~")[1]}</Styles.IntroDate>
                    </Styles.IntroTitle>
                </Styles.ImageBox>
                <MarginTopWrapper>
                    <Styles.Wrapper>
                        <Styles.ContentBox>
                            <Styles.ShareBtnBox>
                                {console.log(like)}
                                {sessionStorage.getItem("access_token") !== null ? 
                                    (email !== dateList.email.email ? <div style={{height:"70px"}}/>
                                    :<Styles.ShareBtn open={dateList.type} onClick={onShareBtn}/>) 
                                : <div style={{height:"70px"}}/>}
                                {like.filter(e => e.id == dateList.id).length ? 
                                    <HeartFilled style={{ color: 'red', fontSize: '30px'}} onClick={() => addLikes(dateList.id)}/> 
                                    : 
                                    <HeartOutlined  style={{ fontSize: '30px'}} onClick={() => addLikes(dateList.id)}/>
                                }
                            </Styles.ShareBtnBox>
                            <Styles.Menu>
                                <Styles.Title>상세 정보</Styles.Title>
                                <Styles.Box>
                                    <Styles.PlanInfoList>
                                        {JSON.parse(dateList.plan).map((el, idx) => {
                                                return(
                                                    <div key={idx}>
                                                        {/* {console.log("day   "  + (idx+1))} */}
                                                            <Styles.DayList>
                                                                <Styles.Day>{"Day" + el.day}</Styles.Day>
                                                                <Styles.PlanInfoList>
                                                                    {el.list.length === 0 ? <Styles.Text><Styles.PlaceTitle>추가한 관광지가 없습니다.</Styles.PlaceTitle> </Styles.Text>
                                                                    : el.list.map( (day,id) =>{
                                                                        return(
                                                                            <div key={id}>
                                                                                {/* {console.log(JSON.parse(dateList.plan)[idx-1])}
                                                                                {console.log("id  " +  (id+1))}      */}
                                                                                <Styles.PlaceInfo>
                                                                                <Styles.PlanImage src= {day?.firstimage2 === "" ? "assets/logo.png" : day?.firstimage2} onClick={() => {infoMove(day.contentid)}}/>
                                                                                <Styles.Text>
                                                                                    <Styles.PlaceTitle onClick={() => {infoMove(day.contentid)}}>{day.title}</Styles.PlaceTitle>
                                                                                    <Styles.Content>{day.addr1} </Styles.Content> 
                                                                                </Styles.Text>
                                                                                <Styles.MapBtnBox open={mapMarker[id]} value={[day.mapy, day.mapx]} onClick={(e) => moveMapLocation(e,id)}/>
                                                                                </Styles.PlaceInfo>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </Styles.PlanInfoList>
                                                            </Styles.DayList>
                                                    </div>
                                                )
                                            })}
                                    </Styles.PlanInfoList>
                                    <Styles.MapBox>
                                        <Map lon = {coordinate.lon} lat = {coordinate.lat}/>
                                    </Styles.MapBox>
                                </Styles.Box>
                            </Styles.Menu>
                            {dateList.type === 0 ? <Styles.Comment1></Styles.Comment1>:
                            <>
                            <Styles.Comment1>
                                <Styles.Title1>톡톡</Styles.Title1>
                                <Styles.CommentBox>
                                    {comments.map((el, idx) => {
                                        return(
                                            <Styles.ReviewBox key={idx}>
                                                <Styles.ReImage src={el.email.profileImg === "" ? "assets/defaultProfile.png" : el.email.profileImg}/>
                                                <Styles.RefirstBox>
                                                    <Styles.ReName>{el?.email?.name}</Styles.ReName>
                                                    <Styles.ReDate>{el?.date}</Styles.ReDate>
                                                    <Styles.ReContent>{el?.content}</Styles.ReContent>   
                                                </Styles.RefirstBox>
                                            </Styles.ReviewBox>
                                        )
                                    })}
                                    <Styles.InputBox>
                                        <Styles.ReviewTextBox>
                                            <Styles.ReviewText>댓글 남기기</Styles.ReviewText>
                                        </Styles.ReviewTextBox>
                                        {/* api 때려서 넣을거임 */}
                                        <Styles.Profile1 src="assets/myProfile.png"/>
                                        <Styles.InputComment placeholder="댓글 입력" onChange={(e) => setContent(e.target.value)} value={content || ''}/>
                                        <Styles.InputBtn onClick={() => { writing(location.search.split("=")[1])}}>등록</Styles.InputBtn>
                                    </Styles.InputBox>
                                </Styles.CommentBox>
                            </Styles.Comment1>
                            </>}
                        </Styles.ContentBox>
                    </Styles.Wrapper>
                </MarginTopWrapper>
            </>
            }
        </>
    )
}
export default CalendarPage;