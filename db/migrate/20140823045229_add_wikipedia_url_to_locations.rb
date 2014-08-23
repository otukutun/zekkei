class AddWikipediaUrlToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :wikipedia_url, :string
  end
end
