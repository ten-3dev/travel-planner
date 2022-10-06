/*global kakao*/ 
import React, { useEffect } from 'react'

const Map=(props)=>{
    //35.87572504970846, 128.68151215551117
  const lat = props.lat //eslint-disable-line no-unused-vars
  const lon = props.lon //eslint-disable-line no-unused-vars
  
  useEffect(()=>{ 
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.87572504970846, 128.68151215551117), 
      level: 3
    };
    const map = new kakao.maps.Map(container, options); //지도 생성
    
    new kakao.maps.Marker({  // 마커를 생성
        position: new kakao.maps.LatLng(35.87572504970846, 128.68151215551117),  // 마커가 표시될 위치
        map: map
    });
    
    }, [props])
    return (
        <div>
        	<div id="map" style={{width:"100%", height:"100%"}}></div> 
        </div>
    )
}

export default Map;