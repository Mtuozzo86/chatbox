class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find(params[:id])
    stream_for @conversation
    puts "SOMEONE IS SUBBED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  end
  
  def received(data)
    puts data
    # ConversationsChannel.broadcast_to(@conversation, {conversation: @conversation, users: @conversation.users, messages: @conversation.chat_messages})
    # puts data
    # message = Message.create(data)
    # ActionCable.server.broadcast("conversation_channel", message)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
