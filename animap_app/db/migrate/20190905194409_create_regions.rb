class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.string :name
      t.string :desc
      t.string :countries

      t.timestamps
    end
  end
end
