class ApplicationController < ActionController::API
include ActionController::Cookies


def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
end

end
