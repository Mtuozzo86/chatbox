class ConversationChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find(params[:id])
    stream_for @conversation
    byebug
    # stream_from "some_channel"
  end

  def received(data)
    ConversationChannel.broadcast_to(@conversation, {conversation: @conversation, users: @conversation.users, messages: @conversation.chat_messages})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
