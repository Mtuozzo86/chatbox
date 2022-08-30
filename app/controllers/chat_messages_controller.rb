class ChatMessagesController < ApplicationController
    
    def index
        messages = ChatMessage.all
        render json: messages, include: :user
    end
    
    def create
        current_user
        message = ChatMessage.create(body: params[:inputMessage], user_id: @current_user.id) 
        render json: message, include: :user
    end
 
        
        
end
