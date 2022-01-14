class GradesController < ApplicationController
    has_many :routes
    belongs_to :type
    belongs_to :log
end
