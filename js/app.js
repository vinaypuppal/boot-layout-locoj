jQuery(document).ready(function($) {
	var elMap = document.getElementById('location-map');
	var elLocInfo = document.getElementById('location-info');
	var elLocName = document.getElementById('location-name');
	var msg = "Sorry we are unable to get your location";
	var lat,lng;
	var geocoder;
	if(Modernizr.geolocation){
		navigator.geolocation.getCurrentPosition(success,fail);
		if(elMap != null){
			elMap.textContent="Checking Location...";
		}	
	}else{
		alert("geolocation is not suppoerted by your browser please use Mordern Browser.");
		if(elMap != null){
			elMap.textContent=msg;
		}
	}

	function success(position){
		lat = position.coords.latitude;
		lng = position.coords.longitude;
		console.log(lat,lng);
		initialize();
	}

	function fail(msg){
		if(elMap != null){
			elMap.textContent=msg;
		}
		console.log(msg.code);
	}

	function initialize(){
		var latlng = new google.maps.LatLng(lat,lng);
		geocoder = new google.maps.Geocoder();
		if(elMap != null){
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
			      position: latlng,
			      map: locationMap,
			      title: 'Current Location',
			      animation:google.maps.Animation.BOUNCE
			  });
			var infowindow = new google.maps.InfoWindow();
			console.log(latlng);
			geocoder.geocode({'latLng': latlng}, function(results, status){
				if(status == google.maps.GeocoderStatus.OK){
					if(results[1]){
						infowindow.setContent(results[0].formatted_address);
	        			infowindow.open(locationMap, marker);
	        			var area = (results[3].formatted_address).split(',');
	        			console.log(area[0]);
	        			elLocName.textContent = area[0];
	        		}else{
	        			alert('No results found');
	        		}
	        	}else{
	        		alert('Geocoder failed due to: ' + status);	
	        	}	
			});
		}else{
			geocoder.geocode({'latLng': latlng}, function(results, status){
				if(status == google.maps.GeocoderStatus.OK){
					if(results[1]){
						var area = (results[3].formatted_address).split(',');
						console.log(area[0]);
						elLocName.textContent = area[0];
					}else{
						alert('No results found');
					}
				}else{
					alert('Geocoder failed due to: ' + status);	
				}	
			});
		}
	}

});
