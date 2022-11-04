class AddAdminIdToConversations < ActiveRecord::Migration[6.1]
  def change
    add_column :conversations, :admin_id, :integer
  end
end
