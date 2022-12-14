class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_name: params[:userName], password: params[:password])
        if user.valid?
        session[:user_id] = user.id
        render json: user
        else
          render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # Add a contact to a chat room
    def addcontact
      room = Conversation.find_by(id: params[:roomId])
      user = User.find_by(user_name: params[:contact])
      if user
      room.users << user unless room.users.include?(user) #if a user already belongs to a room, don't add
      render json: user
      else
      render json: {error: 'Nobody found, users names are case-sensitive'}, status: :not_found
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
