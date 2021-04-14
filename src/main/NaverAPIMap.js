import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

export const NaverAPIMap = (props) => {
  /* const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY; */
  const NAVER_API_KEY = "61vafmjs85";
  const navermaps = window.naver.maps;
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={NAVER_API_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        clientId={NAVER_API_KEY}
        ncp // 네이버 클라우드 플랫폼 사용여부
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: 37.50375002259543, lng: 127.04431355594738 }}
        defaultZoom={15}
        initialZoom={8}
        initialBounds={{
          // When you provide initialBounds, it will ignores initialPosition and initialZoom
          south: 35.9732265,
          west: 129.2055044,
          north: 36.1130996,
          east: 129.4883056,
        }}
        submodules={["drawing", "geocoder"]}
      >
        <Marker
          key={1}
          position={new navermaps.LatLng(37.50375002259543, 127.04431355594738)}
          animation={2}
          onClick={() => {
            /* alert("여기는 N서울타워입니다."); */
          }}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverAPIMap;
