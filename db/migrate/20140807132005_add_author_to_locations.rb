class AddAuthorToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :author, :string
    add_column :locations, :creative_commons, :boolean
  end
end
