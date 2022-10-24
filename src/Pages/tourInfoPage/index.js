import React, { useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
// import {HeartOutlined, HeartFilled} from '@ant-design/icons';	
import Map from "../../Components/kakaoMap";
import Paging from "../../Components/paging";
import axios from "axios";


const InformationPage = () => {
    const [infoData, setInfoData] = useState();
    useEffect(() => {
        console.log(location);
        if(location.search === ""){
            alert("url이 잘못되었습니다.");
            history.back();
        }else{
            console.log(location.search.split("=")[1]);
            getTravelInfo(location.search.split("=")[1]);
        }
    }, [])

    const [content,setContent] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log(infoData);
    }, [infoData])

    const getTravelInfo = async (id) => {
        const response = await fetch(`https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.REACT_APP_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${id}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`)
        const json = await response.json();
        const data  = json.response.body.items.item;
        setInfoData(data[0]);
    }

    if(infoData === null){
        return null;
    }

    const type="T";
    const writing = async (id) => { //등록아직...
       if( window.confirm("등록하시겠습니까?")){
        try{
            await axios.post('http://localhost:8080/addComment',{id,content,type});
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
    },[])

    const getcontent = async () => {
        const data = await axios.get(`http://localhost:8080/getComment?id=${location.search.split("=")[1]}`)
        setComments(data.data.data.filter(e => e.type === "T"));
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
                <Styles.Like>+찜하기</Styles.Like>
            </Styles.LikeBox>
            <Styles.TopBar />
            <Styles.TitleImgBox>
                <Styles.Titleimage src={infoData?.firstimage === "" ? "assets/logo.png" : infoData?.firstimage} />
            </Styles.TitleImgBox>
            <Styles.InformationBox>
                <Styles.InformationTitle>상세정보</Styles.InformationTitle>
                <Styles.InformationBar />
                <Styles.InformationContnet>{infoData?.overview}</Styles.InformationContnet>
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
        </MarginTopWrapper>
    );
}
export default InformationPage;