import React, { useEffect,useState, useRef } from "react";
import * as Styles from './style';
import { useNavigate } from "react-router-dom";
import { MarginTopWrapper } from '../../Common/style';
import { getAddressData } from "../../Data";
import axios from "axios";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const MainPage = () => {
    const navigate = useNavigate();
    const [addressData, setAddressData] = useState(null);
    const [filterAddressData, setFilterAddressData] = useState([]);
    const searchInput = useRef("");
    const [searchKeyword, setSearchKeyword] = useState();
    const [content, setContent] = useState([]);
    const [like, setLike] = useState([]);
    const [isLoding, setIsLoding] = useState(false);

    useEffect(() => {
        reload();
      }, []);

    const reload = () => {
        setIsLoding(false);
        getUserPlan();
        getLikes();
        setIsLoding(true);
      };
    const getUserPlan = async () => {
    // DB에 있는 플랜데이터
    const data = await axios.get("http://localhost:8080/getPlan");
    if (data) {
        setContent(data.data.data.sort((a, b) => b.likeCount - a.likeCount));
    } else {
        getUserPlan();
    }
        
      };
    const goCreatePlanPage = () => {
        alert("로그인 후 이용해 주세요.");
        navigate("/login");
        
  };
    const moveSharedPlan = () => {
        navigate('/shared');
    }

    const NextArrow = props => {
        const { className, onClick } = props;
        return (
          <Styles.SliderArrow
            src="assets/arrow.png"
            className={className}
            onClick={onClick}
          />
        );
      }
      
      const PrevArrow = props => {
        const { className, onClick } = props;
        return (
          <Styles.SliderArrow
            src="assets/arrow.png"
            className={className}
            onClick={onClick}
            prev
          />
        );
      }

      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    
    const onPreview = async (e) => {
        if(addressData === null){
            const data = await getAddressData();
            setAddressData(data);
            return;
        }

        const filterData = addressData.filter((el) => el.name.replace(/(\s*)/g,"").includes(e.target.value.replace(/(\s*)/g,"")));
        setFilterAddressData(filterData);
        setSearchKeyword(e.target.value);
    }
    
    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate('/travel', {state : searchKeyword});
        };
    };

    const onSubmit = (e) => {
        navigate('/travel', {state : (e !== undefined ? e : searchKeyword)});
    };


    const fileList = []; // 업로드한 파일들을 저장하는 배열
    
    const onSaveFiles = (e) => {
        const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들
    
        uploadFiles.forEach((uploadFile) => {
            fileList.push(uploadFile);
        });
    };
    
    const onFileUpload = () => {
        const formData = new FormData();
    
        fileList.forEach((file) => {
                // 파일 데이터 저장
            formData.append('multipartFiles', file);
        });

        fileList.forEach((f) => {
            console.log(f);
        })
        
        axios.post('http://localhost:8080/uploadFile', formData);
        alert("다시 로그인 후 적용됩니다.");
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

    };

    const infoMove = (e) => {
      navigate(`/calendar?id=${e.id}`);
    };

    return(
        <>
            <Styles.Wrapper>
                <Styles.Video controls={false} muted autoPlay loop>
                    <source src="http://192.168.52.16:8000/video" type="video/mp4" />
                </Styles.Video>
                <Styles.ContentBox>
                    <Styles.Title>
                        TRAVEL PLANNER
                        <input type="file" onChange={onSaveFiles}/>
                        <button onClick={onFileUpload}>파일 업로드</button>
                        <Styles.ColorBar />
                    </Styles.Title>
                    <Styles.InputBox>
                        <Styles.Input placeholder="예: 서울특별시 성동구" onChange={(e) => onPreview(e)} ref={searchInput} onKeyUp={handleOnKeyPress}/>
                        <Styles.Btn onClick={() => {onSubmit()}}>
                            <Styles.Img src="assets/search_icon.png"/>
                        </Styles.Btn>
                        <Styles.InputPreView display={(searchInput.current.value && filterAddressData.length > 0) ? "true" : undefined}>
                            {searchInput.current.value && filterAddressData.map((el, idx) => {
                                return(
                                    <Styles.InputPreItem onClick={() => {onSubmit(el.name)}}key={idx}>{el.name}</Styles.InputPreItem>
                                )
                            })}
                        </Styles.InputPreView>
                    </Styles.InputBox>
                </Styles.ContentBox>
            </Styles.Wrapper>
            <MarginTopWrapper>
                <Styles.BottomBox>
                    <Styles.BottomContentBox padding="120px">
                        <Styles.BottomContentWords>
                            <Styles.BottonContentTitle>다양한 관광지 데이터</Styles.BottonContentTitle>
                            <Styles.BottomContentText>다양한 관광지 데이터를 통해 어쩌구 저쩌구 어쩌구 저쩌구 수 있습니다.</Styles.BottomContentText>
                        </Styles.BottomContentWords>
                        <Styles.BottomContentImg src="assets/main_img1.png"/>
                    </Styles.BottomContentBox>
                    <Styles.BottomContentBox>
                        <Styles.BottomContentImg src="assets/main_img2.png"/>
                        <Styles.BottomContentWords>
                            <Styles.BottonContentTitle>좋아요 찜 기능</Styles.BottonContentTitle>
                            <Styles.BottomContentText>다양한 관광지 데이터를 통해 어쩌구 저쩌구 어쩌꾸 할 수 있습니다.</Styles.BottomContentText>
                        </Styles.BottomContentWords>
                    </Styles.BottomContentBox> 
                </Styles.BottomBox>
                <Styles.BottomBox color="#F1F1F1">
                   <Styles.BottomContentBox padding="120px" column>
                        <Styles.BottomContentSBox>
                            <Styles.BottomContentImg src="assets/main_img3.png"/>
                            <Styles.BottomContentWords>
                                <Styles.BottonContentTitle>여행 계획 세우기</Styles.BottonContentTitle>
                                <Styles.BottomContentText>간단하게 원하는 여행지를 찾아보고 간단하게 원하는 계획을 세울 수 있습니다.</Styles.BottomContentText>
                            </Styles.BottomContentWords>
                        </Styles.BottomContentSBox>
                        {!sessionStorage.getItem("access_token") ? 
                        <>
                        <Styles.BottomContentBtn onClick={goCreatePlanPage}>플랜 작성하기</Styles.BottomContentBtn>
                        </>
                        :
                        <>
                        <Styles.BottomContentBtn onClick={() => {navigate("/CreatePlanPage")}}>플랜 작성하기</Styles.BottomContentBtn>
                        </>
                        }
                        
                    </Styles.BottomContentBox>
                    <Styles.BottomContentBox column paddingBottom="50px">
                        <Styles.CarouselTitle>인기플랜</Styles.CarouselTitle>
                            {content.length < 3 && "현재 플랜이 3개 이상이 되지 않습니다."}
                            <Styles.SliderCustom {...settings} >
                                {content.length < 3 ? null : content.map((el, idx) => {
                                    return(
                                        <Styles.SliderBox key={idx}>
                                            <Styles.SliderImg 
                                                src={!JSON.parse(el.plan)[0].list[0].firstimage2 ? "assets/logo.png" : JSON.parse(el.plan)[0].list[0].firstimage2} 
                                                onClick={() => infoMove(el)}
                                            />
                                            <Styles.SliderInfo>
                                                <Styles.SliderInfoText onClick={() => infoMove(el)}>{el.title}</Styles.SliderInfoText>
                                                <Styles.SliderInfoText>{el.date}</Styles.SliderInfoText>
                                                <Styles.SliderInfoBottomBox>
                                                    <Styles.SliderInfoBox>
                                                        {like.filter((e) => Number(e.id) === Number(el.id)).length ? (
                                                            <HeartFilled style={{ color: "red", fontSize: "30px" }} onClick={() => addLikes(el.id)} />
                                                        ) : (
                                                            <HeartOutlined style={{ fontSize: "30px" }} onClick={() => addLikes(el.id)} />
                                                        )}
                                                        <Styles.SliderInfoText>{el.likeCount}</Styles.SliderInfoText>
                                                    </Styles.SliderInfoBox>
                                                    <Styles.SliderInfoText >
                                                        {el.email.name}
                                                    </Styles.SliderInfoText>
                                                </Styles.SliderInfoBottomBox>
                                            </Styles.SliderInfo>
                                        </Styles.SliderBox>
                                    )
                                })}
                            </Styles.SliderCustom>
                        <Styles.BottomContentBtn onClick={moveSharedPlan}>플랜 모두 보기</Styles.BottomContentBtn>
                    </Styles.BottomContentBox>
                </Styles.BottomBox>
            </MarginTopWrapper>
        </>
    )
}

export default MainPage;