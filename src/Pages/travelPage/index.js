import React, { useEffect, useState } from "react";
import * as Styles from './style';
import { MarginTopWrapper } from "../../Common/style";
import Paging from "../../Components/paging";
import LikeButton from "../../Components/LikeButton/LikeButton2";


const TravelPage = () => {
    const [page, setPage] = useState(1);
    const [itemsCount] = useState(6);
    const [totalItemsCount] = useState(50); // 임시

    useEffect(() => {
        console.log(page === 1 ? 1 : (page - 1) * itemsCount + "부터");
        console.log(itemsCount + "까지");
    }, [page, itemsCount]);
    return (
        <MarginTopWrapper margin>
            <Styles.InputBox>
                <Styles.Input placeholder="검색하세요."/>
            </Styles.InputBox>
            <Styles.ListSumBox>총 69건</Styles.ListSumBox>
            <Styles.ContentBox>
                <Styles.TravelListBox>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.LikeBox>
                            <Styles.Img1 ><LikeButton/></Styles.Img1>
                            <Styles.Like>+찜하기</Styles.Like>
                        </Styles.LikeBox>  
                    </Styles.TravelWrapper>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.LikeBox>
                            <Styles.Img1 ><LikeButton/></Styles.Img1>
                            <Styles.Like>+찜하기</Styles.Like>
                        </Styles.LikeBox>  
                    </Styles.TravelWrapper>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.LikeBox>
                            <Styles.Img1 ><LikeButton/></Styles.Img1>
                            <Styles.Like>+찜하기</Styles.Like>
                        </Styles.LikeBox>  
                    </Styles.TravelWrapper>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.LikeBox>
                            <Styles.Img1 ><LikeButton/></Styles.Img1>
                            <Styles.Like>+찜하기</Styles.Like>
                        </Styles.LikeBox>  
                    </Styles.TravelWrapper>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.LikeBox>
                            <Styles.Img1 ><LikeButton/></Styles.Img1>
                            <Styles.Like>+찜하기</Styles.Like>
                        </Styles.LikeBox>  
                    </Styles.TravelWrapper>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.LikeBox>
                            <Styles.Img1 ><LikeButton/></Styles.Img1>
                            <Styles.Like>+찜하기</Styles.Like>
                        </Styles.LikeBox>  
                    </Styles.TravelWrapper>
                    <Styles.TravelWrapper>
                        <Styles.TravelWrapper5>
                            <Styles.Img src={process.env.PUBLIC_URL + `assets/image32.png`}/>
                            <Styles.Text1>
                                제 1 관광명소 남산서울타워
                                국내외 관광객들이 년 1,200만 명 방문하는 서울 제1의 관광명소인 남산서울타워
                                최근 한류 바람을 몰고 각종 예능, 드라마의 촬영지로 등등
                            </Styles.Text1>
                        </Styles.TravelWrapper5>
                        <Styles.LikeBox>
                            <Styles.Img1 ><LikeButton/></Styles.Img1>
                            <Styles.Like>+찜하기</Styles.Like>
                        </Styles.LikeBox>  
                    </Styles.TravelWrapper>
                </Styles.TravelListBox>
                <Styles.TravelFilterBox>
                <Styles.FilterBoxSticky>
                    <Styles.Text>필터</Styles.Text>
                    <Styles.TravelFilterTag>
                        <Styles.TravelFilterTagBox>
                            <Styles.GridTagBoxItem/>
                        </Styles.TravelFilterTagBox>
                    </Styles.TravelFilterTag>
                    <Styles.SteamListButtonImg src={"assets/SteamListButton.png"}/>
                </Styles.FilterBoxSticky>
                </Styles.TravelFilterBox>
            </Styles.ContentBox>
            <Styles.SteamListButtonBox>
            </Styles.SteamListButtonBox>
            <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
        </MarginTopWrapper>
      );
}
export default TravelPage;