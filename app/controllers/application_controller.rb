class ApplicationController < ActionController::API
include ActionController::Cookies


    def current_user
        current_user ||= User.find_by(id: session[:user_id])
        
    end

    def authorized?
        render json: {error: "You are not authorized"} unless current_user
    end

end
