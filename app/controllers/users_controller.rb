class UsersController < ApplicationController
    has_many :routes
    has_many :logs
    has_many :ratings

end
