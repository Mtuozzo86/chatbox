class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_name: params[:userName], password: params[:password])
        render json: user
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
