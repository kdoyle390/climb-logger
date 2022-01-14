class RoutesController < ApplicationController
     belongs_to :user
     has_many :ratings
     belongs_to :log
end
