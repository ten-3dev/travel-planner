import React, { useEffect, useState } from "react";
import * as Styles from "./style";
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SharedPlanPage = () => {
  const [clicked, setClicked] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const [itemsCount] = useState(6); //페이지당 게시글 수
  const [content, setContent] = useState([]);
  const [like, setLike] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentPage === 1 ? 1 : (currentPage - 1) * itemsCount + "부터");
    console.log(itemsCount + "까지");
  }, [currentPage, itemsCount]);

  useEffect(() => {
    reload();
  }, []);

  const reload = () => {
    setIsLoding(false);
    getUserPlan();
    getLikes();
    setIsLoding(true);
  }

  const getUserPlan = async () => {
    // DB에 있는 플랜데이터
    const data = await axios.get("http://localhost:8080/getPlan");
    if (data) {
      setContent(data.data.data);
    } else {
      getUserPlan();
    }
  };
  const infoMove = (e) => {
    navigate(`/calendar?id=${e.id}`);
  };

  const getLikes = async () => {
    const data = await axios.post("http://localhost:8080/getLikes");
    if (data === undefined) {
      getLikes();
    } else {
      setLike(data.data.data.filter((e) => e.type === "P"));

      setIsLoding(true);
    }
  };
  const addLikes = async (id) => {
    console.log(id);
    try{
      if(like.filter(e => Number(e.id) === Number(id)).length) {
        await axios.delete(`http://localhost:8080/removeLikes/${id}`);
      }else{
        await axios.post("http://localhost:8080/addLikes", {
          id: id,
          type: "P",
        });
      }
      reload();
    }catch(e){
      alert("로그인 후 이용해 주세요.");
      console.log(e);
    }
    // try {
    //   if (like.filter((e) => e.id === id).length) {
    //     // 있으면
    //     await axios.delete(`http://localhost:8080/removeLikes/${id}`);
    //   } else {
    //     console.log({
    //       id: id,
    //       type: "P",
    //     });
    //     await axios.post("http://localhost:8080/addLikes", {
    //       id: id,
    //       type: "P",
    //     });
    //   }
    //   getLikes();
    // } catch (e) {
    //   alert("로그인 후 이용해 주세요.");
    // }
  };

  return (
    <MarginTopWrapper margin>
      <Styles.TitleBox>
        <Styles.Title>공유된 플랜</Styles.Title>
      </Styles.TitleBox>
      <Styles.LatestpopularBox>
        <Styles.LatestBtn click={clicked === "Latest"} onClick={() => setClicked("Latest")}>
          최신순
        </Styles.LatestBtn>
        <Styles.Sign>|</Styles.Sign>
        <Styles.PopularBtn click={clicked === "Popular"} onClick={() => setClicked("Popular")}>
          인기순
        </Styles.PopularBtn>
      </Styles.LatestpopularBox>
      <Styles.TopBar />
      <Styles.PlanBox>
        {!isLoding ? "로딩 중..." : content.length === 0
          ? "플랜이 없음"
          : content.slice((currentPage - 1) * itemsCount, currentPage * itemsCount).map((el, idx) => {
              return (
                <Styles.PlanContentBox key={idx}>
                  <Styles.PlanImg
                    onClick={() => {
                      infoMove(el);
                    }}
                    src={
                      JSON.parse(el.plan)[0].list[0].firstimage2 === "" ? "assets/logo.png" : JSON.parse(el.plan)[0].list[0].firstimage2
                    }></Styles.PlanImg>
                  <Styles.ContentListBox>
                    <Styles.ContentBox
                      onClick={() => {
                        infoMove(el);
                      }}>
                      {el.title}
                    </Styles.ContentBox>
                    <Styles.ContentBox
                      onClick={() => {
                        infoMove(el);
                      }}>
                      {el.date}
                    </Styles.ContentBox>
                    <Styles.LikeListfontBox>
                      <Styles.LikefontBox>
                        {/* {el.id} */}
                        {like.filter((e) => Number(e.id) === Number(el.id)).length ? (
                          // "1"
                          <HeartFilled style={{ color: "red", fontSize: "30px" }} onClick={() => addLikes(el.id)} />
                        ) : (
                          // "2"
                          <HeartOutlined style={{ fontSize: "30px" }} onClick={() => addLikes(el.id)} />
                        )}
                        <Styles.ContentBox>1</Styles.ContentBox>
                      </Styles.LikefontBox>
                      <Styles.ContentBox
                        onClick={() => {
                          infoMove(el);
                        }}>
                        {el.email.name}
                      </Styles.ContentBox>
                    </Styles.LikeListfontBox>
                  </Styles.ContentListBox>
                </Styles.PlanContentBox>
              );
            })}
      </Styles.PlanBox>
      <Paging page={currentPage} count={content.length} setPage={setCurrentPage} itemsCount={itemsCount} />
    </MarginTopWrapper>
  );
};
export default SharedPlanPage;
