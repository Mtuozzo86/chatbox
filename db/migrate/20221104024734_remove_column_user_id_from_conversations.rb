class RemoveColumnUserIdFromConversations < ActiveRecord::Migration[6.1]
  def change
    remove_column :conversations, :user_id
  end
end
