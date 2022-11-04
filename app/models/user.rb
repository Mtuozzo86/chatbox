class User < ApplicationRecord
    has_secure_password
    has_many :chat_messages
    has_and_belongs_to_many :conversations
end


