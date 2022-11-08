class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_name: params[:userName], password: params[:password])
        session[:user_id] = user.id
        render json: user
    end

    def addcontact
      room = Conversation.find_by(id: params[:roomId])
      user = User.find_by(user_name: params[:contact])
      if user
      room.users << user
      render json: user
      else
      render json: {error: 'nobody found'}, status: :not_found
      end
    end

    def show
      
      user = User.find(params[:id])
      if user
        render json: user, include: [:conversations, :chat_messages]
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end


end
