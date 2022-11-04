class Conversation < ApplicationRecord
   has_many :chat_messages
   has_many :users, through: :chat_messages
<<<<<<< HEAD
   has_one  :admin, class_name: 'User',foreign_key: 'user_id'
end
=======
end
>>>>>>> fe6b3550265ab5b2e238c46dde3b2ece958d0575
