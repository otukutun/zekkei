$(function(){
  $.ajax({
    type: "GET", 
    url: "locations/fetch_location", 
    datatype: "json",
    success: function(json) {
      $('#location').text(json['name']);
      $('#description').text(json['description']);
      $('#photo').attr('src', json['photo']);
      console.log(json);
    }
  });
});
