class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.integer :user_id
      t.integer :route_id
      t.date :date_sent
      t.text :notes
      t.integer :type_id
      t.integer :grade_id
      t.string :name
      t.string :country
      t.string :crag
      t.text :comments
      t.string :coordinates
      t.boolean :gym_route

      t.timestamps
    end
  end
end
