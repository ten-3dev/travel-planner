import React, { useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
// import {HeartOutlined, HeartFilled} from '@ant-design/icons';	
import Map from "../../Components/kakaoMap";
import Paging from "../../Components/paging";
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import axios from "axios";


const InformationPage = () => {
    const [infoData, setInfoData] = useState();
    useEffect(() => {
        if(location.search === ""){
            alert("url이 잘못되었습니다.");
            history.back();
        }else{    
            getTravelInfo(location.search.split("=")[1]);
        }
    }, [])

    const [content,setContent] = useState("");
    const [comments, setComments] = useState([]);
    const [dibs, setDibs] = useState(false); // 찜 이벤트를 할때마다 렌더링이 되지 않아 업데이트가 안됨 따라서 생성
    const [like, setLike] = useState([]);

    useEffect(() => {
        console.log(infoData);
    }, [infoData])

    const getTravelInfo = async (id) => {
        const response = await fetch(`https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${id}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`)
        const json = await response.json();
        const data  = json.response.body.items.item;
        const likeCount = await axios.get(`http://192.168.52.16:8080/getLikeCount/${data[0].contentid}`)
        setInfoData({...data[0], likeCount: likeCount.data.data});
    }

    if(infoData === null){
        return null;
    }

    const writing = async (id) => { //등록아직...
        if(!sessionStorage.getItem("access_token")){
            alert("로그인 후 이용해 주세요");
            return;
        }
       if( window.confirm("등록하시겠습니까?")){
        try{
            await axios.post('http://192.168.52.16:8080/addComment',{id,content,type: "T"});
            getcontent();
            alert("댓글 추가 성공");
            setContent("");

        }catch(e){
            alert(e.response.data.msg);
        }
    }
    }

    useEffect(() => {
        getcontent();
        getLikes();
    },[])

    const getcontent = async () => {
        const data = await axios.get(`http://192.168.52.16:8080/getComment?id=${location.search.split("=")[1]}`)
        setComments(data.data.data.filter(e => e.type === "T"));
    }

    // 상세 정보용 찜하기 기능
    const onDibs = () => {
        if(sessionStorage.getItem("dibs")){ // 세션 스토리지에 찜하기 스토리지가 있으면
            const dibs = sessionStorage.getItem("dibs").split(" ")
            const filterDibs = dibs.filter(id => id === location.search.split("=")[1]);
            if(filterDibs.length === 0){ // 현제 세션 스토리지 해당 값이 없으면     <<<<<<<<현제 x 현재 ㅎ
                sessionStorage.setItem("dibs", sessionStorage.getItem("dibs") + location.search.split("=")[1] + " ");
            }else{
                const dibs = sessionStorage.getItem("dibs");
                sessionStorage.setItem("dibs", dibs.replace(location.search.split("=")[1] + " ", ""));
            }
        }else{ // 없으면
            sessionStorage.setItem("dibs", location.search.split("=")[1] + " ");
        }
        setDibs(!dibs);
    }

    //좋아요 불러오기
    const getLikes = async () => {
        const data = await axios.post("http://192.168.52.16:8080/getLikes");
        if(data === undefined){
            getLikes();
        }else{
            setLike(data.data.data.filter(e => e.type === "T"));
        }
    }

    // 좋아요 추가
    const addLikes = async (id) => {
        try{
            if(like.filter(e => e.id === id).length){ // 있으면
                await axios.delete(`http://192.168.52.16:8080/removeLikes/${id}`)
                setInfoData({...infoData, likeCount: infoData.likeCount - 1})
            }else{
                await axios.post('http://192.168.52.16:8080/addLikes', {id: id, type: "T"})
                setInfoData({...infoData, likeCount: infoData.likeCount + 1})
            }
            getLikes();
        }catch(e){
            alert("로그인 후 이용해 주세요.");
        }
    }

    
    return(
        <MarginTopWrapper margin>
            <Styles.TitleBox>
                <Styles.Title>{infoData?.title}</Styles.Title>
            </Styles.TitleBox>
            <Styles.LikeBox>
                <Styles.Img1>
                    {/* <LikeButton/> */}
                </Styles.Img1>
                <Styles.HeartBox>
                    {like.filter(e => e.id === location.search.split("=")[1]).length ? 
                        <HeartFilled style={{ color: 'red', fontSize: '30px'}} onClick={() => addLikes(location.search.split("=")[1])}/> 
                        : 
                        <HeartOutlined  style={{ fontSize: '30px'}} onClick={() => addLikes(location.search.split("=")[1])}/>
                    }
                    <Styles.LikeCount>{infoData?.likeCount}</Styles.LikeCount>
                </Styles.HeartBox>
                <Styles.Like onClick={onDibs} dibs={
                        sessionStorage.getItem("dibs") 
                    ?
                        sessionStorage.getItem("dibs").split(" ").filter(id => id === location.search.split("=")[1]).length === 0 ? true : false
                    :
                        true
                    }>
                    {
                        sessionStorage.getItem("dibs")
                    ?
                        sessionStorage.getItem("dibs").split(" ").filter(id => id === location.search.split("=")[1]).length === 0 ? "+찜하기" : "-찜 취소"
                    :
                        "+찜하기"
                    }
                </Styles.Like>
            </Styles.LikeBox>
            <Styles.TopBar />
            <Styles.TitleImgBox>
                <Styles.Titleimage src={infoData?.firstimage === "" ? "assets/logo.png" : infoData?.firstimage} />
            </Styles.TitleImgBox>
            <Styles.InformationBox>
                <Styles.InformationTitle>상세정보</Styles.InformationTitle>
                <Styles.InformationBar />
                <Styles.InformationContnet><div dangerouslySetInnerHTML={{ __html: infoData?.overview }}></div></Styles.InformationContnet>
                <Styles.Map>
                    <Map lon = {infoData?.mapx} lat = {infoData?.mapy}/>
                </Styles.Map>
                <Styles.DetailedInforBox>
                    <Styles.DetaBox>
                        <Styles.DetaFontBox>
                            <Styles.DetaFont>● 전화번호</Styles.DetaFont>
                            <Styles.DetainforMation>{infoData?.tel === "" ? "조회하지 못함" : infoData?.tel}</Styles.DetainforMation>
                        </Styles.DetaFontBox>
                        <Styles.DetaFontBox>
                            <Styles.DetaFont>● 주소</Styles.DetaFont>
                            <Styles.DetainforMation>{infoData?.addr1+ " " + infoData?.addr2}</Styles.DetainforMation>
                        </Styles.DetaFontBox>
                        <Styles.DetaFontBox>
                            <Styles.DetaFont>● 우편주소</Styles.DetaFont>
                            <Styles.DetainforMation>{infoData?.zipcode}</Styles.DetainforMation>
                        </Styles.DetaFontBox>
                        <Styles.DetaFontBox>
                        <Styles.DetaFont>● 홈페이지</Styles.DetaFont>
                            <Styles.DetainfoRight><div dangerouslySetInnerHTML={{ __html: infoData?.homepage }}></div></Styles.DetainfoRight>
                        </Styles.DetaFontBox>
                    </Styles.DetaBox>
                </Styles.DetailedInforBox>
            </Styles.InformationBox>
            <Styles.Comment1>
                <Styles.Title1>톡톡</Styles.Title1>
                <Styles.CommentBox>
                    {comments.map((el, idx) => {
                        return(
                            <Styles.ReviewBox key={idx}>
                                <Styles.ReImage src={el.email.profileImg === ""  ? "assets/defaultProfile.png" : `http://192.168.52.16:8080/image/view?value=${el.email.profileImg}`}/>
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
                        <Styles.Profile1 src={sessionStorage.getItem("profileImg") ? `http://192.168.52.16:8080/image/view?value=${sessionStorage.getItem("profileImg")}` : "assets/defaultProfile.png"}/>
                        <Styles.InputComment placeholder="댓글 입력" onChange={(e) => setContent(e.target.value)} value={content || ''}/>
                        <Styles.InputBtn onClick={() => { writing(location.search.split("=")[1])}}>등록</Styles.InputBtn>
                    </Styles.InputBox>
                </Styles.CommentBox>
            </Styles.Comment1>
        </MarginTopWrapper>
    );
}
export default InformationPage;