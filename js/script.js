function initialize() {     
	var myLatlng = new google.maps.LatLng(52.42708305, 16.94);
	var myLatlngMarker = new google.maps.LatLng(52.42708305, 16.93711996);
	var myOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
	 var marker = new google.maps.Marker({
          position: myLatlngMarker,
          map: map
        });
}


	