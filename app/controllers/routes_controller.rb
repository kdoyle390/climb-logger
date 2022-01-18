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


    
end
