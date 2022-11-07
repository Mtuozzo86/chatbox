class ConversationsController < ApplicationController
    before_action :authorized?

    def create
        render json: current_user.conversations.create(room_name: params[:roomName])
        
        # convo = Conversation.create(room_name: params[:roomName])
        # render json: convo
    end

    def addcontact
        room = Conversation.find_by(id: params[:roomId])
        user = User.find_by(user_name: params[:contact])
        room.users << user
        
    end
    
    def index
        rooms = Conversation.all
        render json: rooms, include: [:chat_messages]
    end

    def show
        room = Conversation.find(params[:id])
        render json: room, include: [:chat_messages]
    end


end
