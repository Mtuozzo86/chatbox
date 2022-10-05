class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name
  # has_many :conversations
  has_many :chat_messages
end
