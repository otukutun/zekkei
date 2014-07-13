class LocationsController < ApplicationController
  def show

  end

  def fetch_location
    #@location = Location.find(:first)
    @location = Location.first
  end
end
