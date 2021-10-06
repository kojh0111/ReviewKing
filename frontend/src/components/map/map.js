/* global kakao */
import React, { useEffect } from 'react';

export default function Map() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5043, 127.04925),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(37.5027486, 127.0547049);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <div id="map" style={{ width: '80%', height: '500px' }} />
    </>
  );
}
