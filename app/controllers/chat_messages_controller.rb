class ChatMessagesController < ApplicationController
    def index
        messages = ChatMessage.all
        render json: messages, include: :user
    end
end
