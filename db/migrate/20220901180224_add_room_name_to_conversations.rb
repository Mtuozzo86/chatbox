class AddRoomNameToConversations < ActiveRecord::Migration[6.1]
  def change
    add_column :conversations, :room_name, :string
  end
end
