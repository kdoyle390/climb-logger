class LogsController < ApplicationController
    

    def index
        logs = Log.all
        render json: logs
    end

    def show
        log = Log.find_by(id: params[:id])
        if log
            render json: log
        else 
            render json: { error: "record not found"}, status: :not_found
            
        end
    end

    def create
        log = Log.create(log_params)
        if log.valid?
            render json: log, status: :created
        else 
            render json: log.errors.full_messages
        end
    end
    
    private

    def log_params
        params.permit(:user_id, :route_id, :type_id, :grade_id, :notes, )
    end
end
