class CreateGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :grades do |t|
      t.string :grade
      t.integer :type_id
      t.string :int

      t.timestamps
    end
  end
end
