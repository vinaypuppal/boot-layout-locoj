jQuery(document).ready(function($) {
	var elMap = document.getElementById('location-map');
	var elLocInfo = document.getElementById('location-info');
	var msg = "Sorry we are unable to get your location";
	var lat,lng;
	if(Modernizr.geolocation){
		navigator.geolocation.getCurrentPosition(success,fail);
		elMap.textContent="Checking Location...";
	}else{
		alert("geolocation is not suppoerted by your browser please use Mordern Browser.");
		elMap.textContent=msg;
	}

	function success(position){
		lat = position.coords.latitude;
		lng = position.coords.longitude;
		console.log(lat,lng);
		initialize();
	}

	function fail(msg){
		elMap.textContent=msg;
		console.log(msg.code);
	}

	function initialize(){
		elMap.textContent="Loading Map";
		var currentLatlng = new google.maps.LatLng(lat,lng);
		var mapOptions = {
			center:{
				lat:lat,
				lng:lng
			},
			zoom: 15,
			disableDefaultUI:true,
			draggable:false,
			scrollwheel:false
		};
		var locationMap = new google.maps.Map(elMap,mapOptions);
		var marker = new google.maps.Marker({
		      position: currentLatlng,
		      map: locationMap,
		      title: 'Current Location',
		      animation:google.maps.Animation.BOUNCE
		  });
	}

});
