class LocationsController < ApplicationController
  def show

  end

  def fetch_location
    #@location = Location.find(:first)
    @location = Location.first
    #@location = Location.where(flag: true).limit(1).order("RANDOM()")
    #@location = Location.where(:flag => true)
  end

end
