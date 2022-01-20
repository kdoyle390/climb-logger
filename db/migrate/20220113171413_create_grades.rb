class CreateGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :grades do |t|
      t.string :name
      t.integer :type_id


      t.timestamps
    end
  end
end
