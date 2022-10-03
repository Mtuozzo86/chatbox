class ChatMessage < ApplicationRecord
   belongs_to :user
   belongs_to :conversation

   validates :body, presence: true

   def serialize
      serialized_message = ActiveModelSerializers::Adapter::Json.new(
      MessageSerializer.new(self)
      ).serializable_hash
      serialized_message[:message]
    end
end