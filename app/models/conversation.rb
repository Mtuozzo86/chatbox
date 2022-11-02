class Conversation < ApplicationRecord
   has_many :chat_messages
   belongs_to :user

end