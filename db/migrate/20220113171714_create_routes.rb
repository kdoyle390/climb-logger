class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.integer :grade_id
      t.integer :type_id
      t.integer :user_id
      t.string :name
      t.string :country
      t.string :crag
      t.text :comments
      t.string :coordinates
      t.boolean :gym_route
      t.date :date_created

      t.timestamps
    end
  end
end
