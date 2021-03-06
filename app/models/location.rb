class Location < ActiveRecord::Base
  #extend FriendlyId
  #friendly_id :name
  has_attached_file :photo, :styles => { :large => "1250x550#", :medium => "400x400#", :thumb => "100x100>" }
  validates_attachment :photo, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
end
