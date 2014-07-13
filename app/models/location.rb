class Location < ActiveRecord::Base
  has_attached_file :photo, :styles => { :medium => "400x400", :thumb => "100x100>" }
  validates_attachment :photo, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
end
