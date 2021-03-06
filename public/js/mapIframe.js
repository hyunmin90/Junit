var btour={};

btour.map =
{
	mapIframe:function(){

      var Lat = $('#Lat').text();
      var Lng =  $('#Lng').text();

      var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
      center: new daum.maps.LatLng(Lat, Lng), // 지도의 중심좌표
      level: 4 // 지도의 확대 레벨
      };
      var map = new daum.maps.Map(mapContainer, mapOption);
      // var imageSrc = 'http://i1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
      //imageSize = new daum.maps.Size(64, 69), // 마커이미지의 크기입니다
      //imageOprion = {offset: new daum.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      //var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOprion),
      markerPosition = new daum.maps.LatLng(Lat, Lng); // 마커가 표시될 위치입니다
      // 마커를 생성합니다
      var marker = new daum.maps.Marker({
      position: markerPosition
      });
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      var content = '<div class="customoverlay">' +
      '  <a href="http://map.daum.net/link/map/11394059" target="_blank">' +
      '  </a>' +
      '</div>';
      // 커스텀 오버레이가 표시될 위치입니다
      var position = new daum.maps.LatLng(Lat, Lng);
      // 커스텀 오버레이를 생성합니다
      var customOverlay = new daum.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1
      });
	}
};

$(document).init(function(){

});