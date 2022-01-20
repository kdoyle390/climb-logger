class ApplicationController < ActionController::API
  include ActionController::Cookies
  # include ActionController::Helpers
  # protect_from_forgery with: :exception
  # before_action :authentication_required

  # def authentication_required
  #   redirect_to login_path if !logged_in?
  # end

  # def logged_in? 
  #   current_user.present?
  # end

  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id] 
  # end
  # helper_method :current_user

end
