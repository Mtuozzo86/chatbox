class Conversation < ApplicationRecord
   belongs_to :user
   has_many :chat_messages

end