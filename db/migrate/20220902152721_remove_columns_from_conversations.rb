class RemoveColumnsFromConversations < ActiveRecord::Migration[6.1]
  def change
    remove_column :conversations, :user_id, :integer
    remove_column :conversations, :chat_message_id, :integer
  end
end
