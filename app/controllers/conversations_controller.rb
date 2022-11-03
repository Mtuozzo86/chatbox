class ConversationsController < ApplicationController
    before_action :authorized?

    def create
        render json: current_user.conversations.create(room_name: params[:roomName], user_id: current_user.id)
        # convo = Conversation.create(room_name: params[:roomName], )
        # render json: convo
    end
    
    def index
        rooms = Conversation.all
        render json: rooms, include: [:chat_messages]
    end

    def show
        room = Conversation.find(params[:id])
        render json: room, include: [:user, :chat_messages]
    end


end
