class UsersController < ApplicationController
    has_many :routes
    has_many :logs
    has_many :grades, through: :logs
    has_many :types, through: :logs
end
