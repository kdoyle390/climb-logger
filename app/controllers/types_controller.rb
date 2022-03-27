class TypesController < ApplicationController
    
    def index
        types = Type.all
        render json: types
    end

    def show
        type = Type.find_by(id: params[:id])
        if type
            render json: type
        else 
            render json: { error: "record not found"}, status: :not_found
            
        end
    end

end
