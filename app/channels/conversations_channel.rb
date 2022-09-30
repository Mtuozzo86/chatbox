class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find(params[:id])
    stream_for @conversation
    
    puts @conversation.chat_messages
  end
  
  def received(data)
    ConversationsChannel.broadcast_to(@conversation, {conversation: @conversation, users: @conversation.users, messages: @conversation.chat_messages})
    
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
