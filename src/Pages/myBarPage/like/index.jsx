import React, { useEffect, useState } from "react";
import * as Styles from "./style";
import MyPage from "../../myPage";
import { MarginTopWrapper } from "../../../Common/style";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const navigate = useNavigate();

  // 관광지 좋아요 로딩 state
  const [isLikeLoding, setIsLikeLoding] = useState(false);
  const [tourInfo, setTourInfo] = useState([]);

  // 관광지 찜하기 로딩 state
  const [isDibsLoding, setIsDibsLoding] = useState(false);
  const [dibsInfo, setDibsInfo] = useState([]);

  // 플랜 찜하기 로딩 state
  const [isPlanLoding, setIsPlanLoding] = useState(false);
  const [planInfo, setPlanInfo] = useState([]);

  useEffect(() => {
    getTourData();
    getDibsData();
  }, []);

  const getTourURL = (id) => {
    return `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${process.env.VITE_TOUR_API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${id}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=N&catcodeYN=N&addrinfoYN=Y&mapinfoYN=N&overviewYN=Y`;
  };

  // 좋아요를 누른 관광지 정보를 가져옴
  const getTourData = async () => {
    setIsLikeLoding(false);
    setIsPlanLoding(false);
    try {
      const data = await axios.post("http://localhost:8080/getLikes");
      if (data) {
        const likeData = data.data.data.filter((e) => e.type === "T");
        const likePlanData = data.data.data.filter((e) => e.type === "P");
        if (likeData.length === 0) {
          setIsLikeLoding(true);
        } else {
          for (let i = 0; i < likeData.length; i++) {
            const response = await fetch(getTourURL(likeData[i].id));
            const json = await response.json();
            const tourItems = json.response.body.items.item;
            const tourData = tourInfo;
            tourData.push(tourItems[0]);
            setTourInfo(tourData);
          }
          setIsLikeLoding(true);
        }
        if (likePlanData.length === 0) {
          setIsPlanLoding(true);
          return;
        } else {
          for (let i = 0; i < likePlanData.length; i++) {
            const data = await axios.get(`http://localhost:8080/getPlansById/${likePlanData[i].id}`);
            const planData = planInfo;
            if (!data.data.data.type) {
              continue;
            }
            planData.push({
              title: data.data.data.title,
              author: `${data.data.data.email.name}(${data.data.data.email.email})`,
              date: data.data.data.date,
              img: JSON.parse(data.data.data.plan)[0].list[0].firstimage2,
              id: data.data.data.id,
            });
            console.log(data);
            setPlanInfo(planData);
          }
          setIsPlanLoding(true);
        }
      } else {
        getTourData();
      }
    } catch (e) {
      alert("좋아요 에러");
      console.log(e);
    }
  };

  // 좋아요 제거 함수
  const likeCancel = async (id, type) => {
    try {
      await axios.delete(`http://localhost:8080/removeLikes/${id}`);
      if (type === "P") {
        const planData = planInfo;
        setPlanInfo(planData.filter((e) => e.id !== id));
      } else {
        setTourInfo(tourInfo.filter((e) => e.contentid !== id));
      }
    } catch (e) {
      alert("좋아요 에러");
      console.log(e);
    }
  };

  // 찜하기 목록 가져오는 함수
  const getDibsData = async () => {
    setIsDibsLoding(false);
    setDibsInfo((dibsInfo.length = 0));
    if (sessionStorage.getItem("dibs")) {
      const dibs = sessionStorage.getItem("dibs").split(" ");
      dibs.pop();
      for (let i = 0; i < dibs.length; i++) {
        const response = await fetch(getTourURL(dibs[i]));
        const json = await response.json();
        const dibsItems = json.response.body.items.item;
        const dibsData = dibsInfo;
        dibsData.push(dibsItems[0]);
        setDibsInfo(dibsData);
      }
    }
    setIsDibsLoding(true);
  };

  // 찜하기 취소 함수
  const dibsCancel = async (id) => {
    if (window.confirm("찜취소하시겠습니까?")) {
      const dibs = sessionStorage.getItem("dibs");
      sessionStorage.setItem("dibs", dibs.replace(id + " ", ""));
      const dibsData = dibsInfo;
      setDibsInfo(dibsData.filter((e) => e.contentid !== id));
    }
  };

  const changeName = (author) => {
    const nameStr = author.split("(");
    const emailIdStr = nameStr[1].split("@");
    if (emailIdStr[0] < 4) return author;
    else {
      const emailIdStrArr = [...emailIdStr[0]];
      emailIdStrArr[1] = "*";
      emailIdStrArr[2] = "*";
      const result = nameStr[0] + "(" + emailIdStrArr.join("") + "@" + emailIdStr[1];
      return result;
    }
  };

  return (
    <>
      <MyPage likeAction="like" />
      <MarginTopWrapper>
        <Styles.LikeText>좋아요 목록</Styles.LikeText>
        <Styles.BigBox>
          <Styles.LikesListBox1>
            <Styles.Box>
              <Styles.Text>공유한 플랜</Styles.Text>
            </Styles.Box>
            <Styles.SmallBox>
              <Styles.HeartSumText>
                {!isPlanLoding
                  ? `로딩 중...`
                  : planInfo.length === 0
                  ? "좋아요를 누른 항목이 없습니다."
                  : planInfo.map((el, idx) => {
                      return (
                        <Styles.LineBox key={idx}>
                          <Styles.Box2>
                            <Styles.ImgBox src={el.img ? el.img : "assets/logo.png"} onClick={() => navigate(`/calendar?id=${el.id}`)} />
                            <Styles.ContentBox>
                              <Styles.ContentBox2>
                                <Styles.ContentText onClick={() => navigate(`/calendar?id=${el.id}`)}>{el.title}</Styles.ContentText>
                                <Styles.DayBox>{el.date}</Styles.DayBox>
                              </Styles.ContentBox2>
                              <Styles.ContentBox2>
                                <Styles.Imgheart>
                                  <HeartFilled style={{ color: "red", fontSize: "30px", cursor: "pointer" }} onClick={() => likeCancel(el.id, "P")} />
                                </Styles.Imgheart>
                                <Styles.NameBox>{changeName(el?.author)}</Styles.NameBox>
                              </Styles.ContentBox2>
                            </Styles.ContentBox>
                          </Styles.Box2>
                        </Styles.LineBox>
                      );
                    })}
              </Styles.HeartSumText>
            </Styles.SmallBox>
            <Styles.Box>
              <Styles.Text>관광지</Styles.Text>
            </Styles.Box>
            <Styles.SmallBox>
              <Styles.HeartSumText>
                {!isLikeLoding
                  ? `로딩 중...`
                  : tourInfo.length === 0
                  ? "좋아요를 누른 항목이 없습니다."
                  : tourInfo.map((el, idx) => {
                      return (
                        <Styles.LineBox key={idx}>
                          <Styles.KeepBox3>
                            <Styles.ImgBox2
                              src={el?.firstimage2 === "" ? "assets/logo.png" : el?.firstimage2}
                              onClick={() => navigate(`/information?id=${el?.contentid}`)}
                            />
                            <Styles.KeepBox>
                              <Styles.KeepBox2>
                                <Styles.ContentText onClick={() => navigate(`/information?id=${el?.contentid}`)}>{el?.title}</Styles.ContentText>
                                <Styles.AddressText>{el?.addr1 + " " + el?.addr2}</Styles.AddressText>
                              </Styles.KeepBox2>
                              <Styles.KeepBox2>
                                <Styles.KeepContentText>
                                  <div dangerouslySetInnerHTML={{ __html: el?.overview }}></div>
                                </Styles.KeepContentText>
                                <Styles.KeepDeleteBox2>
                                  <HeartFilled
                                    style={{ color: "red", fontSize: "30px", cursor: "pointer", marginLeft: "50px" }}
                                    onClick={() => likeCancel(el?.contentid, "T")}
                                  />
                                </Styles.KeepDeleteBox2>
                              </Styles.KeepBox2>
                            </Styles.KeepBox>
                          </Styles.KeepBox3>
                        </Styles.LineBox>
                      );
                    })}
              </Styles.HeartSumText>
            </Styles.SmallBox>
          </Styles.LikesListBox1>
        </Styles.BigBox>
        <Styles.LikeText>찜 목록</Styles.LikeText>
        <Styles.SmallBox2>
          <Styles.HeartSumText>
            {!sessionStorage.getItem("dibs")
              ? "찜하기로 선택된 항목이 없습니다."
              : !isDibsLoding
              ? "로딩 중..."
              : dibsInfo.map((el, idx) => {
                  return (
                    <Styles.LineBox key={idx}>
                      <Styles.KeepBox3>
                        <Styles.ImgBox2
                          src={el?.firstimage2 === "" ? "assets/logo.png" : el?.firstimage2}
                          onClick={() => navigate(`/information?id=${el?.contentid}`)}
                        />
                        <Styles.KeepBox>
                          <Styles.KeepBox2>
                            <Styles.ContentText onClick={() => navigate(`/information?id=${el?.contentid}`)}>{el?.title}</Styles.ContentText>
                            <Styles.AddressText>{el?.addr1 + " " + el?.addr2}</Styles.AddressText>
                          </Styles.KeepBox2>
                          <Styles.KeepBox2>
                            <Styles.KeepContentText>
                              <div dangerouslySetInnerHTML={{ __html: el?.overview }}></div>
                            </Styles.KeepContentText>
                            <Styles.KeepDeleteBox onClick={() => dibsCancel(el?.contentid)}>찜 취소</Styles.KeepDeleteBox>
                          </Styles.KeepBox2>
                        </Styles.KeepBox>
                      </Styles.KeepBox3>
                    </Styles.LineBox>
                  );
                })}
          </Styles.HeartSumText>
        </Styles.SmallBox2>
      </MarginTopWrapper>
    </>
  );
};

export default Like;
