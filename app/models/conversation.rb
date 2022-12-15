class Conversation < ApplicationRecord
   has_and_belongs_to_many :users
   has_many :chat_messages

   validates :room_name, presence: true
end
