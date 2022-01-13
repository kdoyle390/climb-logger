class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.int :user_id
      t.int :route_id
      t.date :date_sent
      t.text :notes

      t.timestamps
    end
  end
end
