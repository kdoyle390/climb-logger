class RoutesController < ApplicationController
     
    def index
        routes = Route.all
        render json: routes
    end

    def show
        route = Route.find_by(id: params[:id])
        if route 
            render json: route
        else 
            render json: { error: "record not found"}, status: :not_found
            
        end
    end

    def create
        route = Route.create(route_params)
        if route.valid?
            render json: route, status: :created
        else 
            render json: route.errors.full_messages
        end
    end



private 
    def route_params
        params.permit(:grade_id, :type_id, :user_id, :name, :country, :crag, :comments, :coordinates, :gym_route, :log)
    end

    
end
