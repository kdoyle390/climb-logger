class Grade < ApplicationRecord
    has_many :routes
    has_many :logs
    
end
