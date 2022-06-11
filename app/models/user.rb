class User < ApplicationRecord
    has_many :logs
    has_many :ratings

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :password, presence: true
    
end
