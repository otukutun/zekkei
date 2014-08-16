// var myOptions = {
//   zoom: 15,
//   center: new google.maps.LatLng(53.385873, -1.471471),
// };
// $(function() {
//       $("#map").gmap({"center":"681382, 139.766084”, "zoom":15});
// });
var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#fffffa"}]},{"featureType":"water","stylers":[{"lightness":50}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"lightness":40}]}]
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  console.log(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(function(){

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
