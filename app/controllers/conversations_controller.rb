class ConversationsController < ApplicationController
    def index
        rooms = Conversation.all
        render json: rooms, include: [:users, :chat_messages]
    end

    def show
        room = Conversation.find(params[:id])
        render json: room, include: [:users, :chat_messages]
    end


end
