class Route < ApplicationRecord
     has_many :ratings


     validates :grade_id, presence: true
     validates :type_id, presence: true
     validates :name, presence: true
     validates :country, presence: true
end
