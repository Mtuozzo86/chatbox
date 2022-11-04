class RemoveColumnChatMessageIdFromConversations < ActiveRecord::Migration[6.1]
  def change
    remove_column :conversations, :chat_message_id
  end
end
