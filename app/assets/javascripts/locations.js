var locationCtrl = function($scope, $http){
  $http({method: 'GET', url: '/locations/fetch_location.json'}).
    success(function(data, status, headers, config) {
      if (status == 200) {
        $scope.location = {'name': data['name'], 'description': data['description'], 'longitude': data['longitude'], 'latitude': data['latitude'], 'url': data['url'], 'photo': data['photo']};
      } else {
      }
    }).
    error(function(data, status, headers, config) {
      $scope.location = {'name': 'test', 'description': 'testtesttest', 'longitude': '999999', 'latitude': '1111', 'url': 'test', 'photo': 'http://zekkei-switch-dev.s3-ap-northeast-1.amazonaws.com/locations/photos/000/000/013/medium/029397.jpg?1405844108'};
    });
}
