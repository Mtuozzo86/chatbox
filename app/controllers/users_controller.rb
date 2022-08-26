class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_name: params[:userName], password: params[:password])
        render json: user
    end

    def show
        byebug
        user = User.find_by(user_name: params[:userName])
        render json: user
    end


end
