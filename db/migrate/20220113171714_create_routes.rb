class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.int :grade_id
      t.int :type_id
      t.int :user_id
      t.string :name
      t.string :country
      t.string :crag
      t.text :comments
      t.string :coordinates
      t.bool :gym_route
      t.date :date_created

      t.timestamps
    end
  end
end
