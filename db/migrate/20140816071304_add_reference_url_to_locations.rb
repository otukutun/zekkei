class AddReferenceUrlToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :reference_url, :string
  end
end
