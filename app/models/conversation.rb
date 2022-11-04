class Conversation < ApplicationRecord
   has_many :chat_messages
   has_many :users, through: :chat_messages
   has_one  :admin, class_name: 'User',foreign_key: 'user_id'
end