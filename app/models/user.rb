class User < ApplicationRecord
    has_secure_password
    has_many :chat_messages
    has_many :conversations


end
