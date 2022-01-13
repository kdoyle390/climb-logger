class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.int :user_id
      t.int :route_id
      t.int :rating

      t.timestamps
    end
  end
end
