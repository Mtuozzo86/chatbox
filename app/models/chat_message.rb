class ChatMessage < ApplicationRecord
   belongs_to :user
   belongs_to :conversation

   validates :body, presence: true


   def serialize
      ChatMessageSerializer.new(self)
   end

     def broadcast
    ActionCable.server.broadcast("conversation_#{self.conversation_id}", ChatMessageSerializer.new(self))
      end

end