import React, { useEffect, useState } from "react";
import * as Styles from "./style";
import { useNavigate } from "react-router-dom";
import { MarginTopWrapper } from "../../Common/style";
import axios from "axios";

import { Nav, NavLink, NavMenu, NavLink2, NavLink3 } from "./style";

const MyPage = ({ myPlanAction, sharedPlanAction, likeAction }) => {
  const navigate = useNavigate();

  const moveEditMember = () => {
    navigate("/editMember");
  };

  useEffect(() => {
    // 제일 처음에 실행하는 애
    getData();
  }, []);

  const [name, setName] = useState("");

  const getData = async () => {
    // DB에 있는 회원데이터를 불러옴
    const data = await axios.get("http://35.216.50.89:8080/getUserInfo");
    if (!data) {
      getData();
    } else {
      setName(data.data.data.name);
    }
  };

  return (
    <MarginTopWrapper margin>
      <Styles.Box>
        <Styles.ProfileBox>
          <Styles.SettingBox>
            <Styles.MyProfileBox>
              <Styles.Profile
                src={
                  sessionStorage.getItem("profileImg")
                    ? `http://35.216.50.89:8080/image/view?value=${sessionStorage.getItem("profileImg")}`
                    : "assets/defaultProfile.png"
                }
              />
              <Styles.SettingsImg src={`assets/settings.png`} onClick={moveEditMember} />
            </Styles.MyProfileBox>
            <Styles.Box2>
              <Styles.Text>{name}</Styles.Text>
            </Styles.Box2>
          </Styles.SettingBox>
        </Styles.ProfileBox>

        <Nav>
          <NavMenu>
            <NavLink to="/myPlan" isaction={myPlanAction}>
              <Styles.Box1>
                <Styles.Text1>나의 플랜</Styles.Text1>
              </Styles.Box1>
            </NavLink>
          </NavMenu>
          <NavMenu>
            <NavLink2 to="/sharedPlan" isaction={sharedPlanAction}>
              <Styles.Box1>
                <Styles.Text1>공유한 플랜</Styles.Text1>
              </Styles.Box1>
            </NavLink2>
          </NavMenu>
          <NavMenu>
            <NavLink3 to="/like" isaction={likeAction}>
              <Styles.Box1>
                <Styles.Text1>좋아요 및 찜목록</Styles.Text1>
              </Styles.Box1>
            </NavLink3>
          </NavMenu>
        </Nav>
      </Styles.Box>
    </MarginTopWrapper>
  );
};

export default MyPage;
