class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.integer :user_id
      t.integer :route_id
      t.date :date_sent
      t.text :notes
      t.integer :type_id
      t.integer :grade_id

      t.timestamps
    end
  end
end
