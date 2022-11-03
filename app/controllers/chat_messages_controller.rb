class ChatMessagesController < ApplicationController

    before_action :authorized?, only: :index

    def index
        room = Conversation.find_by(id: params[:conversation_id])
        render json: room.chat_messages, include: [:user, :conversation]
    end
         

    
    def create
        current_user
        message = current_user.chat_messages.create(body: params[:inputMessage], conversation_id: params[:roomId])
        conversation = message.conversation
        message.broadcast
        render json: message, include: :user
    end

 
        
        
end
