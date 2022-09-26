class ConversationChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find(params[:id])
    stream_for @conversation
    byebug
    # stream_from "some_channel"
  end

  def received(data)
    ConversationChannel.broadcast_to(@conversation, {})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
