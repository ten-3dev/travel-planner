import axios from 'axios';

// 메인 지역 불러오는 함수
export const getAddressData = async () => {
    const data = await axios.get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=***00000");
    return data.data.regcodes;
}

// 리프레쉬를 통해 액세스 토큰 다시 발급
export const getAccessToken = async () => {
    const data = await axios.post('http://localhost:8080/getTokenUsedRefreshToken', {"refreshToken" : localStorage.getItem("refresh_token")});
    sessionStorage.setItem("access_token", data.data.data.access_token);
  }