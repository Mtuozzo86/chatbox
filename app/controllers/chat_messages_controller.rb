class ChatMessagesController < ApplicationController
    
    def index
        room = Conversation.find_by(id: params[:conversation_id])
        render json: room.chat_messages, include: :user
    end

    
    def create
        current_user
        message = ChatMessage.create(body: params[:inputMessage], user_id: @current_user.id) 
        render json: message, include: :user
    end
 
        
        
end
