class SessionsController < ApplicationController
    def create
        user = User.find_by!(email: params[:email])
        session[:user_id] = user.id
        render json: user
    end 

    def destroy
        session.delete :user_id
        head :no_content
    end

    # def show
    #     user = User.find_by(id: params[:id])
    #     if user 
    #         render json: user
    #     else 
    #         render json: { error: "record not found"}, status: :not_found
            
    #     end
    # end 

    

end
