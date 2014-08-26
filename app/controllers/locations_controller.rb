class LocationsController < ApplicationController
  before_action :set_url, only: :show
  def show(e = nil)
    if @location == nil
    logger.info "Routing 404 with exception: #{e.message}" if e

    render template: 'errors/error_404', status: 404, layout: 'application', content_type: 'text/html'
    end
    #@location = Location.find(:all, :conditions => [)
    #gon.longitude = @location.longitude
    #gon.latitude = @location.latitude
  end

  def fetch_location
    #TODO flag=trueの最大件数を取得する
    #max and flag=true の条件で1件取得
    #@location = Location.where(flag: true).limit(1).order("RANDOM()")
    @location = Location.where(:flag => true).sample
  end
  def random
    @location = Location.where(:flag => true).sample
    redirect_to action: 'show', url: @location.url, status: 301
  end

  private
  def set_url
    @location = Location.where(["flag = ? and url = ?", true, params[:url]]).sample
  end
end
