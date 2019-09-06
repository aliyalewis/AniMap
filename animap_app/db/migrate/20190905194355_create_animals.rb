class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :desc
      t.integer :region_id
      t.string :sciName
      t.string :countries
      t.string :aniClass
      t.string :image

      t.timestamps
    end
  end
end
