class ModifyNameToLocations < ActiveRecord::Migration
  def change
    add_index :locations, :url
  end
end
