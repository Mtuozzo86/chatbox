class ChatMessageSerializer < ActiveModel::Serializer
  attributes :id, :body
  belongs_to :user
  belongs_to :conversation
end
