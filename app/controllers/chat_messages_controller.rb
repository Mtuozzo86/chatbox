class ChatMessagesController < ApplicationController

    before_action :authorized?, only: :index

    def index
        room = Conversation.find_by(id: params[:conversation_id])
         
        render json: room.chat_messages, include: :user
        # render json: messages, include: :user
        
    end

    
    def create
        current_user
        message = ChatMessage.create(body: params[:inputMessage], user_id: current_user.id, conversation_id: params[:roomId])
        conversation = message.conversation
        # serialized_message = message.serialize
        # ConversationsChannel.broadcast_to(conversation, {
        #     conversation: conversation,
        #     users: conversation.users,
        #     messages: conversation.chat_messages
        # })
        ActionCable.server.broadcast("conversation_#{message.conversation.id}", message)
        
        render json: message, include: :user
    end

 
        
        
end
