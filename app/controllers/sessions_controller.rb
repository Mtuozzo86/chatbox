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

    def destroy
      
      session.delete :user_id
      head :no_content
    end
      
  # def show
    
  #   user = User.find_by(id: session[:user_id])
  #   if user
  #     render json: user
  #   else
  #     render json: { error: "Not authorized" }, status: :unauthorized
  #   end
    
  # end
end
