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

    const [page, setPage] = useState(1); 
    const [itemsCount] = useState(10);
    const [totalItemsCount] = useState(0);
    // const [email,setEmail] = useState("");
    const [content,setContent] = useState("");
    // const [name,setName] = useState("");
    // const [day, setDay] = useState("");
 
    
    // useEffect (() => {

    // })
    // const getcontent = async () => { //조회 아직 ..
    //     const data = await axios.get('http://localhost:8080/getComment');

    // }
    


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
            alert("댓글 추가 성공");

        }catch(e){
            alert(e.response.data.msg);
        }
    }
    }


    const [email, setEmail] = useState("");
    useEffect(() => { // 제일 처음에 실행하는 애 
        getData();
       
    },[])
    const getData = async (id) => { // DB에 있는 회원데이터를 불러옴
        const data = await axios.get('http://localhost:8080/getComment',{id});
        
        console.log(data);
            
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
                    <Styles.ReviewBox>
                            <Styles.ReImage src="assets/myProfile.png"/>
                            <Styles.RefirstBox>
                                <Styles.ReName>김지수</Styles.ReName>
                                <Styles.ReDate>2022-09-18</Styles.ReDate>
                                <Styles.ReContent>{content}</Styles.ReContent>   
                            </Styles.RefirstBox>
                    </Styles.ReviewBox>
                    <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
                    <Styles.InputBox>
                        <Styles.ReviewTextBox>
                            <Styles.ReviewText>리뷰남기기</Styles.ReviewText>
                        </Styles.ReviewTextBox>
                        <Styles.Profile1 src="assets/myProfile.png"/>
                        <Styles.InputComment placeholder="댓글 입력" onChange={(e) => setContent(e.target.value)}/>
                        <Styles.InputBtn onClick={() => { writing(location.search.split("=")[1])}}>등록</Styles.InputBtn>
                    </Styles.InputBox>
                </Styles.CommentBox>
            </Styles.Comment1>
        </MarginTopWrapper>
    );
}
export default InformationPage;