class SessionsController < ApplicationController

    def create
      user = User.find_by(user_name: params[:userName])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
    end

    def show
      if current_user
        render json: current_user
      else
        render json: {message: "no user logged in from show action"}, status: :unauthorized
      end
    end


    def destroy
      session.delete :user_id
      head :no_content
    end

end
