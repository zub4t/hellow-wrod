        var geocoder;
        var map;
        var destino;
        var latlng ="-3.0966401, -59.945074999999974"+ "";
        var latlngStr;
        var directionsDisplay;
        var directionsService;
       
      function initMap() {
        geocoder = new google.maps.Geocoder();
        directionsDisplay = new google.maps.DirectionsRenderer;
        directionsService = new google.maps.DirectionsService;
        

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 37.77, lng: -122.447}
        });
        directionsDisplay.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsDisplay);
      
          
          // EVENTO QUANDO TROCAR O SELETOR
          // document.getElementById('address').addEventListener('change', function() {
         // calculateAndDisplayRoute(directionsService, directionsDisplay);
        //});

      
      }
      
        
        
        function codeAddress() {
            var address = document.getElementById('address').value;
            geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == 'OK') {
                // MUDAR O VALOR DA VELOCIDADE
                //document.getElementById("velocidade").innerHTML = "40";

                
                // CENTRALIZA NO LUGAR PROCURADO
                //map.setCenter(results[0].geometry.location);
                
                
                
                latlng =results[0].geometry.location.valueOf();
                var input = destino + '';
                latlngStr = input.split(',', 2);
                calculateAndDisplayRoute(directionsService, directionsDisplay);

                
             /* ADICIONAR MAKER E CRIAR OBJ LATLNG
             
              //alert(latlngStr);
                //latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
             var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
                
                
                
                
                */
            } 
            else {
                alert('Destino Invalido: ' + status);
            }
        });
    }
        

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
            directionsService.route({
            origin: {lat: -3.037251, lng: -59.9895},  // Haight.
            destination:latlng ,  // Ocean Beach.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
            travelMode: "DRIVING"
            }, function(response, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
            });
        }
      