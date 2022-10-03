class ChatMessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :conversation_id
end
