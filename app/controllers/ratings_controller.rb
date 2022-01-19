class RatingsController < ApplicationController

    def index
        ratings = Rating.all
        render json: ratings
    end

    def create
        rating = Rating.create(rating_params)
        if rating.valid?
            render json: rating, status: :created
        else 
            render json: rating.errors.full_messages
        end
    end
    
    private

    def rating_params
        params.permit(:user_id, :route_id, :rating)
    end
    
end
