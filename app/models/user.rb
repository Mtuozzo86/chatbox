class User < ApplicationRecord
    has_secure_password
    has_many :chat_messages

end
