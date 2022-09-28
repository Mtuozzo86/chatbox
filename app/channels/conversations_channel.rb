class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find(params[:id])
    stream_for @conversation
    puts "messages"
puts @conversation.chat_messages
    # stream_from "conversation_#{params[:id]}"
  end
  
  def received(data)
    ConversationsChannel.broadcast_to(@conversation, {conversation: @conversation, users: @conversation.users, messages: @conversation.chat_messages})
    
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
