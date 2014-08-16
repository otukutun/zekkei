$(function(){
  var map;
  function initialize() {
    var mapOptions = {
      zoom: 6,
      center: new google.maps.LatLng(gon.longitude, gon.latitude),
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#fffffa"}]},{"featureType":"water","stylers":[{"lightness":50}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"lightness":40}]}]
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
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
