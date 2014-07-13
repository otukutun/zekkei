class RemovePhotoColumn < ActiveRecord::Migration
  def change
    remove_column :locations, :photo
  end
end
