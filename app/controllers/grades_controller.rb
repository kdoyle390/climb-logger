class GradesController < ApplicationController
    

    def index
        grades = Grade.all
        render json: grades
    end

    
    def show
        grade = Grade.find_by(id: params[:id])
        if grade 
            render json: grade
        else 
            render json: { error: "record not found"}, status: :not_found
            
        end
    end

end
