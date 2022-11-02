class ConversationsController < ApplicationController
    before_action :authorized?

    def create
        current_user
        convo = Conversation.create(room_name: params[:roomName])
        current_user.conversations.create(convo)
        render json: convo
    end
    
    def index
        rooms = Conversation.all
        render json: rooms, include: [:users, :chat_messages]
    end

    def show
        room = Conversation.find(params[:id])
        render json: room, include: [:users, :chat_messages]
    end


end
