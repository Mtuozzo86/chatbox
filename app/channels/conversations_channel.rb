class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find(params[:id])
    stream_for @conversation
    puts "SOMEONE IS SUBBED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  end
  
  def received(data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
