class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :photo
      t.text :description
      t.string :longitude
      t.string :latitude
      t.boolean :flag
      t.string :url

      t.timestamps
    end
  end
end
