class Conversation < ApplicationRecord
   has_many :chat_messages
   has_many :users, -> {distinct}, through: :chat_messages

end