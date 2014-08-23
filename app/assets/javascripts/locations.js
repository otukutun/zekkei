$(function(){
  var map;
  function initialize() {
    var myLatlng = new google.maps.LatLng(gon.longitude, gon.latitude);
    var style = [{"stylers":[{"hue":"#baf4c4"},{"saturation":10}]},{"featureType":"water","stylers":[{"color":"#effefd"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]}];
    var mapOptions = {
      zoom: 6,
      center: myLatlng,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: style
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
            position: myLatlng,
              map: map,
              icon: '/images/pin.png'
        });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  //   $.ajax({
  //     type: "GET", 
  //     url: "locations/fetch_location.json", 
  //     datatype: "json",
  //     success: function(json) {
  //       console.log('test');
  //       $('#location').text(json['name']);
  //       $('#description').text(json['description']);
  //       $('#photo').attr('src', json['photo']);
  //     }
  //   });
  // 
  //   $('#refresh').click(function() {
  //     $.ajax({
  //       type: "GET", 
  //       url: "locations/fetch_location.json", 
  //       datatype: "json",
  //       success: function(json) {
  //         console.log(json);
  //         // console.log(json['name']);
  // 
  //         $('#location').text(json['name']);
  //         if (json['author']) {
  //           $('#description').text(json['description'] + 'by ' + json['creative_commons']);
  //         } else {
  //           $('#description').text(json['description']);
  //         }
  //         $('#photo').attr('src', json['photo']);
  //       }
  //     });
  //   });
});
