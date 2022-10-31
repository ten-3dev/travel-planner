import React, { useState, useRef } from "react";
import * as Styles from './style';
import { useNavigate } from "react-router-dom";
import { MarginTopWrapper } from '../../Common/style';
import { getAddressData } from "../../Data";
import axios from "axios";

const MainPage = () => {
    const navigate = useNavigate();
    const [addressData, setAddressData] = useState(null);
    const [filterAddressData, setFilterAddressData] = useState([]);
    const searchInput = useRef("");
    const [searchKeyword, setSearchKeyword] = useState();
    
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
                        <Styles.BottomContentBtn onClick={ goCreatePlanPage}>플랜 작성하기</Styles.BottomContentBtn>
                        </>
                        :
                        <>
                        <Styles.BottomContentBtn onClick={() => {navigate("/CreatePlanPage")}}>플랜 작성하기</Styles.BottomContentBtn>
                        </>
                        }
                        
                    </Styles.BottomContentBox>
                    <Styles.BottomContentBox column paddingBottom="50px">
                        <Styles.CarouselTitle>인기플랜</Styles.CarouselTitle>
                            <Styles.SliderCustom {...settings}>
                                <Styles.SliderBox>
                                    <Styles.SliderImg src="assets/plan_ex1.png" />
                                    <Styles.SliderInfo>
                                        <Styles.SliderInfoText size="18px">JD의 서울 여행</Styles.SliderInfoText>
                                        <Styles.SliderInfoText>2022-09-24 - 2002-09-26</Styles.SliderInfoText>
                                        <Styles.SliderInfoBottomBox>
                                            <Styles.SliderInfoBox>
                                                <Styles.SliderInfoImg src="assets/heart.png"/>
                                                <Styles.SliderInfoText>1</Styles.SliderInfoText>
                                            </Styles.SliderInfoBox>
                                            <Styles.SliderInfoText>By. JD</Styles.SliderInfoText>
                                        </Styles.SliderInfoBottomBox>
                                    </Styles.SliderInfo>
                                </Styles.SliderBox>
                                <Styles.SliderBox>
                                    <Styles.SliderImg src="assets/plan_ex1.png" />
                                    <Styles.SliderInfo>
                                        <Styles.SliderInfoText size="18px">JD의 서울 여행</Styles.SliderInfoText>
                                        <Styles.SliderInfoText>2022-09-24 - 2002-09-26</Styles.SliderInfoText>
                                        <Styles.SliderInfoBottomBox>
                                            <Styles.SliderInfoBox>
                                                <Styles.SliderInfoImg src="assets/heart.png"/>
                                                <Styles.SliderInfoText>1</Styles.SliderInfoText>
                                            </Styles.SliderInfoBox>
                                            <Styles.SliderInfoText>By. JD</Styles.SliderInfoText>
                                        </Styles.SliderInfoBottomBox>
                                    </Styles.SliderInfo>
                                </Styles.SliderBox>
                                <Styles.SliderBox>
                                    <Styles.SliderImg src="assets/plan_ex1.png" />
                                    <Styles.SliderInfo>
                                        <Styles.SliderInfoText size="18px">JD의 서울 여행</Styles.SliderInfoText>
                                        <Styles.SliderInfoText>2022-09-24 - 2002-09-26</Styles.SliderInfoText>
                                        <Styles.SliderInfoBottomBox>
                                            <Styles.SliderInfoBox>
                                                <Styles.SliderInfoImg src="assets/heart.png"/>
                                                <Styles.SliderInfoText>1</Styles.SliderInfoText>
                                            </Styles.SliderInfoBox>
                                            <Styles.SliderInfoText>By. JD</Styles.SliderInfoText>
                                        </Styles.SliderInfoBottomBox>
                                    </Styles.SliderInfo>
                                </Styles.SliderBox>
                                <Styles.SliderBox>
                                    <Styles.SliderImg src="assets/plan_ex1.png" />
                                    <Styles.SliderInfo>
                                        <Styles.SliderInfoText size="18px">JD의 서울 여행</Styles.SliderInfoText>
                                        <Styles.SliderInfoText>2022-09-24 - 2002-09-26</Styles.SliderInfoText>
                                        <Styles.SliderInfoBottomBox>
                                            <Styles.SliderInfoBox>
                                                <Styles.SliderInfoImg src="assets/heart.png"/>
                                                <Styles.SliderInfoText>1</Styles.SliderInfoText>
                                            </Styles.SliderInfoBox>
                                            <Styles.SliderInfoText>By. JD</Styles.SliderInfoText>
                                        </Styles.SliderInfoBottomBox>
                                    </Styles.SliderInfo>
                                </Styles.SliderBox>
                            </Styles.SliderCustom>
                        <Styles.BottomContentBtn onClick={moveSharedPlan}>플랜 모두 보기</Styles.BottomContentBtn>
                    </Styles.BottomContentBox>
                </Styles.BottomBox>
            </MarginTopWrapper>
        </>
    )
}

export default MainPage;