class ConversationsController < ApplicationController
    before_action :authorized?

    def create
        render json: current_user.conversations.create(room_name: params[:roomName])
    end
    
    def index
        rooms = Conversation.all
        render json: rooms, include: [:chat_messages]
    end

    def show
        room = Conversation.find(params[:id])
        render json: room, include: [:chat_messages, :users]
    end


end
