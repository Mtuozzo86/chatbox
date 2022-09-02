class AddChatMessagesIdToConversations < ActiveRecord::Migration[6.1]
  def change
    add_column :conversations, :chat_message_id, :integer
  end
end
