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
  const [contentStorage, setContentStorage] = useState([]);
  const [like, setLike] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [totalContent, setTotalContent] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    reload();
  }, []);

  const reload = () => {
    setIsLoding(false);
    getUserPlan();
    getLikes();
    setIsLoding(true);
  };

  const getUserPlan = async (pageNumber = 1) => {
    // DB에 있는 플랜데이터
    const data = await axios.get("http://192.168.52.16:8080/getPlanWithPagination", { params: { page: pageNumber - 1, size: itemsCount } });
    if (data) {
      setTotalContent(data.data.data[0]);
      if(clicked === 'Popular'){
        setContentStorage(data.data.data[1]);
        setContent([...data.data.data[1]].sort((a, b) => b.likeCount - a.likeCount));
      }else{
        setContent(data.data.data[1]);
      }
    } else {
      getUserPlan();
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUserPlan(pageNumber);
  };

  const infoMove = (e) => {
    navigate(`/calendar?id=${e.id}`);
  };

  const getLikes = async () => {
    const data = await axios.post("http://192.168.52.16:8080/getLikes");
    if (data === undefined) {
      getLikes();
    } else {
      setLike(data.data.data.filter((e) => e.type === "P"));

      setIsLoding(true);
    }
  };
  const addLikes = async (id) => {
    try {
      if (like.filter((e) => Number(e.id) === Number(id)).length) {
        await axios.delete(`http://192.168.52.16:8080/removeLikes/${id}`);
      } else {
        await axios.post("http://192.168.52.16:8080/addLikes", {
          id: id,
          type: "P",
        });
      }
      reload();
    } catch (e) {
      alert("로그인 후 이용해 주세요.");
      console.log(e);
    }
  };

  const contentOrder = (e) => {
    if (clicked === (e.target.innerText === "최신순" ? "Latest" : "Popular")) return;
    setIsLoding(false);
    if (e.target.innerText === "인기순") {
      setContentStorage(content);
      setContent([...content].sort((a, b) => b.likeCount - a.likeCount));
      setClicked("Popular");
    } else {
      setContent(contentStorage);
      setClicked("Latest");
    }
    setIsLoding(true);
  };

  return (
    <MarginTopWrapper margin>
      <Styles.TitleBox>
        <Styles.Title>공유된 플랜</Styles.Title>
      </Styles.TitleBox>
      <Styles.LatestpopularBox>
        <Styles.LatestBtn click={clicked === "Latest"} onClick={(e) => contentOrder(e)}>
          최신순
        </Styles.LatestBtn>
        <Styles.Sign>|</Styles.Sign>
        <Styles.PopularBtn click={clicked === "Popular"} onClick={(e) => contentOrder(e)}>
          인기순
        </Styles.PopularBtn>
      </Styles.LatestpopularBox>
      <Styles.TopBar />
      <Styles.PlanLodingText>
        <Styles.PlanBox>
          {!isLoding
            ? "로딩 중..."
            : content.length === 0
            ? "공유된 플랜이 없습니다."
            : content.map((el, idx) => {
                return (
                  <Styles.PlanContentBox key={idx}>
                    <Styles.PlanImg
                      onClick={() => {
                        infoMove(el);
                      }}
                      src={JSON.parse(el.plan)[0].list[0].firstimage2 === "" ? "assets/logo.png" : JSON.parse(el.plan)[0].list[0].firstimage2}></Styles.PlanImg>
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
                          <Styles.ContentBox>{el.likeCount}</Styles.ContentBox>
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
      </Styles.PlanLodingText>

      <Paging page={currentPage} count={totalContent} setPage={handlePageChange} itemsCount={itemsCount} />
    </MarginTopWrapper>
  );
};
export default SharedPlanPage;
