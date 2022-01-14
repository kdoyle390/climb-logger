class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :user_id
      t.integer :route_id
      t.integer :rating

      t.timestamps
    end
  end
end
