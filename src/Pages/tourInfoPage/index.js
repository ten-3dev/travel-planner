import React, { useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
// import {HeartOutlined, HeartFilled} from '@ant-design/icons';	
import LikeButton from "../../Components/LikeButton/LikeButton";
import {useLocation } from "react-router-dom";
import Map from "../../Components/kakaoMap";
import Comment from "../../Components/Comment"


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

    return(
        <MarginTopWrapper margin>
            <Styles.TitleBox>
                <Styles.Title>{infoData?.title}</Styles.Title>
            </Styles.TitleBox>
            <Styles.LikeBox>
                <Styles.Img1>
                    <LikeButton/>
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
            <Comment/>
        </MarginTopWrapper>
    );
}
export default InformationPage;