class LocationsController < ApplicationController
  def show
    @location = Location.where(:flag => true).sample
    gon.longitude = @location.longitude
    gon.latitude = @location.latitude
  end

  def fetch_location
    #TODO flag=trueの最大件数を取得する
    #max and flag=true の条件で1件取得
    #@location = Location.where(flag: true).limit(1).order("RANDOM()")
    @location = Location.where(:flag => true).sample
  end

end
