class ChatMessagesController < ApplicationController
    def index
        messages = ChatMessage.all
        render json: messages, include: :user
    end
    def create
        user = User.find_by(id: session[:user_id])
        message = ChatMessage.create(body: params[:inputMessage], user_id: user.id)
        render json: message
    end
end
