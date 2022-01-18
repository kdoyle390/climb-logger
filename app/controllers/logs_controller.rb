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


end
