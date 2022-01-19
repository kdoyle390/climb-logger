class Rating < ApplicationRecord
    belongs_to :route
    belongs_to :user

    validates :route_id, presence: true
    validates :rating, presence: true
    
end
