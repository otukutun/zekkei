ActiveAdmin.register Location do

  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  permit_params :name, :photo, :description, :longitude, :latitude, :url, :flag
  #
  # or
  #
  # permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  # end

  form do |f|
    f.inputs "location image" do
      f.input :name
      f.input :photo, :as => :file, :hint => f.object.new_record? ? "" : f.template.image_tag(f.object.image.url(:thumb))
      f.input :longitude
      f.input :latitude
      f.input :description
      f.input :flag
      f.input :url
      f.actions
    end
  end

  show do |location|
    attributes_table do
      row :name
      row :longitude
      row :latitude
      row :description
      row :flag
      row :url
      row :photo do
        image_tag(location.photo.url(:medium))
      end
    end
  end
  
end
